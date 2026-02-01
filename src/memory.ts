import { PrismaClient, PreferenceKind } from "./generated/prisma/client.ts";

export type LogPlayEventInput = {
  userSlug: string;
  speakerEntityId: string;
  uri: string;
  title?: string;
  artist?: string;
  album?: string;
  profileSlug?: string;
};

export async function ensureUser(prisma: PrismaClient, userSlug: string) {
  const slug = userSlug.trim();
  if (!slug) throw new Error("userSlug is required");

  return prisma.user.upsert({
    where: { slug },
    update: {},
    create: { slug, name: slug },
  });
}

export async function ensureProfile(prisma: PrismaClient, userId: string, profileSlug: string) {
  const slug = profileSlug.trim();
  if (!slug) throw new Error("profileSlug is required");

  return prisma.profile.upsert({
    where: { userId_slug: { userId, slug } },
    update: {},
    create: { userId, slug, name: slug },
  });
}

export async function logPlayEvent(prisma: PrismaClient, input: LogPlayEventInput) {
  const user = await ensureUser(prisma, input.userSlug);
  const profile = input.profileSlug
    ? await ensureProfile(prisma, user.id, input.profileSlug)
    : null;

  return prisma.playEvent.create({
    data: {
      userId: user.id,
      profileId: profile?.id,
      speakerEntityId: input.speakerEntityId,
      uri: input.uri,
      title: input.title,
      artist: input.artist,
      album: input.album,
    },
  });
}

export async function listRecentPlayEvents(prisma: PrismaClient, userSlug: string, limit: number) {
  const user = await prisma.user.findUnique({ where: { slug: userSlug } });
  if (!user) return [];

  return prisma.playEvent.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

export async function setPreferenceWeight(prisma: PrismaClient, params: {
  userSlug: string;
  profileSlug: string;
  kind: PreferenceKind;
  key: string;
  weight: number;
}) {
  const user = await ensureUser(prisma, params.userSlug);
  const profile = await ensureProfile(prisma, user.id, params.profileSlug);

  return prisma.preferenceWeight.upsert({
    where: { profileId_kind_key: { profileId: profile.id, kind: params.kind, key: params.key } },
    update: { weight: params.weight },
    create: { profileId: profile.id, kind: params.kind, key: params.key, weight: params.weight },
  });
}
