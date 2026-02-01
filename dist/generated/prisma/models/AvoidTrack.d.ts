import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AvoidTrack
 * Tracks the user wants to avoid.
 */
export type AvoidTrackModel = runtime.Types.Result.DefaultSelection<Prisma.$AvoidTrackPayload>;
export type AggregateAvoidTrack = {
    _count: AvoidTrackCountAggregateOutputType | null;
    _min: AvoidTrackMinAggregateOutputType | null;
    _max: AvoidTrackMaxAggregateOutputType | null;
};
export type AvoidTrackMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    uri: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type AvoidTrackMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    uri: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type AvoidTrackCountAggregateOutputType = {
    id: number;
    userId: number;
    uri: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type AvoidTrackMinAggregateInputType = {
    id?: true;
    userId?: true;
    uri?: true;
    reason?: true;
    createdAt?: true;
};
export type AvoidTrackMaxAggregateInputType = {
    id?: true;
    userId?: true;
    uri?: true;
    reason?: true;
    createdAt?: true;
};
export type AvoidTrackCountAggregateInputType = {
    id?: true;
    userId?: true;
    uri?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type AvoidTrackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvoidTrack to aggregate.
     */
    where?: Prisma.AvoidTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvoidTracks to fetch.
     */
    orderBy?: Prisma.AvoidTrackOrderByWithRelationInput | Prisma.AvoidTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AvoidTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvoidTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvoidTracks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AvoidTracks
    **/
    _count?: true | AvoidTrackCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AvoidTrackMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AvoidTrackMaxAggregateInputType;
};
export type GetAvoidTrackAggregateType<T extends AvoidTrackAggregateArgs> = {
    [P in keyof T & keyof AggregateAvoidTrack]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvoidTrack[P]> : Prisma.GetScalarType<T[P], AggregateAvoidTrack[P]>;
};
export type AvoidTrackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvoidTrackWhereInput;
    orderBy?: Prisma.AvoidTrackOrderByWithAggregationInput | Prisma.AvoidTrackOrderByWithAggregationInput[];
    by: Prisma.AvoidTrackScalarFieldEnum[] | Prisma.AvoidTrackScalarFieldEnum;
    having?: Prisma.AvoidTrackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvoidTrackCountAggregateInputType | true;
    _min?: AvoidTrackMinAggregateInputType;
    _max?: AvoidTrackMaxAggregateInputType;
};
export type AvoidTrackGroupByOutputType = {
    id: string;
    userId: string;
    uri: string;
    reason: string | null;
    createdAt: Date;
    _count: AvoidTrackCountAggregateOutputType | null;
    _min: AvoidTrackMinAggregateOutputType | null;
    _max: AvoidTrackMaxAggregateOutputType | null;
};
type GetAvoidTrackGroupByPayload<T extends AvoidTrackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvoidTrackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvoidTrackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvoidTrackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvoidTrackGroupByOutputType[P]>;
}>>;
export type AvoidTrackWhereInput = {
    AND?: Prisma.AvoidTrackWhereInput | Prisma.AvoidTrackWhereInput[];
    OR?: Prisma.AvoidTrackWhereInput[];
    NOT?: Prisma.AvoidTrackWhereInput | Prisma.AvoidTrackWhereInput[];
    id?: Prisma.StringFilter<"AvoidTrack"> | string;
    userId?: Prisma.StringFilter<"AvoidTrack"> | string;
    uri?: Prisma.StringFilter<"AvoidTrack"> | string;
    reason?: Prisma.StringNullableFilter<"AvoidTrack"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AvoidTrack"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AvoidTrackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type AvoidTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_uri?: Prisma.AvoidTrackUserIdUriCompoundUniqueInput;
    AND?: Prisma.AvoidTrackWhereInput | Prisma.AvoidTrackWhereInput[];
    OR?: Prisma.AvoidTrackWhereInput[];
    NOT?: Prisma.AvoidTrackWhereInput | Prisma.AvoidTrackWhereInput[];
    userId?: Prisma.StringFilter<"AvoidTrack"> | string;
    uri?: Prisma.StringFilter<"AvoidTrack"> | string;
    reason?: Prisma.StringNullableFilter<"AvoidTrack"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AvoidTrack"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_uri">;
export type AvoidTrackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AvoidTrackCountOrderByAggregateInput;
    _max?: Prisma.AvoidTrackMaxOrderByAggregateInput;
    _min?: Prisma.AvoidTrackMinOrderByAggregateInput;
};
export type AvoidTrackScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvoidTrackScalarWhereWithAggregatesInput | Prisma.AvoidTrackScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvoidTrackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvoidTrackScalarWhereWithAggregatesInput | Prisma.AvoidTrackScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AvoidTrack"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"AvoidTrack"> | string;
    uri?: Prisma.StringWithAggregatesFilter<"AvoidTrack"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"AvoidTrack"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AvoidTrack"> | Date | string;
};
export type AvoidTrackCreateInput = {
    id?: string;
    uri: string;
    reason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAvoidTracksInput;
};
export type AvoidTrackUncheckedCreateInput = {
    id?: string;
    userId: string;
    uri: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type AvoidTrackUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAvoidTracksNestedInput;
};
export type AvoidTrackUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvoidTrackCreateManyInput = {
    id?: string;
    userId: string;
    uri: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type AvoidTrackUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvoidTrackUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvoidTrackListRelationFilter = {
    every?: Prisma.AvoidTrackWhereInput;
    some?: Prisma.AvoidTrackWhereInput;
    none?: Prisma.AvoidTrackWhereInput;
};
export type AvoidTrackOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AvoidTrackUserIdUriCompoundUniqueInput = {
    userId: string;
    uri: string;
};
export type AvoidTrackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AvoidTrackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AvoidTrackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    uri?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AvoidTrackCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AvoidTrackCreateWithoutUserInput, Prisma.AvoidTrackUncheckedCreateWithoutUserInput> | Prisma.AvoidTrackCreateWithoutUserInput[] | Prisma.AvoidTrackUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AvoidTrackCreateOrConnectWithoutUserInput | Prisma.AvoidTrackCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AvoidTrackCreateManyUserInputEnvelope;
    connect?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
};
export type AvoidTrackUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AvoidTrackCreateWithoutUserInput, Prisma.AvoidTrackUncheckedCreateWithoutUserInput> | Prisma.AvoidTrackCreateWithoutUserInput[] | Prisma.AvoidTrackUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AvoidTrackCreateOrConnectWithoutUserInput | Prisma.AvoidTrackCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AvoidTrackCreateManyUserInputEnvelope;
    connect?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
};
export type AvoidTrackUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AvoidTrackCreateWithoutUserInput, Prisma.AvoidTrackUncheckedCreateWithoutUserInput> | Prisma.AvoidTrackCreateWithoutUserInput[] | Prisma.AvoidTrackUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AvoidTrackCreateOrConnectWithoutUserInput | Prisma.AvoidTrackCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AvoidTrackUpsertWithWhereUniqueWithoutUserInput | Prisma.AvoidTrackUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AvoidTrackCreateManyUserInputEnvelope;
    set?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    disconnect?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    delete?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    connect?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    update?: Prisma.AvoidTrackUpdateWithWhereUniqueWithoutUserInput | Prisma.AvoidTrackUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AvoidTrackUpdateManyWithWhereWithoutUserInput | Prisma.AvoidTrackUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AvoidTrackScalarWhereInput | Prisma.AvoidTrackScalarWhereInput[];
};
export type AvoidTrackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AvoidTrackCreateWithoutUserInput, Prisma.AvoidTrackUncheckedCreateWithoutUserInput> | Prisma.AvoidTrackCreateWithoutUserInput[] | Prisma.AvoidTrackUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AvoidTrackCreateOrConnectWithoutUserInput | Prisma.AvoidTrackCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AvoidTrackUpsertWithWhereUniqueWithoutUserInput | Prisma.AvoidTrackUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AvoidTrackCreateManyUserInputEnvelope;
    set?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    disconnect?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    delete?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    connect?: Prisma.AvoidTrackWhereUniqueInput | Prisma.AvoidTrackWhereUniqueInput[];
    update?: Prisma.AvoidTrackUpdateWithWhereUniqueWithoutUserInput | Prisma.AvoidTrackUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AvoidTrackUpdateManyWithWhereWithoutUserInput | Prisma.AvoidTrackUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AvoidTrackScalarWhereInput | Prisma.AvoidTrackScalarWhereInput[];
};
export type AvoidTrackCreateWithoutUserInput = {
    id?: string;
    uri: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type AvoidTrackUncheckedCreateWithoutUserInput = {
    id?: string;
    uri: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type AvoidTrackCreateOrConnectWithoutUserInput = {
    where: Prisma.AvoidTrackWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvoidTrackCreateWithoutUserInput, Prisma.AvoidTrackUncheckedCreateWithoutUserInput>;
};
export type AvoidTrackCreateManyUserInputEnvelope = {
    data: Prisma.AvoidTrackCreateManyUserInput | Prisma.AvoidTrackCreateManyUserInput[];
};
export type AvoidTrackUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AvoidTrackWhereUniqueInput;
    update: Prisma.XOR<Prisma.AvoidTrackUpdateWithoutUserInput, Prisma.AvoidTrackUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AvoidTrackCreateWithoutUserInput, Prisma.AvoidTrackUncheckedCreateWithoutUserInput>;
};
export type AvoidTrackUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AvoidTrackWhereUniqueInput;
    data: Prisma.XOR<Prisma.AvoidTrackUpdateWithoutUserInput, Prisma.AvoidTrackUncheckedUpdateWithoutUserInput>;
};
export type AvoidTrackUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AvoidTrackScalarWhereInput;
    data: Prisma.XOR<Prisma.AvoidTrackUpdateManyMutationInput, Prisma.AvoidTrackUncheckedUpdateManyWithoutUserInput>;
};
export type AvoidTrackScalarWhereInput = {
    AND?: Prisma.AvoidTrackScalarWhereInput | Prisma.AvoidTrackScalarWhereInput[];
    OR?: Prisma.AvoidTrackScalarWhereInput[];
    NOT?: Prisma.AvoidTrackScalarWhereInput | Prisma.AvoidTrackScalarWhereInput[];
    id?: Prisma.StringFilter<"AvoidTrack"> | string;
    userId?: Prisma.StringFilter<"AvoidTrack"> | string;
    uri?: Prisma.StringFilter<"AvoidTrack"> | string;
    reason?: Prisma.StringNullableFilter<"AvoidTrack"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AvoidTrack"> | Date | string;
};
export type AvoidTrackCreateManyUserInput = {
    id?: string;
    uri: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type AvoidTrackUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvoidTrackUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvoidTrackUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uri?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvoidTrackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    uri?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avoidTrack"]>;
export type AvoidTrackSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    uri?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avoidTrack"]>;
export type AvoidTrackSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    uri?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avoidTrack"]>;
export type AvoidTrackSelectScalar = {
    id?: boolean;
    userId?: boolean;
    uri?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type AvoidTrackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "uri" | "reason" | "createdAt", ExtArgs["result"]["avoidTrack"]>;
export type AvoidTrackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AvoidTrackIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AvoidTrackIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AvoidTrackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvoidTrack";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        uri: string;
        reason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["avoidTrack"]>;
    composites: {};
};
export type AvoidTrackGetPayload<S extends boolean | null | undefined | AvoidTrackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload, S>;
export type AvoidTrackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvoidTrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvoidTrackCountAggregateInputType | true;
};
export interface AvoidTrackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvoidTrack'];
        meta: {
            name: 'AvoidTrack';
        };
    };
    /**
     * Find zero or one AvoidTrack that matches the filter.
     * @param {AvoidTrackFindUniqueArgs} args - Arguments to find a AvoidTrack
     * @example
     * // Get one AvoidTrack
     * const avoidTrack = await prisma.avoidTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvoidTrackFindUniqueArgs>(args: Prisma.SelectSubset<T, AvoidTrackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AvoidTrack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvoidTrackFindUniqueOrThrowArgs} args - Arguments to find a AvoidTrack
     * @example
     * // Get one AvoidTrack
     * const avoidTrack = await prisma.avoidTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvoidTrackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvoidTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvoidTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoidTrackFindFirstArgs} args - Arguments to find a AvoidTrack
     * @example
     * // Get one AvoidTrack
     * const avoidTrack = await prisma.avoidTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvoidTrackFindFirstArgs>(args?: Prisma.SelectSubset<T, AvoidTrackFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvoidTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoidTrackFindFirstOrThrowArgs} args - Arguments to find a AvoidTrack
     * @example
     * // Get one AvoidTrack
     * const avoidTrack = await prisma.avoidTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvoidTrackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvoidTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AvoidTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoidTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvoidTracks
     * const avoidTracks = await prisma.avoidTrack.findMany()
     *
     * // Get first 10 AvoidTracks
     * const avoidTracks = await prisma.avoidTrack.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const avoidTrackWithIdOnly = await prisma.avoidTrack.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AvoidTrackFindManyArgs>(args?: Prisma.SelectSubset<T, AvoidTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AvoidTrack.
     * @param {AvoidTrackCreateArgs} args - Arguments to create a AvoidTrack.
     * @example
     * // Create one AvoidTrack
     * const AvoidTrack = await prisma.avoidTrack.create({
     *   data: {
     *     // ... data to create a AvoidTrack
     *   }
     * })
     *
     */
    create<T extends AvoidTrackCreateArgs>(args: Prisma.SelectSubset<T, AvoidTrackCreateArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AvoidTracks.
     * @param {AvoidTrackCreateManyArgs} args - Arguments to create many AvoidTracks.
     * @example
     * // Create many AvoidTracks
     * const avoidTrack = await prisma.avoidTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AvoidTrackCreateManyArgs>(args?: Prisma.SelectSubset<T, AvoidTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AvoidTracks and returns the data saved in the database.
     * @param {AvoidTrackCreateManyAndReturnArgs} args - Arguments to create many AvoidTracks.
     * @example
     * // Create many AvoidTracks
     * const avoidTrack = await prisma.avoidTrack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AvoidTracks and only return the `id`
     * const avoidTrackWithIdOnly = await prisma.avoidTrack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AvoidTrackCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvoidTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AvoidTrack.
     * @param {AvoidTrackDeleteArgs} args - Arguments to delete one AvoidTrack.
     * @example
     * // Delete one AvoidTrack
     * const AvoidTrack = await prisma.avoidTrack.delete({
     *   where: {
     *     // ... filter to delete one AvoidTrack
     *   }
     * })
     *
     */
    delete<T extends AvoidTrackDeleteArgs>(args: Prisma.SelectSubset<T, AvoidTrackDeleteArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AvoidTrack.
     * @param {AvoidTrackUpdateArgs} args - Arguments to update one AvoidTrack.
     * @example
     * // Update one AvoidTrack
     * const avoidTrack = await prisma.avoidTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AvoidTrackUpdateArgs>(args: Prisma.SelectSubset<T, AvoidTrackUpdateArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AvoidTracks.
     * @param {AvoidTrackDeleteManyArgs} args - Arguments to filter AvoidTracks to delete.
     * @example
     * // Delete a few AvoidTracks
     * const { count } = await prisma.avoidTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AvoidTrackDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvoidTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvoidTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoidTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvoidTracks
     * const avoidTrack = await prisma.avoidTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AvoidTrackUpdateManyArgs>(args: Prisma.SelectSubset<T, AvoidTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvoidTracks and returns the data updated in the database.
     * @param {AvoidTrackUpdateManyAndReturnArgs} args - Arguments to update many AvoidTracks.
     * @example
     * // Update many AvoidTracks
     * const avoidTrack = await prisma.avoidTrack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AvoidTracks and only return the `id`
     * const avoidTrackWithIdOnly = await prisma.avoidTrack.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvoidTrackUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvoidTrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AvoidTrack.
     * @param {AvoidTrackUpsertArgs} args - Arguments to update or create a AvoidTrack.
     * @example
     * // Update or create a AvoidTrack
     * const avoidTrack = await prisma.avoidTrack.upsert({
     *   create: {
     *     // ... data to create a AvoidTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvoidTrack we want to update
     *   }
     * })
     */
    upsert<T extends AvoidTrackUpsertArgs>(args: Prisma.SelectSubset<T, AvoidTrackUpsertArgs<ExtArgs>>): Prisma.Prisma__AvoidTrackClient<runtime.Types.Result.GetResult<Prisma.$AvoidTrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AvoidTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoidTrackCountArgs} args - Arguments to filter AvoidTracks to count.
     * @example
     * // Count the number of AvoidTracks
     * const count = await prisma.avoidTrack.count({
     *   where: {
     *     // ... the filter for the AvoidTracks we want to count
     *   }
     * })
    **/
    count<T extends AvoidTrackCountArgs>(args?: Prisma.Subset<T, AvoidTrackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvoidTrackCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AvoidTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoidTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvoidTrackAggregateArgs>(args: Prisma.Subset<T, AvoidTrackAggregateArgs>): Prisma.PrismaPromise<GetAvoidTrackAggregateType<T>>;
    /**
     * Group by AvoidTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoidTrackGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AvoidTrackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvoidTrackGroupByArgs['orderBy'];
    } : {
        orderBy?: AvoidTrackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvoidTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvoidTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AvoidTrack model
     */
    readonly fields: AvoidTrackFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AvoidTrack.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AvoidTrackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AvoidTrack model
 */
export interface AvoidTrackFieldRefs {
    readonly id: Prisma.FieldRef<"AvoidTrack", 'String'>;
    readonly userId: Prisma.FieldRef<"AvoidTrack", 'String'>;
    readonly uri: Prisma.FieldRef<"AvoidTrack", 'String'>;
    readonly reason: Prisma.FieldRef<"AvoidTrack", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AvoidTrack", 'DateTime'>;
}
/**
 * AvoidTrack findUnique
 */
export type AvoidTrackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * Filter, which AvoidTrack to fetch.
     */
    where: Prisma.AvoidTrackWhereUniqueInput;
};
/**
 * AvoidTrack findUniqueOrThrow
 */
export type AvoidTrackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * Filter, which AvoidTrack to fetch.
     */
    where: Prisma.AvoidTrackWhereUniqueInput;
};
/**
 * AvoidTrack findFirst
 */
export type AvoidTrackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * Filter, which AvoidTrack to fetch.
     */
    where?: Prisma.AvoidTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvoidTracks to fetch.
     */
    orderBy?: Prisma.AvoidTrackOrderByWithRelationInput | Prisma.AvoidTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvoidTracks.
     */
    cursor?: Prisma.AvoidTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvoidTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvoidTracks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvoidTracks.
     */
    distinct?: Prisma.AvoidTrackScalarFieldEnum | Prisma.AvoidTrackScalarFieldEnum[];
};
/**
 * AvoidTrack findFirstOrThrow
 */
export type AvoidTrackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * Filter, which AvoidTrack to fetch.
     */
    where?: Prisma.AvoidTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvoidTracks to fetch.
     */
    orderBy?: Prisma.AvoidTrackOrderByWithRelationInput | Prisma.AvoidTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvoidTracks.
     */
    cursor?: Prisma.AvoidTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvoidTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvoidTracks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvoidTracks.
     */
    distinct?: Prisma.AvoidTrackScalarFieldEnum | Prisma.AvoidTrackScalarFieldEnum[];
};
/**
 * AvoidTrack findMany
 */
export type AvoidTrackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * Filter, which AvoidTracks to fetch.
     */
    where?: Prisma.AvoidTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvoidTracks to fetch.
     */
    orderBy?: Prisma.AvoidTrackOrderByWithRelationInput | Prisma.AvoidTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AvoidTracks.
     */
    cursor?: Prisma.AvoidTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvoidTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvoidTracks.
     */
    skip?: number;
    distinct?: Prisma.AvoidTrackScalarFieldEnum | Prisma.AvoidTrackScalarFieldEnum[];
};
/**
 * AvoidTrack create
 */
