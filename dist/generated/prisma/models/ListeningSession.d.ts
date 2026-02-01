import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ListeningSession
 * A continuous listening session on a speaker.
 */
export type ListeningSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$ListeningSessionPayload>;
export type AggregateListeningSession = {
    _count: ListeningSessionCountAggregateOutputType | null;
    _min: ListeningSessionMinAggregateOutputType | null;
    _max: ListeningSessionMaxAggregateOutputType | null;
};
export type ListeningSessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    speakerEntityId: string | null;
    moodName: string | null;
    playlistUri: string | null;
    radioCriteria: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
};
export type ListeningSessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    speakerEntityId: string | null;
    moodName: string | null;
    playlistUri: string | null;
    radioCriteria: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
};
export type ListeningSessionCountAggregateOutputType = {
    id: number;
    userId: number;
    speakerEntityId: number;
    moodName: number;
    playlistUri: number;
    radioCriteria: number;
    startedAt: number;
    endedAt: number;
    _all: number;
};
export type ListeningSessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    speakerEntityId?: true;
    moodName?: true;
    playlistUri?: true;
    radioCriteria?: true;
    startedAt?: true;
    endedAt?: true;
};
export type ListeningSessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    speakerEntityId?: true;
    moodName?: true;
    playlistUri?: true;
    radioCriteria?: true;
    startedAt?: true;
    endedAt?: true;
};
export type ListeningSessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    speakerEntityId?: true;
    moodName?: true;
    playlistUri?: true;
    radioCriteria?: true;
    startedAt?: true;
    endedAt?: true;
    _all?: true;
};
export type ListeningSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ListeningSession to aggregate.
     */
    where?: Prisma.ListeningSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListeningSessions to fetch.
     */
    orderBy?: Prisma.ListeningSessionOrderByWithRelationInput | Prisma.ListeningSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ListeningSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListeningSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListeningSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ListeningSessions
    **/
    _count?: true | ListeningSessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ListeningSessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ListeningSessionMaxAggregateInputType;
};
export type GetListeningSessionAggregateType<T extends ListeningSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateListeningSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListeningSession[P]> : Prisma.GetScalarType<T[P], AggregateListeningSession[P]>;
};
export type ListeningSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListeningSessionWhereInput;
    orderBy?: Prisma.ListeningSessionOrderByWithAggregationInput | Prisma.ListeningSessionOrderByWithAggregationInput[];
    by: Prisma.ListeningSessionScalarFieldEnum[] | Prisma.ListeningSessionScalarFieldEnum;
    having?: Prisma.ListeningSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ListeningSessionCountAggregateInputType | true;
    _min?: ListeningSessionMinAggregateInputType;
    _max?: ListeningSessionMaxAggregateInputType;
};
export type ListeningSessionGroupByOutputType = {
    id: string;
    userId: string;
    speakerEntityId: string;
    moodName: string | null;
    playlistUri: string | null;
    radioCriteria: string | null;
    startedAt: Date;
    endedAt: Date | null;
    _count: ListeningSessionCountAggregateOutputType | null;
    _min: ListeningSessionMinAggregateOutputType | null;
    _max: ListeningSessionMaxAggregateOutputType | null;
};
type GetListeningSessionGroupByPayload<T extends ListeningSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ListeningSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ListeningSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ListeningSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ListeningSessionGroupByOutputType[P]>;
}>>;
export type ListeningSessionWhereInput = {
    AND?: Prisma.ListeningSessionWhereInput | Prisma.ListeningSessionWhereInput[];
    OR?: Prisma.ListeningSessionWhereInput[];
    NOT?: Prisma.ListeningSessionWhereInput | Prisma.ListeningSessionWhereInput[];
    id?: Prisma.StringFilter<"ListeningSession"> | string;
    userId?: Prisma.StringFilter<"ListeningSession"> | string;
    speakerEntityId?: Prisma.StringFilter<"ListeningSession"> | string;
    moodName?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    playlistUri?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    radioCriteria?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    startedAt?: Prisma.DateTimeFilter<"ListeningSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"ListeningSession"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    events?: Prisma.PlayEventListRelationFilter;
};
export type ListeningSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    moodName?: Prisma.SortOrderInput | Prisma.SortOrder;
    playlistUri?: Prisma.SortOrderInput | Prisma.SortOrder;
    radioCriteria?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    events?: Prisma.PlayEventOrderByRelationAggregateInput;
};
export type ListeningSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ListeningSessionWhereInput | Prisma.ListeningSessionWhereInput[];
    OR?: Prisma.ListeningSessionWhereInput[];
    NOT?: Prisma.ListeningSessionWhereInput | Prisma.ListeningSessionWhereInput[];
    userId?: Prisma.StringFilter<"ListeningSession"> | string;
    speakerEntityId?: Prisma.StringFilter<"ListeningSession"> | string;
    moodName?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    playlistUri?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    radioCriteria?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    startedAt?: Prisma.DateTimeFilter<"ListeningSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"ListeningSession"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    events?: Prisma.PlayEventListRelationFilter;
}, "id">;
export type ListeningSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    moodName?: Prisma.SortOrderInput | Prisma.SortOrder;
    playlistUri?: Prisma.SortOrderInput | Prisma.SortOrder;
    radioCriteria?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ListeningSessionCountOrderByAggregateInput;
    _max?: Prisma.ListeningSessionMaxOrderByAggregateInput;
    _min?: Prisma.ListeningSessionMinOrderByAggregateInput;
};
export type ListeningSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ListeningSessionScalarWhereWithAggregatesInput | Prisma.ListeningSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ListeningSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ListeningSessionScalarWhereWithAggregatesInput | Prisma.ListeningSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ListeningSession"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ListeningSession"> | string;
    speakerEntityId?: Prisma.StringWithAggregatesFilter<"ListeningSession"> | string;
    moodName?: Prisma.StringNullableWithAggregatesFilter<"ListeningSession"> | string | null;
    playlistUri?: Prisma.StringNullableWithAggregatesFilter<"ListeningSession"> | string | null;
    radioCriteria?: Prisma.StringNullableWithAggregatesFilter<"ListeningSession"> | string | null;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"ListeningSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ListeningSession"> | Date | string | null;
};
export type ListeningSessionCreateInput = {
    id?: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutSessionsInput;
    events?: Prisma.PlayEventCreateNestedManyWithoutSessionInput;
};
export type ListeningSessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    events?: Prisma.PlayEventUncheckedCreateNestedManyWithoutSessionInput;
};
export type ListeningSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput;
    events?: Prisma.PlayEventUpdateManyWithoutSessionNestedInput;
};
export type ListeningSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    events?: Prisma.PlayEventUncheckedUpdateManyWithoutSessionNestedInput;
};
export type ListeningSessionCreateManyInput = {
    id?: string;
    userId: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type ListeningSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ListeningSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ListeningSessionListRelationFilter = {
    every?: Prisma.ListeningSessionWhereInput;
    some?: Prisma.ListeningSessionWhereInput;
    none?: Prisma.ListeningSessionWhereInput;
};
export type ListeningSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ListeningSessionNullableScalarRelationFilter = {
    is?: Prisma.ListeningSessionWhereInput | null;
    isNot?: Prisma.ListeningSessionWhereInput | null;
};
export type ListeningSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    moodName?: Prisma.SortOrder;
    playlistUri?: Prisma.SortOrder;
    radioCriteria?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
};
export type ListeningSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    moodName?: Prisma.SortOrder;
    playlistUri?: Prisma.SortOrder;
    radioCriteria?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
};
export type ListeningSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    speakerEntityId?: Prisma.SortOrder;
    moodName?: Prisma.SortOrder;
    playlistUri?: Prisma.SortOrder;
    radioCriteria?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
};
export type ListeningSessionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ListeningSessionCreateWithoutUserInput, Prisma.ListeningSessionUncheckedCreateWithoutUserInput> | Prisma.ListeningSessionCreateWithoutUserInput[] | Prisma.ListeningSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ListeningSessionCreateOrConnectWithoutUserInput | Prisma.ListeningSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ListeningSessionCreateManyUserInputEnvelope;
    connect?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
};
export type ListeningSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ListeningSessionCreateWithoutUserInput, Prisma.ListeningSessionUncheckedCreateWithoutUserInput> | Prisma.ListeningSessionCreateWithoutUserInput[] | Prisma.ListeningSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ListeningSessionCreateOrConnectWithoutUserInput | Prisma.ListeningSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ListeningSessionCreateManyUserInputEnvelope;
    connect?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
};
export type ListeningSessionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ListeningSessionCreateWithoutUserInput, Prisma.ListeningSessionUncheckedCreateWithoutUserInput> | Prisma.ListeningSessionCreateWithoutUserInput[] | Prisma.ListeningSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ListeningSessionCreateOrConnectWithoutUserInput | Prisma.ListeningSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ListeningSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.ListeningSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ListeningSessionCreateManyUserInputEnvelope;
    set?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    disconnect?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    delete?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    connect?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    update?: Prisma.ListeningSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.ListeningSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ListeningSessionUpdateManyWithWhereWithoutUserInput | Prisma.ListeningSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ListeningSessionScalarWhereInput | Prisma.ListeningSessionScalarWhereInput[];
};
export type ListeningSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ListeningSessionCreateWithoutUserInput, Prisma.ListeningSessionUncheckedCreateWithoutUserInput> | Prisma.ListeningSessionCreateWithoutUserInput[] | Prisma.ListeningSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ListeningSessionCreateOrConnectWithoutUserInput | Prisma.ListeningSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ListeningSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.ListeningSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ListeningSessionCreateManyUserInputEnvelope;
    set?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    disconnect?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    delete?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    connect?: Prisma.ListeningSessionWhereUniqueInput | Prisma.ListeningSessionWhereUniqueInput[];
    update?: Prisma.ListeningSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.ListeningSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ListeningSessionUpdateManyWithWhereWithoutUserInput | Prisma.ListeningSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ListeningSessionScalarWhereInput | Prisma.ListeningSessionScalarWhereInput[];
};
export type ListeningSessionCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.ListeningSessionCreateWithoutEventsInput, Prisma.ListeningSessionUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ListeningSessionCreateOrConnectWithoutEventsInput;
    connect?: Prisma.ListeningSessionWhereUniqueInput;
};
export type ListeningSessionUpdateOneWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.ListeningSessionCreateWithoutEventsInput, Prisma.ListeningSessionUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ListeningSessionCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.ListeningSessionUpsertWithoutEventsInput;
    disconnect?: Prisma.ListeningSessionWhereInput | boolean;
    delete?: Prisma.ListeningSessionWhereInput | boolean;
    connect?: Prisma.ListeningSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ListeningSessionUpdateToOneWithWhereWithoutEventsInput, Prisma.ListeningSessionUpdateWithoutEventsInput>, Prisma.ListeningSessionUncheckedUpdateWithoutEventsInput>;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ListeningSessionCreateWithoutUserInput = {
    id?: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    events?: Prisma.PlayEventCreateNestedManyWithoutSessionInput;
};
export type ListeningSessionUncheckedCreateWithoutUserInput = {
    id?: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    events?: Prisma.PlayEventUncheckedCreateNestedManyWithoutSessionInput;
};
export type ListeningSessionCreateOrConnectWithoutUserInput = {
    where: Prisma.ListeningSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListeningSessionCreateWithoutUserInput, Prisma.ListeningSessionUncheckedCreateWithoutUserInput>;
};
export type ListeningSessionCreateManyUserInputEnvelope = {
    data: Prisma.ListeningSessionCreateManyUserInput | Prisma.ListeningSessionCreateManyUserInput[];
};
export type ListeningSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ListeningSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ListeningSessionUpdateWithoutUserInput, Prisma.ListeningSessionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ListeningSessionCreateWithoutUserInput, Prisma.ListeningSessionUncheckedCreateWithoutUserInput>;
};
export type ListeningSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ListeningSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ListeningSessionUpdateWithoutUserInput, Prisma.ListeningSessionUncheckedUpdateWithoutUserInput>;
};
export type ListeningSessionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ListeningSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.ListeningSessionUpdateManyMutationInput, Prisma.ListeningSessionUncheckedUpdateManyWithoutUserInput>;
};
export type ListeningSessionScalarWhereInput = {
    AND?: Prisma.ListeningSessionScalarWhereInput | Prisma.ListeningSessionScalarWhereInput[];
    OR?: Prisma.ListeningSessionScalarWhereInput[];
    NOT?: Prisma.ListeningSessionScalarWhereInput | Prisma.ListeningSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"ListeningSession"> | string;
    userId?: Prisma.StringFilter<"ListeningSession"> | string;
    speakerEntityId?: Prisma.StringFilter<"ListeningSession"> | string;
    moodName?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    playlistUri?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    radioCriteria?: Prisma.StringNullableFilter<"ListeningSession"> | string | null;
    startedAt?: Prisma.DateTimeFilter<"ListeningSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"ListeningSession"> | Date | string | null;
};
export type ListeningSessionCreateWithoutEventsInput = {
    id?: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutSessionsInput;
};
export type ListeningSessionUncheckedCreateWithoutEventsInput = {
    id?: string;
    userId: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type ListeningSessionCreateOrConnectWithoutEventsInput = {
    where: Prisma.ListeningSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ListeningSessionCreateWithoutEventsInput, Prisma.ListeningSessionUncheckedCreateWithoutEventsInput>;
};
export type ListeningSessionUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.ListeningSessionUpdateWithoutEventsInput, Prisma.ListeningSessionUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.ListeningSessionCreateWithoutEventsInput, Prisma.ListeningSessionUncheckedCreateWithoutEventsInput>;
    where?: Prisma.ListeningSessionWhereInput;
};
export type ListeningSessionUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.ListeningSessionWhereInput;
    data: Prisma.XOR<Prisma.ListeningSessionUpdateWithoutEventsInput, Prisma.ListeningSessionUncheckedUpdateWithoutEventsInput>;
};
export type ListeningSessionUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput;
};
export type ListeningSessionUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ListeningSessionCreateManyUserInput = {
    id?: string;
    speakerEntityId: string;
    moodName?: string | null;
    playlistUri?: string | null;
    radioCriteria?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type ListeningSessionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    events?: Prisma.PlayEventUpdateManyWithoutSessionNestedInput;
};
export type ListeningSessionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    events?: Prisma.PlayEventUncheckedUpdateManyWithoutSessionNestedInput;
};
export type ListeningSessionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    speakerEntityId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    playlistUri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    radioCriteria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type ListeningSessionCountOutputType
 */
