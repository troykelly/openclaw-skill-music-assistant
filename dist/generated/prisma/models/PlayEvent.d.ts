import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PlayEvent
 *
 */
export type PlayEventModel = runtime.Types.Result.DefaultSelection<Prisma.$PlayEventPayload>;
export type AggregatePlayEvent = {
    _count: PlayEventCountAggregateOutputType | null;
    _avg: PlayEventAvgAggregateOutputType | null;
    _sum: PlayEventSumAggregateOutputType | null;
    _min: PlayEventMinAggregateOutputType | null;
    _max: PlayEventMaxAggregateOutputType | null;
};
export type PlayEventAvgAggregateOutputType = {
    durationMs: number | null;
};
export type PlayEventSumAggregateOutputType = {
    durationMs: number | null;
};
export type PlayEventMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    profileId: string | null;
    sessionId: string | null;
    speakerEntityId: string | null;
    uri: string | null;
    title: string | null;
    artist: string | null;
    album: string | null;
    playlistUri: string | null;
    radioStationUri: string | null;
    durationMs: number | null;
    skipped: boolean | null;
    skipReason: string | null;
    createdAt: Date | null;
};
export type PlayEventMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    profileId: string | null;
    sessionId: string | null;
    speakerEntityId: string | null;
    uri: string | null;
    title: string | null;
    artist: string | null;
    album: string | null;
    playlistUri: string | null;
    radioStationUri: string | null;
    durationMs: number | null;
    skipped: boolean | null;
    skipReason: string | null;
    createdAt: Date | null;
};
export type PlayEventCountAggregateOutputType = {
    id: number;
    userId: number;
    profileId: number;
    sessionId: number;
    speakerEntityId: number;
    uri: number;
    title: number;
    artist: number;
    album: number;
    playlistUri: number;
    radioStationUri: number;
    durationMs: number;
    skipped: number;
    skipReason: number;
    createdAt: number;
    _all: number;
};
export type PlayEventAvgAggregateInputType = {
    durationMs?: true;
};
export type PlayEventSumAggregateInputType = {
    durationMs?: true;
};
export type PlayEventMinAggregateInputType = {
    id?: true;
    userId?: true;
    profileId?: true;
    sessionId?: true;
    speakerEntityId?: true;
    uri?: true;
    title?: true;
    artist?: true;
    album?: true;
    playlistUri?: true;
    radioStationUri?: true;
    durationMs?: true;
    skipped?: true;
    skipReason?: true;
    createdAt?: true;
};
export type PlayEventMaxAggregateInputType = {
    id?: true;
    userId?: true;
    profileId?: true;
    sessionId?: true;
    speakerEntityId?: true;
    uri?: true;
    title?: true;
    artist?: true;
    album?: true;
    playlistUri?: true;
    radioStationUri?: true;
    durationMs?: true;
    skipped?: true;
    skipReason?: true;
    createdAt?: true;
};
export type PlayEventCountAggregateInputType = {
    id?: true;
    userId?: true;
    profileId?: true;
    sessionId?: true;
    speakerEntityId?: true;
    uri?: true;
    title?: true;
    artist?: true;
    album?: true;
    playlistUri?: true;
    radioStationUri?: true;
    durationMs?: true;
    skipped?: true;
    skipReason?: true;
    createdAt?: true;
    _all?: true;
};
export type PlayEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayEvent to aggregate.
     */
    where?: Prisma.PlayEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayEvents to fetch.
     */
    orderBy?: Prisma.PlayEventOrderByWithRelationInput | Prisma.PlayEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PlayEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PlayEvents
    **/
    _count?: true | PlayEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PlayEventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PlayEventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PlayEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PlayEventMaxAggregateInputType;
};
export type GetPlayEventAggregateType<T extends PlayEventAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayEvent[P]> : Prisma.GetScalarType<T[P], AggregatePlayEvent[P]>;
};
export type PlayEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayEventWhereInput;
    orderBy?: Prisma.PlayEventOrderByWithAggregationInput | Prisma.PlayEventOrderByWithAggregationInput[];
    by: Prisma.PlayEventScalarFieldEnum[] | Prisma.PlayEventScalarFieldEnum;
    having?: Prisma.PlayEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayEventCountAggregateInputType | true;
    _avg?: PlayEventAvgAggregateInputType;
    _sum?: PlayEventSumAggregateInputType;
    _min?: PlayEventMinAggregateInputType;
    _max?: PlayEventMaxAggregateInputType;
};
export type PlayEventGroupByOutputType = {
    id: string;
    userId: string;
    profileId: string | null;
    sessionId: string | null;
    speakerEntityId: string;
    uri: string;
    title: string | null;
    artist: string | null;
    album: string | null;
    playlistUri: string | null;
    radioStationUri: string | null;
    durationMs: number | null;
    skipped: boolean;
    skipReason: string | null;
    createdAt: Date;
    _count: PlayEventCountAggregateOutputType | null;
    _avg: PlayEventAvgAggregateOutputType | null;
    _sum: PlayEventSumAggregateOutputType | null;
    _min: PlayEventMinAggregateOutputType | null;
    _max: PlayEventMaxAggregateOutputType | null;
};
type GetPlayEventGroupByPayload<T extends PlayEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlayEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlayEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlayEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlayEventGroupByOutputType[P]>;
}>>;
export type PlayEventWhereInput = {
    AND?: Prisma.PlayEventWhereInput | Prisma.PlayEventWhereInput[];
    OR?: Prisma.PlayEventWhereInput[];
    NOT?: Prisma.PlayEventWhereInput | Prisma.PlayEventWhereInput[];
    id?: Prisma.StringFilter<"PlayEvent"> | string;
    userId?: Prisma.StringFilter<"PlayEvent"> | string;
    profileId?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    speakerEntityId?: Prisma.StringFilter<"PlayEvent"> | string;
    uri?: Prisma.StringFilter<"PlayEvent"> | string;
    title?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    artist?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    album?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    playlistUri?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    radioStationUri?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    durationMs?: Prisma.IntNullableFilter<"PlayEvent"> | number | null;
    skipped?: Prisma.BoolFilter<"PlayEvent"> | boolean;
    skipReason?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PlayEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    session?: Prisma.XOR<Prisma.ListeningSessionNullableScalarRelationFilter, Prisma.ListeningSessionWhereInput> | null;
};
export type PlayEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    artist?: Prisma.SortOrderInput | Prisma.SortOrder;
    album?: Prisma.SortOrderInput | Prisma.SortOrder;
    playlistUri?: Prisma.SortOrderInput | Prisma.SortOrder;
    radioStationUri?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    skipped?: Prisma.SortOrder;
    skipReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    session?: Prisma.ListeningSessionOrderByWithRelationInput;
};
export type PlayEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlayEventWhereInput | Prisma.PlayEventWhereInput[];
    OR?: Prisma.PlayEventWhereInput[];
    NOT?: Prisma.PlayEventWhereInput | Prisma.PlayEventWhereInput[];
    userId?: Prisma.StringFilter<"PlayEvent"> | string;
    profileId?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    speakerEntityId?: Prisma.StringFilter<"PlayEvent"> | string;
    uri?: Prisma.StringFilter<"PlayEvent"> | string;
    title?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    artist?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    album?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    playlistUri?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    radioStationUri?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    durationMs?: Prisma.IntNullableFilter<"PlayEvent"> | number | null;
    skipped?: Prisma.BoolFilter<"PlayEvent"> | boolean;
    skipReason?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PlayEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    session?: Prisma.XOR<Prisma.ListeningSessionNullableScalarRelationFilter, Prisma.ListeningSessionWhereInput> | null;
}, "id">;
export type PlayEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    artist?: Prisma.SortOrderInput | Prisma.SortOrder;
    album?: Prisma.SortOrderInput | Prisma.SortOrder;
    playlistUri?: Prisma.SortOrderInput | Prisma.SortOrder;
    radioStationUri?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    skipped?: Prisma.SortOrder;
    skipReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PlayEventCountOrderByAggregateInput;
    _avg?: Prisma.PlayEventAvgOrderByAggregateInput;
    _max?: Prisma.PlayEventMaxOrderByAggregateInput;
    _min?: Prisma.PlayEventMinOrderByAggregateInput;
    _sum?: Prisma.PlayEventSumOrderByAggregateInput;
};
export type PlayEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlayEventScalarWhereWithAggregatesInput | Prisma.PlayEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlayEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlayEventScalarWhereWithAggregatesInput | Prisma.PlayEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlayEvent"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PlayEvent"> | string;
    profileId?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    sessionId?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    speakerEntityId?: Prisma.StringWithAggregatesFilter<"PlayEvent"> | string;
    uri?: Prisma.StringWithAggregatesFilter<"PlayEvent"> | string;
    title?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    artist?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    album?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    playlistUri?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    radioStationUri?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    durationMs?: Prisma.IntNullableWithAggregatesFilter<"PlayEvent"> | number | null;
    skipped?: Prisma.BoolWithAggregatesFilter<"PlayEvent"> | boolean;
    skipReason?: Prisma.StringNullableWithAggregatesFilter<"PlayEvent"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PlayEvent"> | Date | string;
};
export type PlayEventCreateInput = {
    id?: string;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlayEventsInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutPlayEventsInput;
    session?: Prisma.ListeningSessionCreateNestedOneWithoutEventsInput;
};
export type PlayEventUncheckedCreateInput = {
    id?: string;
    userId: string;
    profileId?: string | null;
    sessionId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlayEventsNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutPlayEventsNestedInput;
    session?: Prisma.ListeningSessionUpdateOneWithoutEventsNestedInput;
};
export type PlayEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventCreateManyInput = {
    id?: string;
    userId: string;
    profileId?: string | null;
    sessionId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventListRelationFilter = {
    every?: Prisma.PlayEventWhereInput;
    some?: Prisma.PlayEventWhereInput;
    none?: Prisma.PlayEventWhereInput;
};
export type PlayEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlayEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    playlistUri?: Prisma.SortOrder;
    radioStationUri?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
    skipped?: Prisma.SortOrder;
    skipReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlayEventAvgOrderByAggregateInput = {
    durationMs?: Prisma.SortOrder;
};
export type PlayEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    playlistUri?: Prisma.SortOrder;
    radioStationUri?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
    skipped?: Prisma.SortOrder;
    skipReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlayEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    playlistUri?: Prisma.SortOrder;
    radioStationUri?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
    skipped?: Prisma.SortOrder;
    skipReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PlayEventSumOrderByAggregateInput = {
    durationMs?: Prisma.SortOrder;
};
export type PlayEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutUserInput, Prisma.PlayEventUncheckedCreateWithoutUserInput> | Prisma.PlayEventCreateWithoutUserInput[] | Prisma.PlayEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutUserInput | Prisma.PlayEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlayEventCreateManyUserInputEnvelope;
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
};
export type PlayEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutUserInput, Prisma.PlayEventUncheckedCreateWithoutUserInput> | Prisma.PlayEventCreateWithoutUserInput[] | Prisma.PlayEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutUserInput | Prisma.PlayEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlayEventCreateManyUserInputEnvelope;
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
};
export type PlayEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutUserInput, Prisma.PlayEventUncheckedCreateWithoutUserInput> | Prisma.PlayEventCreateWithoutUserInput[] | Prisma.PlayEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutUserInput | Prisma.PlayEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlayEventUpsertWithWhereUniqueWithoutUserInput | Prisma.PlayEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlayEventCreateManyUserInputEnvelope;
    set?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    disconnect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    delete?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    update?: Prisma.PlayEventUpdateWithWhereUniqueWithoutUserInput | Prisma.PlayEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlayEventUpdateManyWithWhereWithoutUserInput | Prisma.PlayEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
};
export type PlayEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutUserInput, Prisma.PlayEventUncheckedCreateWithoutUserInput> | Prisma.PlayEventCreateWithoutUserInput[] | Prisma.PlayEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutUserInput | Prisma.PlayEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlayEventUpsertWithWhereUniqueWithoutUserInput | Prisma.PlayEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlayEventCreateManyUserInputEnvelope;
    set?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    disconnect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    delete?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    update?: Prisma.PlayEventUpdateWithWhereUniqueWithoutUserInput | Prisma.PlayEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlayEventUpdateManyWithWhereWithoutUserInput | Prisma.PlayEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
};
export type PlayEventCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutProfileInput, Prisma.PlayEventUncheckedCreateWithoutProfileInput> | Prisma.PlayEventCreateWithoutProfileInput[] | Prisma.PlayEventUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutProfileInput | Prisma.PlayEventCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PlayEventCreateManyProfileInputEnvelope;
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
};
export type PlayEventUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutProfileInput, Prisma.PlayEventUncheckedCreateWithoutProfileInput> | Prisma.PlayEventCreateWithoutProfileInput[] | Prisma.PlayEventUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutProfileInput | Prisma.PlayEventCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PlayEventCreateManyProfileInputEnvelope;
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
};
export type PlayEventUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutProfileInput, Prisma.PlayEventUncheckedCreateWithoutProfileInput> | Prisma.PlayEventCreateWithoutProfileInput[] | Prisma.PlayEventUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutProfileInput | Prisma.PlayEventCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PlayEventUpsertWithWhereUniqueWithoutProfileInput | Prisma.PlayEventUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PlayEventCreateManyProfileInputEnvelope;
    set?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    disconnect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    delete?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    update?: Prisma.PlayEventUpdateWithWhereUniqueWithoutProfileInput | Prisma.PlayEventUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PlayEventUpdateManyWithWhereWithoutProfileInput | Prisma.PlayEventUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
};
export type PlayEventUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutProfileInput, Prisma.PlayEventUncheckedCreateWithoutProfileInput> | Prisma.PlayEventCreateWithoutProfileInput[] | Prisma.PlayEventUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutProfileInput | Prisma.PlayEventCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PlayEventUpsertWithWhereUniqueWithoutProfileInput | Prisma.PlayEventUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PlayEventCreateManyProfileInputEnvelope;
    set?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    disconnect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    delete?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    update?: Prisma.PlayEventUpdateWithWhereUniqueWithoutProfileInput | Prisma.PlayEventUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PlayEventUpdateManyWithWhereWithoutProfileInput | Prisma.PlayEventUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type PlayEventCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutSessionInput, Prisma.PlayEventUncheckedCreateWithoutSessionInput> | Prisma.PlayEventCreateWithoutSessionInput[] | Prisma.PlayEventUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutSessionInput | Prisma.PlayEventCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.PlayEventCreateManySessionInputEnvelope;
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
};
export type PlayEventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutSessionInput, Prisma.PlayEventUncheckedCreateWithoutSessionInput> | Prisma.PlayEventCreateWithoutSessionInput[] | Prisma.PlayEventUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutSessionInput | Prisma.PlayEventCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.PlayEventCreateManySessionInputEnvelope;
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
};
export type PlayEventUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutSessionInput, Prisma.PlayEventUncheckedCreateWithoutSessionInput> | Prisma.PlayEventCreateWithoutSessionInput[] | Prisma.PlayEventUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutSessionInput | Prisma.PlayEventCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.PlayEventUpsertWithWhereUniqueWithoutSessionInput | Prisma.PlayEventUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.PlayEventCreateManySessionInputEnvelope;
    set?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    disconnect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    delete?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    update?: Prisma.PlayEventUpdateWithWhereUniqueWithoutSessionInput | Prisma.PlayEventUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.PlayEventUpdateManyWithWhereWithoutSessionInput | Prisma.PlayEventUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
};
export type PlayEventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.PlayEventCreateWithoutSessionInput, Prisma.PlayEventUncheckedCreateWithoutSessionInput> | Prisma.PlayEventCreateWithoutSessionInput[] | Prisma.PlayEventUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.PlayEventCreateOrConnectWithoutSessionInput | Prisma.PlayEventCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.PlayEventUpsertWithWhereUniqueWithoutSessionInput | Prisma.PlayEventUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.PlayEventCreateManySessionInputEnvelope;
    set?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    disconnect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    delete?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    connect?: Prisma.PlayEventWhereUniqueInput | Prisma.PlayEventWhereUniqueInput[];
    update?: Prisma.PlayEventUpdateWithWhereUniqueWithoutSessionInput | Prisma.PlayEventUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.PlayEventUpdateManyWithWhereWithoutSessionInput | Prisma.PlayEventUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
};
export type PlayEventCreateWithoutUserInput = {
    id?: string;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutPlayEventsInput;
    session?: Prisma.ListeningSessionCreateNestedOneWithoutEventsInput;
};
export type PlayEventUncheckedCreateWithoutUserInput = {
    id?: string;
    profileId?: string | null;
    sessionId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventCreateOrConnectWithoutUserInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayEventCreateWithoutUserInput, Prisma.PlayEventUncheckedCreateWithoutUserInput>;
};
export type PlayEventCreateManyUserInputEnvelope = {
    data: Prisma.PlayEventCreateManyUserInput | Prisma.PlayEventCreateManyUserInput[];
};
export type PlayEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayEventUpdateWithoutUserInput, Prisma.PlayEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PlayEventCreateWithoutUserInput, Prisma.PlayEventUncheckedCreateWithoutUserInput>;
};
export type PlayEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayEventUpdateWithoutUserInput, Prisma.PlayEventUncheckedUpdateWithoutUserInput>;
};
export type PlayEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PlayEventScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayEventUpdateManyMutationInput, Prisma.PlayEventUncheckedUpdateManyWithoutUserInput>;
};
export type PlayEventScalarWhereInput = {
    AND?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
    OR?: Prisma.PlayEventScalarWhereInput[];
    NOT?: Prisma.PlayEventScalarWhereInput | Prisma.PlayEventScalarWhereInput[];
    id?: Prisma.StringFilter<"PlayEvent"> | string;
    userId?: Prisma.StringFilter<"PlayEvent"> | string;
    profileId?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    speakerEntityId?: Prisma.StringFilter<"PlayEvent"> | string;
    uri?: Prisma.StringFilter<"PlayEvent"> | string;
    title?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    artist?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    album?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    playlistUri?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    radioStationUri?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    durationMs?: Prisma.IntNullableFilter<"PlayEvent"> | number | null;
    skipped?: Prisma.BoolFilter<"PlayEvent"> | boolean;
    skipReason?: Prisma.StringNullableFilter<"PlayEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PlayEvent"> | Date | string;
};
export type PlayEventCreateWithoutProfileInput = {
    id?: string;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlayEventsInput;
    session?: Prisma.ListeningSessionCreateNestedOneWithoutEventsInput;
};
export type PlayEventUncheckedCreateWithoutProfileInput = {
    id?: string;
    userId: string;
    sessionId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventCreateOrConnectWithoutProfileInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayEventCreateWithoutProfileInput, Prisma.PlayEventUncheckedCreateWithoutProfileInput>;
};
export type PlayEventCreateManyProfileInputEnvelope = {
    data: Prisma.PlayEventCreateManyProfileInput | Prisma.PlayEventCreateManyProfileInput[];
};
export type PlayEventUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayEventUpdateWithoutProfileInput, Prisma.PlayEventUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.PlayEventCreateWithoutProfileInput, Prisma.PlayEventUncheckedCreateWithoutProfileInput>;
};
export type PlayEventUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayEventUpdateWithoutProfileInput, Prisma.PlayEventUncheckedUpdateWithoutProfileInput>;
};
export type PlayEventUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.PlayEventScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayEventUpdateManyMutationInput, Prisma.PlayEventUncheckedUpdateManyWithoutProfileInput>;
};
export type PlayEventCreateWithoutSessionInput = {
    id?: string;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlayEventsInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutPlayEventsInput;
};
export type PlayEventUncheckedCreateWithoutSessionInput = {
    id?: string;
    userId: string;
    profileId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventCreateOrConnectWithoutSessionInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayEventCreateWithoutSessionInput, Prisma.PlayEventUncheckedCreateWithoutSessionInput>;
};
export type PlayEventCreateManySessionInputEnvelope = {
    data: Prisma.PlayEventCreateManySessionInput | Prisma.PlayEventCreateManySessionInput[];
};
export type PlayEventUpsertWithWhereUniqueWithoutSessionInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayEventUpdateWithoutSessionInput, Prisma.PlayEventUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.PlayEventCreateWithoutSessionInput, Prisma.PlayEventUncheckedCreateWithoutSessionInput>;
};
export type PlayEventUpdateWithWhereUniqueWithoutSessionInput = {
    where: Prisma.PlayEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayEventUpdateWithoutSessionInput, Prisma.PlayEventUncheckedUpdateWithoutSessionInput>;
};
export type PlayEventUpdateManyWithWhereWithoutSessionInput = {
    where: Prisma.PlayEventScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayEventUpdateManyMutationInput, Prisma.PlayEventUncheckedUpdateManyWithoutSessionInput>;
};
export type PlayEventCreateManyUserInput = {
    id?: string;
    profileId?: string | null;
    sessionId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutPlayEventsNestedInput;
    session?: Prisma.ListeningSessionUpdateOneWithoutEventsNestedInput;
};
export type PlayEventUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventCreateManyProfileInput = {
    id?: string;
    userId: string;
    sessionId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlayEventsNestedInput;
    session?: Prisma.ListeningSessionUpdateOneWithoutEventsNestedInput;
};
export type PlayEventUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventCreateManySessionInput = {
    id?: string;
    userId: string;
    profileId?: string | null;
    speakerEntityId: string;
    uri: string;
    title?: string | null;
    artist?: string | null;
    album?: string | null;
    playlistUri?: string | null;
    radioStationUri?: string | null;
    durationMs?: number | null;
    skipped?: boolean;
    skipReason?: string | null;
    createdAt?: Date | string;
};
export type PlayEventUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlayEventsNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutPlayEventsNestedInput;
};
export type PlayEventUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventUncheckedUpdateManyWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioStationUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    skipped?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    skipReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlayEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    profileId?: boolean;
    sessionId?: boolean;
    speakerEntityId?: boolean;
    uri?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    playlistUri?: boolean;
    radioStationUri?: boolean;
    durationMs?: boolean;
    skipped?: boolean;
    skipReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.PlayEvent$profileArgs<ExtArgs>;
    session?: boolean | Prisma.PlayEvent$sessionArgs<ExtArgs>;
}, ExtArgs["result"]["playEvent"]>;
export type PlayEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    profileId?: boolean;
    sessionId?: boolean;
    speakerEntityId?: boolean;
    uri?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    playlistUri?: boolean;
    radioStationUri?: boolean;
    durationMs?: boolean;
    skipped?: boolean;
    skipReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.PlayEvent$profileArgs<ExtArgs>;
    session?: boolean | Prisma.PlayEvent$sessionArgs<ExtArgs>;
}, ExtArgs["result"]["playEvent"]>;
export type PlayEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    profileId?: boolean;
    sessionId?: boolean;
    speakerEntityId?: boolean;
    uri?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    playlistUri?: boolean;
    radioStationUri?: boolean;
    durationMs?: boolean;
    skipped?: boolean;
    skipReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.PlayEvent$profileArgs<ExtArgs>;
    session?: boolean | Prisma.PlayEvent$sessionArgs<ExtArgs>;
}, ExtArgs["result"]["playEvent"]>;
export type PlayEventSelectScalar = {
    id?: boolean;
    userId?: boolean;
    profileId?: boolean;
    sessionId?: boolean;
    speakerEntityId?: boolean;
    uri?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    playlistUri?: boolean;
    radioStationUri?: boolean;
    durationMs?: boolean;
    skipped?: boolean;
    skipReason?: boolean;
    createdAt?: boolean;
};
export type PlayEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "profileId" | "sessionId" | "speakerEntityId" | "uri" | "title" | "artist" | "album" | "playlistUri" | "radioStationUri" | "durationMs" | "skipped" | "skipReason" | "createdAt", ExtArgs["result"]["playEvent"]>;
export type PlayEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.PlayEvent$profileArgs<ExtArgs>;
    session?: boolean | Prisma.PlayEvent$sessionArgs<ExtArgs>;
};
export type PlayEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.PlayEvent$profileArgs<ExtArgs>;
    session?: boolean | Prisma.PlayEvent$sessionArgs<ExtArgs>;
};
export type PlayEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.PlayEvent$profileArgs<ExtArgs>;
    session?: boolean | Prisma.PlayEvent$sessionArgs<ExtArgs>;
};
export type $PlayEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlayEvent";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        profile: Prisma.$ProfilePayload<ExtArgs> | null;
        session: Prisma.$ListeningSessionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        profileId: string | null;
        sessionId: string | null;
        speakerEntityId: string;
        uri: string;
        title: string | null;
        artist: string | null;
        album: string | null;
        playlistUri: string | null;
        radioStationUri: string | null;
        durationMs: number | null;
        skipped: boolean;
        skipReason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["playEvent"]>;
    composites: {};
};
export type PlayEventGetPayload<S extends boolean | null | undefined | PlayEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlayEventPayload, S>;
export type PlayEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlayEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlayEventCountAggregateInputType | true;
};
export interface PlayEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlayEvent'];
        meta: {
            name: 'PlayEvent';
        };
    };
    /**
     * Find zero or one PlayEvent that matches the filter.
     * @param {PlayEventFindUniqueArgs} args - Arguments to find a PlayEvent
     * @example
     * // Get one PlayEvent
     * const playEvent = await prisma.playEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayEventFindUniqueArgs>(args: Prisma.SelectSubset<T, PlayEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PlayEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayEventFindUniqueOrThrowArgs} args - Arguments to find a PlayEvent
     * @example
     * // Get one PlayEvent
     * const playEvent = await prisma.playEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlayEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayEventFindFirstArgs} args - Arguments to find a PlayEvent
     * @example
     * // Get one PlayEvent
     * const playEvent = await prisma.playEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayEventFindFirstArgs>(args?: Prisma.SelectSubset<T, PlayEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayEventFindFirstOrThrowArgs} args - Arguments to find a PlayEvent
     * @example
     * // Get one PlayEvent
     * const playEvent = await prisma.playEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlayEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PlayEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayEvents
     * const playEvents = await prisma.playEvent.findMany()
     *
     * // Get first 10 PlayEvents
     * const playEvents = await prisma.playEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playEventWithIdOnly = await prisma.playEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlayEventFindManyArgs>(args?: Prisma.SelectSubset<T, PlayEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PlayEvent.
     * @param {PlayEventCreateArgs} args - Arguments to create a PlayEvent.
     * @example
     * // Create one PlayEvent
     * const PlayEvent = await prisma.playEvent.create({
     *   data: {
     *     // ... data to create a PlayEvent
     *   }
     * })
     *
     */
    create<T extends PlayEventCreateArgs>(args: Prisma.SelectSubset<T, PlayEventCreateArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PlayEvents.
     * @param {PlayEventCreateManyArgs} args - Arguments to create many PlayEvents.
     * @example
     * // Create many PlayEvents
     * const playEvent = await prisma.playEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlayEventCreateManyArgs>(args?: Prisma.SelectSubset<T, PlayEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PlayEvents and returns the data saved in the database.
     * @param {PlayEventCreateManyAndReturnArgs} args - Arguments to create many PlayEvents.
     * @example
     * // Create many PlayEvents
     * const playEvent = await prisma.playEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PlayEvents and only return the `id`
     * const playEventWithIdOnly = await prisma.playEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlayEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlayEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PlayEvent.
     * @param {PlayEventDeleteArgs} args - Arguments to delete one PlayEvent.
     * @example
     * // Delete one PlayEvent
     * const PlayEvent = await prisma.playEvent.delete({
     *   where: {
     *     // ... filter to delete one PlayEvent
     *   }
     * })
     *
     */
    delete<T extends PlayEventDeleteArgs>(args: Prisma.SelectSubset<T, PlayEventDeleteArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PlayEvent.
     * @param {PlayEventUpdateArgs} args - Arguments to update one PlayEvent.
     * @example
     * // Update one PlayEvent
     * const playEvent = await prisma.playEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlayEventUpdateArgs>(args: Prisma.SelectSubset<T, PlayEventUpdateArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PlayEvents.
     * @param {PlayEventDeleteManyArgs} args - Arguments to filter PlayEvents to delete.
     * @example
     * // Delete a few PlayEvents
     * const { count } = await prisma.playEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlayEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlayEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayEvents
     * const playEvent = await prisma.playEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlayEventUpdateManyArgs>(args: Prisma.SelectSubset<T, PlayEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayEvents and returns the data updated in the database.
     * @param {PlayEventUpdateManyAndReturnArgs} args - Arguments to update many PlayEvents.
     * @example
     * // Update many PlayEvents
     * const playEvent = await prisma.playEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PlayEvents and only return the `id`
     * const playEventWithIdOnly = await prisma.playEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlayEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlayEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PlayEvent.
     * @param {PlayEventUpsertArgs} args - Arguments to update or create a PlayEvent.
     * @example
     * // Update or create a PlayEvent
     * const playEvent = await prisma.playEvent.upsert({
     *   create: {
     *     // ... data to create a PlayEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayEvent we want to update
     *   }
     * })
     */
    upsert<T extends PlayEventUpsertArgs>(args: Prisma.SelectSubset<T, PlayEventUpsertArgs<ExtArgs>>): Prisma.Prisma__PlayEventClient<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PlayEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayEventCountArgs} args - Arguments to filter PlayEvents to count.
     * @example
     * // Count the number of PlayEvents
     * const count = await prisma.playEvent.count({
     *   where: {
     *     // ... the filter for the PlayEvents we want to count
     *   }
     * })
    **/
    count<T extends PlayEventCountArgs>(args?: Prisma.Subset<T, PlayEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlayEventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PlayEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayEventAggregateArgs>(args: Prisma.Subset<T, PlayEventAggregateArgs>): Prisma.PrismaPromise<GetPlayEventAggregateType<T>>;
    /**
     * Group by PlayEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PlayEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlayEventGroupByArgs['orderBy'];
    } : {
        orderBy?: PlayEventGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlayEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PlayEvent model
     */
    readonly fields: PlayEventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PlayEvent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PlayEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    profile<T extends Prisma.PlayEvent$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayEvent$profileArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    session<T extends Prisma.PlayEvent$sessionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayEvent$sessionArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the PlayEvent model
 */
export interface PlayEventFieldRefs {
    readonly id: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly profileId: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly sessionId: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly speakerEntityId: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly uri: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly title: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly artist: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly album: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly playlistUri: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly radioStationUri: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly durationMs: Prisma.FieldRef<"PlayEvent", 'Int'>;
    readonly skipped: Prisma.FieldRef<"PlayEvent", 'Boolean'>;
    readonly skipReason: Prisma.FieldRef<"PlayEvent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PlayEvent", 'DateTime'>;
}
/**
 * PlayEvent findUnique
 */
export type PlayEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * Filter, which PlayEvent to fetch.
     */
    where: Prisma.PlayEventWhereUniqueInput;
};
/**
 * PlayEvent findUniqueOrThrow
 */
export type PlayEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * Filter, which PlayEvent to fetch.
     */
    where: Prisma.PlayEventWhereUniqueInput;
};
/**
 * PlayEvent findFirst
 */
export type PlayEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * Filter, which PlayEvent to fetch.
     */
    where?: Prisma.PlayEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayEvents to fetch.
     */
    orderBy?: Prisma.PlayEventOrderByWithRelationInput | Prisma.PlayEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayEvents.
     */
    cursor?: Prisma.PlayEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayEvents.
     */
    distinct?: Prisma.PlayEventScalarFieldEnum | Prisma.PlayEventScalarFieldEnum[];
};
/**
 * PlayEvent findFirstOrThrow
 */
export type PlayEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * Filter, which PlayEvent to fetch.
     */
    where?: Prisma.PlayEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayEvents to fetch.
     */
    orderBy?: Prisma.PlayEventOrderByWithRelationInput | Prisma.PlayEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayEvents.
     */
    cursor?: Prisma.PlayEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayEvents.
     */
    distinct?: Prisma.PlayEventScalarFieldEnum | Prisma.PlayEventScalarFieldEnum[];
};
/**
 * PlayEvent findMany
 */
export type PlayEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * Filter, which PlayEvents to fetch.
     */
    where?: Prisma.PlayEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayEvents to fetch.
     */
    orderBy?: Prisma.PlayEventOrderByWithRelationInput | Prisma.PlayEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PlayEvents.
     */
    cursor?: Prisma.PlayEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayEvents.
     */
    skip?: number;
    distinct?: Prisma.PlayEventScalarFieldEnum | Prisma.PlayEventScalarFieldEnum[];
};
/**
 * PlayEvent create
 */
