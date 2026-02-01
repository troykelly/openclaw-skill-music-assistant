import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model HaConfigEntryCache
 * Cached HA config entry for Music Assistant (or other integrations).
 * Used to avoid repeated API calls to discover entry IDs.
 */
export type HaConfigEntryCacheModel = runtime.Types.Result.DefaultSelection<Prisma.$HaConfigEntryCachePayload>;
export type AggregateHaConfigEntryCache = {
    _count: HaConfigEntryCacheCountAggregateOutputType | null;
    _min: HaConfigEntryCacheMinAggregateOutputType | null;
    _max: HaConfigEntryCacheMaxAggregateOutputType | null;
};
export type HaConfigEntryCacheMinAggregateOutputType = {
    id: string | null;
    domain: string | null;
    entryId: string | null;
    title: string | null;
    haUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HaConfigEntryCacheMaxAggregateOutputType = {
    id: string | null;
    domain: string | null;
    entryId: string | null;
    title: string | null;
    haUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HaConfigEntryCacheCountAggregateOutputType = {
    id: number;
    domain: number;
    entryId: number;
    title: number;
    haUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HaConfigEntryCacheMinAggregateInputType = {
    id?: true;
    domain?: true;
    entryId?: true;
    title?: true;
    haUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HaConfigEntryCacheMaxAggregateInputType = {
    id?: true;
    domain?: true;
    entryId?: true;
    title?: true;
    haUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HaConfigEntryCacheCountAggregateInputType = {
    id?: true;
    domain?: true;
    entryId?: true;
    title?: true;
    haUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HaConfigEntryCacheAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HaConfigEntryCache to aggregate.
     */
    where?: Prisma.HaConfigEntryCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HaConfigEntryCaches to fetch.
     */
    orderBy?: Prisma.HaConfigEntryCacheOrderByWithRelationInput | Prisma.HaConfigEntryCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HaConfigEntryCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HaConfigEntryCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HaConfigEntryCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HaConfigEntryCaches
    **/
    _count?: true | HaConfigEntryCacheCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HaConfigEntryCacheMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HaConfigEntryCacheMaxAggregateInputType;
};
export type GetHaConfigEntryCacheAggregateType<T extends HaConfigEntryCacheAggregateArgs> = {
    [P in keyof T & keyof AggregateHaConfigEntryCache]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHaConfigEntryCache[P]> : Prisma.GetScalarType<T[P], AggregateHaConfigEntryCache[P]>;
};
export type HaConfigEntryCacheGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HaConfigEntryCacheWhereInput;
    orderBy?: Prisma.HaConfigEntryCacheOrderByWithAggregationInput | Prisma.HaConfigEntryCacheOrderByWithAggregationInput[];
    by: Prisma.HaConfigEntryCacheScalarFieldEnum[] | Prisma.HaConfigEntryCacheScalarFieldEnum;
    having?: Prisma.HaConfigEntryCacheScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HaConfigEntryCacheCountAggregateInputType | true;
    _min?: HaConfigEntryCacheMinAggregateInputType;
    _max?: HaConfigEntryCacheMaxAggregateInputType;
};
export type HaConfigEntryCacheGroupByOutputType = {
    id: string;
    domain: string;
    entryId: string;
    title: string | null;
    haUrl: string;
    createdAt: Date;
    updatedAt: Date;
    _count: HaConfigEntryCacheCountAggregateOutputType | null;
    _min: HaConfigEntryCacheMinAggregateOutputType | null;
    _max: HaConfigEntryCacheMaxAggregateOutputType | null;
};
type GetHaConfigEntryCacheGroupByPayload<T extends HaConfigEntryCacheGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HaConfigEntryCacheGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HaConfigEntryCacheGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HaConfigEntryCacheGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HaConfigEntryCacheGroupByOutputType[P]>;
}>>;
export type HaConfigEntryCacheWhereInput = {
    AND?: Prisma.HaConfigEntryCacheWhereInput | Prisma.HaConfigEntryCacheWhereInput[];
    OR?: Prisma.HaConfigEntryCacheWhereInput[];
    NOT?: Prisma.HaConfigEntryCacheWhereInput | Prisma.HaConfigEntryCacheWhereInput[];
    id?: Prisma.StringFilter<"HaConfigEntryCache"> | string;
    domain?: Prisma.StringFilter<"HaConfigEntryCache"> | string;
    entryId?: Prisma.StringFilter<"HaConfigEntryCache"> | string;
    title?: Prisma.StringNullableFilter<"HaConfigEntryCache"> | string | null;
    haUrl?: Prisma.StringFilter<"HaConfigEntryCache"> | string;
    createdAt?: Prisma.DateTimeFilter<"HaConfigEntryCache"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HaConfigEntryCache"> | Date | string;
};
export type HaConfigEntryCacheOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    entryId?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    haUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HaConfigEntryCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    haUrl_domain_entryId?: Prisma.HaConfigEntryCacheHaUrlDomainEntryIdCompoundUniqueInput;
    AND?: Prisma.HaConfigEntryCacheWhereInput | Prisma.HaConfigEntryCacheWhereInput[];
    OR?: Prisma.HaConfigEntryCacheWhereInput[];
    NOT?: Prisma.HaConfigEntryCacheWhereInput | Prisma.HaConfigEntryCacheWhereInput[];
    domain?: Prisma.StringFilter<"HaConfigEntryCache"> | string;
    entryId?: Prisma.StringFilter<"HaConfigEntryCache"> | string;
    title?: Prisma.StringNullableFilter<"HaConfigEntryCache"> | string | null;
    haUrl?: Prisma.StringFilter<"HaConfigEntryCache"> | string;
    createdAt?: Prisma.DateTimeFilter<"HaConfigEntryCache"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HaConfigEntryCache"> | Date | string;
}, "id" | "haUrl_domain_entryId">;
export type HaConfigEntryCacheOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    entryId?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    haUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HaConfigEntryCacheCountOrderByAggregateInput;
    _max?: Prisma.HaConfigEntryCacheMaxOrderByAggregateInput;
    _min?: Prisma.HaConfigEntryCacheMinOrderByAggregateInput;
};
export type HaConfigEntryCacheScalarWhereWithAggregatesInput = {
    AND?: Prisma.HaConfigEntryCacheScalarWhereWithAggregatesInput | Prisma.HaConfigEntryCacheScalarWhereWithAggregatesInput[];
    OR?: Prisma.HaConfigEntryCacheScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HaConfigEntryCacheScalarWhereWithAggregatesInput | Prisma.HaConfigEntryCacheScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HaConfigEntryCache"> | string;
    domain?: Prisma.StringWithAggregatesFilter<"HaConfigEntryCache"> | string;
    entryId?: Prisma.StringWithAggregatesFilter<"HaConfigEntryCache"> | string;
    title?: Prisma.StringNullableWithAggregatesFilter<"HaConfigEntryCache"> | string | null;
    haUrl?: Prisma.StringWithAggregatesFilter<"HaConfigEntryCache"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HaConfigEntryCache"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HaConfigEntryCache"> | Date | string;
};
export type HaConfigEntryCacheCreateInput = {
    id?: string;
    domain: string;
    entryId: string;
    title?: string | null;
    haUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HaConfigEntryCacheUncheckedCreateInput = {
    id?: string;
    domain: string;
    entryId: string;
    title?: string | null;
    haUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HaConfigEntryCacheUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    entryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    haUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HaConfigEntryCacheUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    entryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    haUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HaConfigEntryCacheCreateManyInput = {
    id?: string;
    domain: string;
    entryId: string;
    title?: string | null;
    haUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HaConfigEntryCacheUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    entryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    haUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HaConfigEntryCacheUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    entryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    haUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HaConfigEntryCacheHaUrlDomainEntryIdCompoundUniqueInput = {
    haUrl: string;
    domain: string;
    entryId: string;
};
export type HaConfigEntryCacheCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    entryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    haUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HaConfigEntryCacheMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    entryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    haUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HaConfigEntryCacheMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    entryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    haUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HaConfigEntryCacheSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    domain?: boolean;
    entryId?: boolean;
    title?: boolean;
    haUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["haConfigEntryCache"]>;
export type HaConfigEntryCacheSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    domain?: boolean;
    entryId?: boolean;
    title?: boolean;
    haUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["haConfigEntryCache"]>;
export type HaConfigEntryCacheSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    domain?: boolean;
    entryId?: boolean;
    title?: boolean;
    haUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["haConfigEntryCache"]>;
export type HaConfigEntryCacheSelectScalar = {
    id?: boolean;
    domain?: boolean;
    entryId?: boolean;
    title?: boolean;
    haUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HaConfigEntryCacheOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "domain" | "entryId" | "title" | "haUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["haConfigEntryCache"]>;
export type $HaConfigEntryCachePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HaConfigEntryCache";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        domain: string;
        entryId: string;
        title: string | null;
        haUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["haConfigEntryCache"]>;
    composites: {};
};
export type HaConfigEntryCacheGetPayload<S extends boolean | null | undefined | HaConfigEntryCacheDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload, S>;
export type HaConfigEntryCacheCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HaConfigEntryCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HaConfigEntryCacheCountAggregateInputType | true;
};
export interface HaConfigEntryCacheDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HaConfigEntryCache'];
        meta: {
            name: 'HaConfigEntryCache';
        };
    };
    /**
     * Find zero or one HaConfigEntryCache that matches the filter.
     * @param {HaConfigEntryCacheFindUniqueArgs} args - Arguments to find a HaConfigEntryCache
     * @example
     * // Get one HaConfigEntryCache
     * const haConfigEntryCache = await prisma.haConfigEntryCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HaConfigEntryCacheFindUniqueArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one HaConfigEntryCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HaConfigEntryCacheFindUniqueOrThrowArgs} args - Arguments to find a HaConfigEntryCache
     * @example
     * // Get one HaConfigEntryCache
     * const haConfigEntryCache = await prisma.haConfigEntryCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HaConfigEntryCacheFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HaConfigEntryCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaConfigEntryCacheFindFirstArgs} args - Arguments to find a HaConfigEntryCache
     * @example
     * // Get one HaConfigEntryCache
     * const haConfigEntryCache = await prisma.haConfigEntryCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HaConfigEntryCacheFindFirstArgs>(args?: Prisma.SelectSubset<T, HaConfigEntryCacheFindFirstArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HaConfigEntryCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaConfigEntryCacheFindFirstOrThrowArgs} args - Arguments to find a HaConfigEntryCache
     * @example
     * // Get one HaConfigEntryCache
     * const haConfigEntryCache = await prisma.haConfigEntryCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HaConfigEntryCacheFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HaConfigEntryCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more HaConfigEntryCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaConfigEntryCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HaConfigEntryCaches
     * const haConfigEntryCaches = await prisma.haConfigEntryCache.findMany()
     *
     * // Get first 10 HaConfigEntryCaches
     * const haConfigEntryCaches = await prisma.haConfigEntryCache.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const haConfigEntryCacheWithIdOnly = await prisma.haConfigEntryCache.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HaConfigEntryCacheFindManyArgs>(args?: Prisma.SelectSubset<T, HaConfigEntryCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a HaConfigEntryCache.
     * @param {HaConfigEntryCacheCreateArgs} args - Arguments to create a HaConfigEntryCache.
     * @example
     * // Create one HaConfigEntryCache
     * const HaConfigEntryCache = await prisma.haConfigEntryCache.create({
     *   data: {
     *     // ... data to create a HaConfigEntryCache
     *   }
     * })
     *
     */
    create<T extends HaConfigEntryCacheCreateArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheCreateArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many HaConfigEntryCaches.
     * @param {HaConfigEntryCacheCreateManyArgs} args - Arguments to create many HaConfigEntryCaches.
     * @example
     * // Create many HaConfigEntryCaches
     * const haConfigEntryCache = await prisma.haConfigEntryCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HaConfigEntryCacheCreateManyArgs>(args?: Prisma.SelectSubset<T, HaConfigEntryCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many HaConfigEntryCaches and returns the data saved in the database.
     * @param {HaConfigEntryCacheCreateManyAndReturnArgs} args - Arguments to create many HaConfigEntryCaches.
     * @example
     * // Create many HaConfigEntryCaches
     * const haConfigEntryCache = await prisma.haConfigEntryCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many HaConfigEntryCaches and only return the `id`
     * const haConfigEntryCacheWithIdOnly = await prisma.haConfigEntryCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HaConfigEntryCacheCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HaConfigEntryCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a HaConfigEntryCache.
     * @param {HaConfigEntryCacheDeleteArgs} args - Arguments to delete one HaConfigEntryCache.
     * @example
     * // Delete one HaConfigEntryCache
     * const HaConfigEntryCache = await prisma.haConfigEntryCache.delete({
     *   where: {
     *     // ... filter to delete one HaConfigEntryCache
     *   }
     * })
     *
     */
    delete<T extends HaConfigEntryCacheDeleteArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheDeleteArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one HaConfigEntryCache.
     * @param {HaConfigEntryCacheUpdateArgs} args - Arguments to update one HaConfigEntryCache.
     * @example
     * // Update one HaConfigEntryCache
     * const haConfigEntryCache = await prisma.haConfigEntryCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HaConfigEntryCacheUpdateArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheUpdateArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more HaConfigEntryCaches.
     * @param {HaConfigEntryCacheDeleteManyArgs} args - Arguments to filter HaConfigEntryCaches to delete.
     * @example
     * // Delete a few HaConfigEntryCaches
     * const { count } = await prisma.haConfigEntryCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HaConfigEntryCacheDeleteManyArgs>(args?: Prisma.SelectSubset<T, HaConfigEntryCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HaConfigEntryCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaConfigEntryCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HaConfigEntryCaches
     * const haConfigEntryCache = await prisma.haConfigEntryCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HaConfigEntryCacheUpdateManyArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HaConfigEntryCaches and returns the data updated in the database.
     * @param {HaConfigEntryCacheUpdateManyAndReturnArgs} args - Arguments to update many HaConfigEntryCaches.
     * @example
     * // Update many HaConfigEntryCaches
     * const haConfigEntryCache = await prisma.haConfigEntryCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more HaConfigEntryCaches and only return the `id`
     * const haConfigEntryCacheWithIdOnly = await prisma.haConfigEntryCache.updateManyAndReturn({
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
    updateManyAndReturn<T extends HaConfigEntryCacheUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one HaConfigEntryCache.
     * @param {HaConfigEntryCacheUpsertArgs} args - Arguments to update or create a HaConfigEntryCache.
     * @example
     * // Update or create a HaConfigEntryCache
     * const haConfigEntryCache = await prisma.haConfigEntryCache.upsert({
     *   create: {
     *     // ... data to create a HaConfigEntryCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HaConfigEntryCache we want to update
     *   }
     * })
     */
    upsert<T extends HaConfigEntryCacheUpsertArgs>(args: Prisma.SelectSubset<T, HaConfigEntryCacheUpsertArgs<ExtArgs>>): Prisma.Prisma__HaConfigEntryCacheClient<runtime.Types.Result.GetResult<Prisma.$HaConfigEntryCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of HaConfigEntryCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaConfigEntryCacheCountArgs} args - Arguments to filter HaConfigEntryCaches to count.
     * @example
     * // Count the number of HaConfigEntryCaches
     * const count = await prisma.haConfigEntryCache.count({
     *   where: {
     *     // ... the filter for the HaConfigEntryCaches we want to count
     *   }
     * })
    **/
    count<T extends HaConfigEntryCacheCountArgs>(args?: Prisma.Subset<T, HaConfigEntryCacheCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HaConfigEntryCacheCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a HaConfigEntryCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaConfigEntryCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HaConfigEntryCacheAggregateArgs>(args: Prisma.Subset<T, HaConfigEntryCacheAggregateArgs>): Prisma.PrismaPromise<GetHaConfigEntryCacheAggregateType<T>>;
    /**
     * Group by HaConfigEntryCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HaConfigEntryCacheGroupByArgs} args - Group by arguments.
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
    groupBy<T extends HaConfigEntryCacheGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HaConfigEntryCacheGroupByArgs['orderBy'];
    } : {
        orderBy?: HaConfigEntryCacheGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HaConfigEntryCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHaConfigEntryCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the HaConfigEntryCache model
     */
    readonly fields: HaConfigEntryCacheFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for HaConfigEntryCache.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HaConfigEntryCacheClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the HaConfigEntryCache model
 */
export interface HaConfigEntryCacheFieldRefs {
    readonly id: Prisma.FieldRef<"HaConfigEntryCache", 'String'>;
    readonly domain: Prisma.FieldRef<"HaConfigEntryCache", 'String'>;
    readonly entryId: Prisma.FieldRef<"HaConfigEntryCache", 'String'>;
    readonly title: Prisma.FieldRef<"HaConfigEntryCache", 'String'>;
    readonly haUrl: Prisma.FieldRef<"HaConfigEntryCache", 'String'>;
    readonly createdAt: Prisma.FieldRef<"HaConfigEntryCache", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HaConfigEntryCache", 'DateTime'>;
}
/**
 * HaConfigEntryCache findUnique
 */
export type HaConfigEntryCacheFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * Filter, which HaConfigEntryCache to fetch.
     */
    where: Prisma.HaConfigEntryCacheWhereUniqueInput;
};
/**
 * HaConfigEntryCache findUniqueOrThrow
 */
export type HaConfigEntryCacheFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * Filter, which HaConfigEntryCache to fetch.
     */
    where: Prisma.HaConfigEntryCacheWhereUniqueInput;
};
/**
 * HaConfigEntryCache findFirst
 */
export type HaConfigEntryCacheFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * Filter, which HaConfigEntryCache to fetch.
     */
    where?: Prisma.HaConfigEntryCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HaConfigEntryCaches to fetch.
     */
    orderBy?: Prisma.HaConfigEntryCacheOrderByWithRelationInput | Prisma.HaConfigEntryCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HaConfigEntryCaches.
     */
    cursor?: Prisma.HaConfigEntryCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HaConfigEntryCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HaConfigEntryCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HaConfigEntryCaches.
     */
    distinct?: Prisma.HaConfigEntryCacheScalarFieldEnum | Prisma.HaConfigEntryCacheScalarFieldEnum[];
};
/**
 * HaConfigEntryCache findFirstOrThrow
 */
export type HaConfigEntryCacheFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * Filter, which HaConfigEntryCache to fetch.
     */
    where?: Prisma.HaConfigEntryCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HaConfigEntryCaches to fetch.
     */
    orderBy?: Prisma.HaConfigEntryCacheOrderByWithRelationInput | Prisma.HaConfigEntryCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HaConfigEntryCaches.
     */
    cursor?: Prisma.HaConfigEntryCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HaConfigEntryCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HaConfigEntryCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HaConfigEntryCaches.
     */
    distinct?: Prisma.HaConfigEntryCacheScalarFieldEnum | Prisma.HaConfigEntryCacheScalarFieldEnum[];
};
/**
 * HaConfigEntryCache findMany
 */
export type HaConfigEntryCacheFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * Filter, which HaConfigEntryCaches to fetch.
     */
    where?: Prisma.HaConfigEntryCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HaConfigEntryCaches to fetch.
     */
    orderBy?: Prisma.HaConfigEntryCacheOrderByWithRelationInput | Prisma.HaConfigEntryCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HaConfigEntryCaches.
     */
    cursor?: Prisma.HaConfigEntryCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HaConfigEntryCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HaConfigEntryCaches.
     */
    skip?: number;
    distinct?: Prisma.HaConfigEntryCacheScalarFieldEnum | Prisma.HaConfigEntryCacheScalarFieldEnum[];
};
/**
 * HaConfigEntryCache create
 */
export type HaConfigEntryCacheCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * The data needed to create a HaConfigEntryCache.
     */
    data: Prisma.XOR<Prisma.HaConfigEntryCacheCreateInput, Prisma.HaConfigEntryCacheUncheckedCreateInput>;
};
/**
 * HaConfigEntryCache createMany
 */