export type ListeningSessionCountOutputType = {
    events: number;
};
export type ListeningSessionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | ListeningSessionCountOutputTypeCountEventsArgs;
};
/**
 * ListeningSessionCountOutputType without action
 */
export type ListeningSessionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningSessionCountOutputType
     */
    select?: Prisma.ListeningSessionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ListeningSessionCountOutputType without action
 */
export type ListeningSessionCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayEventWhereInput;
};
export type ListeningSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    speakerEntityId?: boolean;
    moodName?: boolean;
    playlistUri?: boolean;
    radioCriteria?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.ListeningSession$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.ListeningSessionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listeningSession"]>;
export type ListeningSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    speakerEntityId?: boolean;
    moodName?: boolean;
    playlistUri?: boolean;
    radioCriteria?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listeningSession"]>;
export type ListeningSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    speakerEntityId?: boolean;
    moodName?: boolean;
    playlistUri?: boolean;
    radioCriteria?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listeningSession"]>;
export type ListeningSessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    speakerEntityId?: boolean;
    moodName?: boolean;
    playlistUri?: boolean;
    radioCriteria?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
};
export type ListeningSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "speakerEntityId" | "moodName" | "playlistUri" | "radioCriteria" | "startedAt" | "endedAt", ExtArgs["result"]["listeningSession"]>;
export type ListeningSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.ListeningSession$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.ListeningSessionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ListeningSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ListeningSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ListeningSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ListeningSession";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        events: Prisma.$PlayEventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        speakerEntityId: string;
        moodName: string | null;
        playlistUri: string | null;
        radioCriteria: string | null;
        startedAt: Date;
        endedAt: Date | null;
    }, ExtArgs["result"]["listeningSession"]>;
    composites: {};
};
export type ListeningSessionGetPayload<S extends boolean | null | undefined | ListeningSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload, S>;
export type ListeningSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ListeningSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ListeningSessionCountAggregateInputType | true;
};
export interface ListeningSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ListeningSession'];
        meta: {
            name: 'ListeningSession';
        };
    };
    /**
     * Find zero or one ListeningSession that matches the filter.
     * @param {ListeningSessionFindUniqueArgs} args - Arguments to find a ListeningSession
     * @example
     * // Get one ListeningSession
     * const listeningSession = await prisma.listeningSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListeningSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, ListeningSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ListeningSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListeningSessionFindUniqueOrThrowArgs} args - Arguments to find a ListeningSession
     * @example
     * // Get one ListeningSession
     * const listeningSession = await prisma.listeningSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListeningSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ListeningSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ListeningSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningSessionFindFirstArgs} args - Arguments to find a ListeningSession
     * @example
     * // Get one ListeningSession
     * const listeningSession = await prisma.listeningSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListeningSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, ListeningSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ListeningSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningSessionFindFirstOrThrowArgs} args - Arguments to find a ListeningSession
     * @example
     * // Get one ListeningSession
     * const listeningSession = await prisma.listeningSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListeningSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ListeningSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ListeningSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListeningSessions
     * const listeningSessions = await prisma.listeningSession.findMany()
     *
     * // Get first 10 ListeningSessions
     * const listeningSessions = await prisma.listeningSession.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const listeningSessionWithIdOnly = await prisma.listeningSession.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ListeningSessionFindManyArgs>(args?: Prisma.SelectSubset<T, ListeningSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ListeningSession.
     * @param {ListeningSessionCreateArgs} args - Arguments to create a ListeningSession.
     * @example
     * // Create one ListeningSession
     * const ListeningSession = await prisma.listeningSession.create({
     *   data: {
     *     // ... data to create a ListeningSession
     *   }
     * })
     *
     */
    create<T extends ListeningSessionCreateArgs>(args: Prisma.SelectSubset<T, ListeningSessionCreateArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ListeningSessions.
     * @param {ListeningSessionCreateManyArgs} args - Arguments to create many ListeningSessions.
     * @example
     * // Create many ListeningSessions
     * const listeningSession = await prisma.listeningSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ListeningSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, ListeningSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ListeningSessions and returns the data saved in the database.
     * @param {ListeningSessionCreateManyAndReturnArgs} args - Arguments to create many ListeningSessions.
     * @example
     * // Create many ListeningSessions
     * const listeningSession = await prisma.listeningSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ListeningSessions and only return the `id`
     * const listeningSessionWithIdOnly = await prisma.listeningSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ListeningSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ListeningSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ListeningSession.
     * @param {ListeningSessionDeleteArgs} args - Arguments to delete one ListeningSession.
     * @example
     * // Delete one ListeningSession
     * const ListeningSession = await prisma.listeningSession.delete({
     *   where: {
     *     // ... filter to delete one ListeningSession
     *   }
     * })
     *
     */
    delete<T extends ListeningSessionDeleteArgs>(args: Prisma.SelectSubset<T, ListeningSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ListeningSession.
     * @param {ListeningSessionUpdateArgs} args - Arguments to update one ListeningSession.
     * @example
     * // Update one ListeningSession
     * const listeningSession = await prisma.listeningSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ListeningSessionUpdateArgs>(args: Prisma.SelectSubset<T, ListeningSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ListeningSessions.
     * @param {ListeningSessionDeleteManyArgs} args - Arguments to filter ListeningSessions to delete.
     * @example
     * // Delete a few ListeningSessions
     * const { count } = await prisma.listeningSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ListeningSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ListeningSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ListeningSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListeningSessions
     * const listeningSession = await prisma.listeningSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ListeningSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, ListeningSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ListeningSessions and returns the data updated in the database.
     * @param {ListeningSessionUpdateManyAndReturnArgs} args - Arguments to update many ListeningSessions.
     * @example
     * // Update many ListeningSessions
     * const listeningSession = await prisma.listeningSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ListeningSessions and only return the `id`
     * const listeningSessionWithIdOnly = await prisma.listeningSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListeningSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ListeningSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ListeningSession.
     * @param {ListeningSessionUpsertArgs} args - Arguments to update or create a ListeningSession.
     * @example
     * // Update or create a ListeningSession
     * const listeningSession = await prisma.listeningSession.upsert({
     *   create: {
     *     // ... data to create a ListeningSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListeningSession we want to update
     *   }
     * })
     */
    upsert<T extends ListeningSessionUpsertArgs>(args: Prisma.SelectSubset<T, ListeningSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__ListeningSessionClient<runtime.Types.Result.GetResult<Prisma.$ListeningSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ListeningSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningSessionCountArgs} args - Arguments to filter ListeningSessions to count.
     * @example
     * // Count the number of ListeningSessions
     * const count = await prisma.listeningSession.count({
     *   where: {
     *     // ... the filter for the ListeningSessions we want to count
     *   }
     * })
    **/
    count<T extends ListeningSessionCountArgs>(args?: Prisma.Subset<T, ListeningSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ListeningSessionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ListeningSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListeningSessionAggregateArgs>(args: Prisma.Subset<T, ListeningSessionAggregateArgs>): Prisma.PrismaPromise<GetListeningSessionAggregateType<T>>;
    /**
     * Group by ListeningSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningSessionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ListeningSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ListeningSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: ListeningSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ListeningSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListeningSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ListeningSession model
     */
    readonly fields: ListeningSessionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ListeningSession.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ListeningSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    events<T extends Prisma.ListeningSession$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ListeningSession$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ListeningSession model
 */
export interface ListeningSessionFieldRefs {
    readonly id: Prisma.FieldRef<"ListeningSession", 'String'>;
    readonly userId: Prisma.FieldRef<"ListeningSession", 'String'>;
    readonly speakerEntityId: Prisma.FieldRef<"ListeningSession", 'String'>;
    readonly moodName: Prisma.FieldRef<"ListeningSession", 'String'>;
    readonly playlistUri: Prisma.FieldRef<"ListeningSession", 'String'>;
    readonly radioCriteria: Prisma.FieldRef<"ListeningSession", 'String'>;
    readonly startedAt: Prisma.FieldRef<"ListeningSession", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"ListeningSession", 'DateTime'>;
}
/**
 * ListeningSession findUnique
 */
export type ListeningSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ListeningSession to fetch.
     */
    where: Prisma.ListeningSessionWhereUniqueInput;
};
/**
 * ListeningSession findUniqueOrThrow
 */
export type ListeningSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ListeningSession to fetch.
     */
    where: Prisma.ListeningSessionWhereUniqueInput;
};
/**
 * ListeningSession findFirst
 */
export type ListeningSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ListeningSession to fetch.
     */
    where?: Prisma.ListeningSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListeningSessions to fetch.
     */
    orderBy?: Prisma.ListeningSessionOrderByWithRelationInput | Prisma.ListeningSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ListeningSessions.
     */
    cursor?: Prisma.ListeningSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListeningSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListeningSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ListeningSessions.
     */
    distinct?: Prisma.ListeningSessionScalarFieldEnum | Prisma.ListeningSessionScalarFieldEnum[];
};
/**
 * ListeningSession findFirstOrThrow
 */
export type ListeningSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ListeningSession to fetch.
     */
    where?: Prisma.ListeningSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListeningSessions to fetch.
     */
    orderBy?: Prisma.ListeningSessionOrderByWithRelationInput | Prisma.ListeningSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ListeningSessions.
     */
    cursor?: Prisma.ListeningSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListeningSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListeningSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ListeningSessions.
     */
    distinct?: Prisma.ListeningSessionScalarFieldEnum | Prisma.ListeningSessionScalarFieldEnum[];
};
/**
 * ListeningSession findMany
 */