export type PlayEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * The data needed to create a PlayEvent.
     */
    data: Prisma.XOR<Prisma.PlayEventCreateInput, Prisma.PlayEventUncheckedCreateInput>;
};
/**
 * PlayEvent createMany
 */
export type PlayEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayEvents.
     */
    data: Prisma.PlayEventCreateManyInput | Prisma.PlayEventCreateManyInput[];
};
/**
 * PlayEvent createManyAndReturn
 */
export type PlayEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * The data used to create many PlayEvents.
     */
    data: Prisma.PlayEventCreateManyInput | Prisma.PlayEventCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayEvent update
 */
export type PlayEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * The data needed to update a PlayEvent.
     */
    data: Prisma.XOR<Prisma.PlayEventUpdateInput, Prisma.PlayEventUncheckedUpdateInput>;
    /**
     * Choose, which PlayEvent to update.
     */
    where: Prisma.PlayEventWhereUniqueInput;
};
/**
 * PlayEvent updateMany
 */
export type PlayEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayEvents.
     */
    data: Prisma.XOR<Prisma.PlayEventUpdateManyMutationInput, Prisma.PlayEventUncheckedUpdateManyInput>;
    /**
     * Filter which PlayEvents to update
     */
    where?: Prisma.PlayEventWhereInput;
    /**
     * Limit how many PlayEvents to update.
     */
    limit?: number;
};
/**
 * PlayEvent updateManyAndReturn
 */