export type HaConfigEntryCacheCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HaConfigEntryCaches.
     */
    data: Prisma.HaConfigEntryCacheCreateManyInput | Prisma.HaConfigEntryCacheCreateManyInput[];
};
/**
 * HaConfigEntryCache createManyAndReturn
 */
export type HaConfigEntryCacheCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * The data used to create many HaConfigEntryCaches.
     */
    data: Prisma.HaConfigEntryCacheCreateManyInput | Prisma.HaConfigEntryCacheCreateManyInput[];
};
/**
 * HaConfigEntryCache update
 */
export type HaConfigEntryCacheUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * The data needed to update a HaConfigEntryCache.
     */
    data: Prisma.XOR<Prisma.HaConfigEntryCacheUpdateInput, Prisma.HaConfigEntryCacheUncheckedUpdateInput>;
    /**
     * Choose, which HaConfigEntryCache to update.
     */
    where: Prisma.HaConfigEntryCacheWhereUniqueInput;
};
/**
 * HaConfigEntryCache updateMany
 */
export type HaConfigEntryCacheUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HaConfigEntryCaches.
     */
    data: Prisma.XOR<Prisma.HaConfigEntryCacheUpdateManyMutationInput, Prisma.HaConfigEntryCacheUncheckedUpdateManyInput>;
    /**
     * Filter which HaConfigEntryCaches to update
     */
    where?: Prisma.HaConfigEntryCacheWhereInput;
    /**
     * Limit how many HaConfigEntryCaches to update.
     */
    limit?: number;
};
/**
 * HaConfigEntryCache updateManyAndReturn
 */