export type ListeningSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ListeningSessions to fetch.
     */
    where?: Prisma.ListeningSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ListeningSessions to fetch.
     */
    orderBy?: Prisma.ListeningSessionOrderByWithRelationInput | Prisma.ListeningSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ListeningSessions.
     */
    cursor?: Prisma.ListeningSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ListeningSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ListeningSessions.
     */
    skip?: number;
    distinct?: Prisma.ListeningSessionScalarFieldEnum | Prisma.ListeningSessionScalarFieldEnum[];
};
/**
 * ListeningSession create
 */
export type ListeningSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ListeningSession.
     */
    data: Prisma.XOR<Prisma.ListeningSessionCreateInput, Prisma.ListeningSessionUncheckedCreateInput>;
};
/**
 * ListeningSession createMany
 */
export type ListeningSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListeningSessions.
     */
    data: Prisma.ListeningSessionCreateManyInput | Prisma.ListeningSessionCreateManyInput[];
};
/**
 * ListeningSession createManyAndReturn
 */
export type ListeningSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningSession
     */
    select?: Prisma.ListeningSessionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ListeningSession
     */
    omit?: Prisma.ListeningSessionOmit<ExtArgs> | null;
    /**
     * The data used to create many ListeningSessions.
     */
    data: Prisma.ListeningSessionCreateManyInput | Prisma.ListeningSessionCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListeningSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ListeningSession update
 */