export type AvoidTrackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * The data needed to create a AvoidTrack.
     */
    data: Prisma.XOR<Prisma.AvoidTrackCreateInput, Prisma.AvoidTrackUncheckedCreateInput>;
};
/**
 * AvoidTrack createMany
 */
export type AvoidTrackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvoidTracks.
     */
    data: Prisma.AvoidTrackCreateManyInput | Prisma.AvoidTrackCreateManyInput[];
};
/**
 * AvoidTrack createManyAndReturn
 */
export type AvoidTrackCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * The data used to create many AvoidTracks.
     */
    data: Prisma.AvoidTrackCreateManyInput | Prisma.AvoidTrackCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AvoidTrack update
 */
export type AvoidTrackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * The data needed to update a AvoidTrack.
     */
    data: Prisma.XOR<Prisma.AvoidTrackUpdateInput, Prisma.AvoidTrackUncheckedUpdateInput>;
    /**
     * Choose, which AvoidTrack to update.
     */
    where: Prisma.AvoidTrackWhereUniqueInput;
};
/**
 * AvoidTrack updateMany
 */
export type AvoidTrackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AvoidTracks.
     */
    data: Prisma.XOR<Prisma.AvoidTrackUpdateManyMutationInput, Prisma.AvoidTrackUncheckedUpdateManyInput>;
    /**
     * Filter which AvoidTracks to update
     */
    where?: Prisma.AvoidTrackWhereInput;
    /**
     * Limit how many AvoidTracks to update.
     */
    limit?: number;
};
/**
 * AvoidTrack updateManyAndReturn
 */