export type HaConfigEntryCacheUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * The data used to update HaConfigEntryCaches.
     */
    data: Prisma.XOR<Prisma.HaConfigEntryCacheUpdateManyMutationInput, Prisma.HaConfigEntryCacheUncheckedUpdateManyInput>;
    /**
     * Filter which HaConfigEntryCaches to update
     */
    where?: Prisma.HaConfigEntryCacheWhereInput;
    /**
     * Limit how many HaConfigEntryCaches to update.
     */
    limit?: number;
};
/**
 * HaConfigEntryCache upsert
 */
export type HaConfigEntryCacheUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * The filter to search for the HaConfigEntryCache to update in case it exists.
     */
    where: Prisma.HaConfigEntryCacheWhereUniqueInput;
    /**
     * In case the HaConfigEntryCache found by the `where` argument doesn't exist, create a new HaConfigEntryCache with this data.
     */
    create: Prisma.XOR<Prisma.HaConfigEntryCacheCreateInput, Prisma.HaConfigEntryCacheUncheckedCreateInput>;
    /**
     * In case the HaConfigEntryCache was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HaConfigEntryCacheUpdateInput, Prisma.HaConfigEntryCacheUncheckedUpdateInput>;
};
/**
 * HaConfigEntryCache delete
 */
export type HaConfigEntryCacheDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
    /**
     * Filter which HaConfigEntryCache to delete.
     */
    where: Prisma.HaConfigEntryCacheWhereUniqueInput;
};
/**
 * HaConfigEntryCache deleteMany
 */
export type HaConfigEntryCacheDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HaConfigEntryCaches to delete
     */
    where?: Prisma.HaConfigEntryCacheWhereInput;
    /**
     * Limit how many HaConfigEntryCaches to delete.
     */
    limit?: number;
};
/**
 * HaConfigEntryCache without action
 */
export type HaConfigEntryCacheDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HaConfigEntryCache
     */
    select?: Prisma.HaConfigEntryCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HaConfigEntryCache
     */
    omit?: Prisma.HaConfigEntryCacheOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=HaConfigEntryCache.d.ts.map