export type ListeningSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ListeningSession.
     */
    data: Prisma.XOR<Prisma.ListeningSessionUpdateInput, Prisma.ListeningSessionUncheckedUpdateInput>;
    /**
     * Choose, which ListeningSession to update.
     */
    where: Prisma.ListeningSessionWhereUniqueInput;
};
/**
 * ListeningSession updateMany
 */
export type ListeningSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ListeningSessions.
     */
    data: Prisma.XOR<Prisma.ListeningSessionUpdateManyMutationInput, Prisma.ListeningSessionUncheckedUpdateManyInput>;
    /**
     * Filter which ListeningSessions to update
     */
    where?: Prisma.ListeningSessionWhereInput;
    /**
     * Limit how many ListeningSessions to update.
     */
    limit?: number;
};
/**
 * ListeningSession updateManyAndReturn
 */
export type ListeningSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListeningSession
     */
    select?: Prisma.ListeningSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ListeningSession
     */
    omit?: Prisma.ListeningSessionOmit<ExtArgs> | null;
    /**
     * The data used to update ListeningSessions.
     */
    data: Prisma.XOR<Prisma.ListeningSessionUpdateManyMutationInput, Prisma.ListeningSessionUncheckedUpdateManyInput>;
    /**
     * Filter which ListeningSessions to update
     */
    where?: Prisma.ListeningSessionWhereInput;
    /**
     * Limit how many ListeningSessions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListeningSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ListeningSession upsert
 */