export type AvoidTrackUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * The data used to update AvoidTracks.
     */
    data: Prisma.XOR<Prisma.AvoidTrackUpdateManyMutationInput, Prisma.AvoidTrackUncheckedUpdateManyInput>;
    /**
     * Filter which AvoidTracks to update
     */
    where?: Prisma.AvoidTrackWhereInput;
    /**
     * Limit how many AvoidTracks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AvoidTrack upsert
 */
export type AvoidTrackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * The filter to search for the AvoidTrack to update in case it exists.
     */
    where: Prisma.AvoidTrackWhereUniqueInput;
    /**
     * In case the AvoidTrack found by the `where` argument doesn't exist, create a new AvoidTrack with this data.
     */
    create: Prisma.XOR<Prisma.AvoidTrackCreateInput, Prisma.AvoidTrackUncheckedCreateInput>;
    /**
     * In case the AvoidTrack was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AvoidTrackUpdateInput, Prisma.AvoidTrackUncheckedUpdateInput>;
};
/**
 * AvoidTrack delete
 */
export type AvoidTrackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
    /**
     * Filter which AvoidTrack to delete.
     */
    where: Prisma.AvoidTrackWhereUniqueInput;
};
/**
 * AvoidTrack deleteMany
 */
export type AvoidTrackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvoidTracks to delete
     */
    where?: Prisma.AvoidTrackWhereInput;
    /**
     * Limit how many AvoidTracks to delete.
     */
    limit?: number;
};
/**
 * AvoidTrack without action
 */
export type AvoidTrackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvoidTrack
     */
    select?: Prisma.AvoidTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvoidTrack
     */
    omit?: Prisma.AvoidTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvoidTrackInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AvoidTrack.d.ts.map