export type PlayEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * The data used to update PlayEvents.
     */
    data: Prisma.XOR<Prisma.PlayEventUpdateManyMutationInput, Prisma.PlayEventUncheckedUpdateManyInput>;
    /**
     * Filter which PlayEvents to update
     */
    where?: Prisma.PlayEventWhereInput;
    /**
     * Limit how many PlayEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayEvent upsert
 */
export type PlayEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * The filter to search for the PlayEvent to update in case it exists.
     */
    where: Prisma.PlayEventWhereUniqueInput;
    /**
     * In case the PlayEvent found by the `where` argument doesn't exist, create a new PlayEvent with this data.
     */
    create: Prisma.XOR<Prisma.PlayEventCreateInput, Prisma.PlayEventUncheckedCreateInput>;
    /**
     * In case the PlayEvent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PlayEventUpdateInput, Prisma.PlayEventUncheckedUpdateInput>;
};
/**
 * PlayEvent delete
 */
export type PlayEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
    /**
     * Filter which PlayEvent to delete.
     */
    where: Prisma.PlayEventWhereUniqueInput;
};
/**
 * PlayEvent deleteMany
 */
export type PlayEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayEvents to delete
     */
    where?: Prisma.PlayEventWhereInput;
    /**
     * Limit how many PlayEvents to delete.
     */
    limit?: number;
};
/**
 * PlayEvent.profile
 */
export type PlayEvent$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
/**
 * PlayEvent.session
 */
export type PlayEvent$sessionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningSession
     */
    select?: Prisma.ListeningSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListeningSession
     */
    omit?: Prisma.ListeningSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListeningSessionInclude<ExtArgs> | null;
    where?: Prisma.ListeningSessionWhereInput;
};
/**
 * PlayEvent without action
 */
export type PlayEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayEvent
     */
    select?: Prisma.PlayEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayEvent
     */
    omit?: Prisma.PlayEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayEventInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PlayEvent.d.ts.map