export type ListeningSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ListeningSession to update in case it exists.
     */
    where: Prisma.ListeningSessionWhereUniqueInput;
    /**
     * In case the ListeningSession found by the `where` argument doesn't exist, create a new ListeningSession with this data.
     */
    create: Prisma.XOR<Prisma.ListeningSessionCreateInput, Prisma.ListeningSessionUncheckedCreateInput>;
    /**
     * In case the ListeningSession was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ListeningSessionUpdateInput, Prisma.ListeningSessionUncheckedUpdateInput>;
};
/**
 * ListeningSession delete
 */
export type ListeningSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ListeningSession to delete.
     */
    where: Prisma.ListeningSessionWhereUniqueInput;
};
/**
 * ListeningSession deleteMany
 */
export type ListeningSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ListeningSessions to delete
     */
    where?: Prisma.ListeningSessionWhereInput;
    /**
     * Limit how many ListeningSessions to delete.
     */
    limit?: number;
};
/**
 * ListeningSession.events
 */
export type ListeningSession$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PlayEventWhereInput;
    orderBy?: Prisma.PlayEventOrderByWithRelationInput | Prisma.PlayEventOrderByWithRelationInput[];
    cursor?: Prisma.PlayEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlayEventScalarFieldEnum | Prisma.PlayEventScalarFieldEnum[];
};
/**
 * ListeningSession without action
 */
export type ListeningSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ListeningSession.d.ts.map