import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PreferenceWeight
 *
 */
export type PreferenceWeightModel = runtime.Types.Result.DefaultSelection<Prisma.$PreferenceWeightPayload>;
export type AggregatePreferenceWeight = {
    _count: PreferenceWeightCountAggregateOutputType | null;
    _avg: PreferenceWeightAvgAggregateOutputType | null;
    _sum: PreferenceWeightSumAggregateOutputType | null;
    _min: PreferenceWeightMinAggregateOutputType | null;
    _max: PreferenceWeightMaxAggregateOutputType | null;
};
export type PreferenceWeightAvgAggregateOutputType = {
    weight: number | null;
};
export type PreferenceWeightSumAggregateOutputType = {
    weight: number | null;
};
export type PreferenceWeightMinAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    kind: $Enums.PreferenceKind | null;
    key: string | null;
    weight: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PreferenceWeightMaxAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    kind: $Enums.PreferenceKind | null;
    key: string | null;
    weight: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PreferenceWeightCountAggregateOutputType = {
    id: number;
    profileId: number;
    kind: number;
    key: number;
    weight: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PreferenceWeightAvgAggregateInputType = {
    weight?: true;
};
export type PreferenceWeightSumAggregateInputType = {
    weight?: true;
};
export type PreferenceWeightMinAggregateInputType = {
    id?: true;
    profileId?: true;
    kind?: true;
    key?: true;
    weight?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PreferenceWeightMaxAggregateInputType = {
    id?: true;
    profileId?: true;
    kind?: true;
    key?: true;
    weight?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PreferenceWeightCountAggregateInputType = {
    id?: true;
    profileId?: true;
    kind?: true;
    key?: true;
    weight?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PreferenceWeightAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PreferenceWeight to aggregate.
     */
    where?: Prisma.PreferenceWeightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceWeights to fetch.
     */
    orderBy?: Prisma.PreferenceWeightOrderByWithRelationInput | Prisma.PreferenceWeightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PreferenceWeightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceWeights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceWeights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PreferenceWeights
    **/
    _count?: true | PreferenceWeightCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PreferenceWeightAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PreferenceWeightSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PreferenceWeightMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PreferenceWeightMaxAggregateInputType;
};
export type GetPreferenceWeightAggregateType<T extends PreferenceWeightAggregateArgs> = {
    [P in keyof T & keyof AggregatePreferenceWeight]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePreferenceWeight[P]> : Prisma.GetScalarType<T[P], AggregatePreferenceWeight[P]>;
};
export type PreferenceWeightGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferenceWeightWhereInput;
    orderBy?: Prisma.PreferenceWeightOrderByWithAggregationInput | Prisma.PreferenceWeightOrderByWithAggregationInput[];
    by: Prisma.PreferenceWeightScalarFieldEnum[] | Prisma.PreferenceWeightScalarFieldEnum;
    having?: Prisma.PreferenceWeightScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PreferenceWeightCountAggregateInputType | true;
    _avg?: PreferenceWeightAvgAggregateInputType;
    _sum?: PreferenceWeightSumAggregateInputType;
    _min?: PreferenceWeightMinAggregateInputType;
    _max?: PreferenceWeightMaxAggregateInputType;
};
export type PreferenceWeightGroupByOutputType = {
    id: string;
    profileId: string;
    kind: $Enums.PreferenceKind;
    key: string;
    weight: number;
    createdAt: Date;
    updatedAt: Date;
    _count: PreferenceWeightCountAggregateOutputType | null;
    _avg: PreferenceWeightAvgAggregateOutputType | null;
    _sum: PreferenceWeightSumAggregateOutputType | null;
    _min: PreferenceWeightMinAggregateOutputType | null;
    _max: PreferenceWeightMaxAggregateOutputType | null;
};
type GetPreferenceWeightGroupByPayload<T extends PreferenceWeightGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PreferenceWeightGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PreferenceWeightGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PreferenceWeightGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PreferenceWeightGroupByOutputType[P]>;
}>>;
export type PreferenceWeightWhereInput = {
    AND?: Prisma.PreferenceWeightWhereInput | Prisma.PreferenceWeightWhereInput[];
    OR?: Prisma.PreferenceWeightWhereInput[];
    NOT?: Prisma.PreferenceWeightWhereInput | Prisma.PreferenceWeightWhereInput[];
    id?: Prisma.StringFilter<"PreferenceWeight"> | string;
    profileId?: Prisma.StringFilter<"PreferenceWeight"> | string;
    kind?: Prisma.EnumPreferenceKindFilter<"PreferenceWeight"> | $Enums.PreferenceKind;
    key?: Prisma.StringFilter<"PreferenceWeight"> | string;
    weight?: Prisma.IntFilter<"PreferenceWeight"> | number;
    createdAt?: Prisma.DateTimeFilter<"PreferenceWeight"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PreferenceWeight"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type PreferenceWeightOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type PreferenceWeightWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profileId_kind_key?: Prisma.PreferenceWeightProfileIdKindKeyCompoundUniqueInput;
    AND?: Prisma.PreferenceWeightWhereInput | Prisma.PreferenceWeightWhereInput[];
    OR?: Prisma.PreferenceWeightWhereInput[];
    NOT?: Prisma.PreferenceWeightWhereInput | Prisma.PreferenceWeightWhereInput[];
    profileId?: Prisma.StringFilter<"PreferenceWeight"> | string;
    kind?: Prisma.EnumPreferenceKindFilter<"PreferenceWeight"> | $Enums.PreferenceKind;
    key?: Prisma.StringFilter<"PreferenceWeight"> | string;
    weight?: Prisma.IntFilter<"PreferenceWeight"> | number;
    createdAt?: Prisma.DateTimeFilter<"PreferenceWeight"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PreferenceWeight"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profileId_kind_key">;
export type PreferenceWeightOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PreferenceWeightCountOrderByAggregateInput;
    _avg?: Prisma.PreferenceWeightAvgOrderByAggregateInput;
    _max?: Prisma.PreferenceWeightMaxOrderByAggregateInput;
    _min?: Prisma.PreferenceWeightMinOrderByAggregateInput;
    _sum?: Prisma.PreferenceWeightSumOrderByAggregateInput;
};
export type PreferenceWeightScalarWhereWithAggregatesInput = {
    AND?: Prisma.PreferenceWeightScalarWhereWithAggregatesInput | Prisma.PreferenceWeightScalarWhereWithAggregatesInput[];
    OR?: Prisma.PreferenceWeightScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PreferenceWeightScalarWhereWithAggregatesInput | Prisma.PreferenceWeightScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PreferenceWeight"> | string;
    profileId?: Prisma.StringWithAggregatesFilter<"PreferenceWeight"> | string;
    kind?: Prisma.EnumPreferenceKindWithAggregatesFilter<"PreferenceWeight"> | $Enums.PreferenceKind;
    key?: Prisma.StringWithAggregatesFilter<"PreferenceWeight"> | string;
    weight?: Prisma.IntWithAggregatesFilter<"PreferenceWeight"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PreferenceWeight"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PreferenceWeight"> | Date | string;
};
export type PreferenceWeightCreateInput = {
    id?: string;
    kind: $Enums.PreferenceKind;
    key: string;
    weight: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutWeightsInput;
};
export type PreferenceWeightUncheckedCreateInput = {
    id?: string;
    profileId: string;
    kind: $Enums.PreferenceKind;
    key: string;
    weight: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceWeightUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPreferenceKindFieldUpdateOperationsInput | $Enums.PreferenceKind;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutWeightsNestedInput;
};
export type PreferenceWeightUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPreferenceKindFieldUpdateOperationsInput | $Enums.PreferenceKind;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceWeightCreateManyInput = {
    id?: string;
    profileId: string;
    kind: $Enums.PreferenceKind;
    key: string;
    weight: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceWeightUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPreferenceKindFieldUpdateOperationsInput | $Enums.PreferenceKind;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceWeightUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPreferenceKindFieldUpdateOperationsInput | $Enums.PreferenceKind;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceWeightListRelationFilter = {
    every?: Prisma.PreferenceWeightWhereInput;
    some?: Prisma.PreferenceWeightWhereInput;
    none?: Prisma.PreferenceWeightWhereInput;
};
export type PreferenceWeightOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PreferenceWeightProfileIdKindKeyCompoundUniqueInput = {
    profileId: string;
    kind: $Enums.PreferenceKind;
    key: string;
};
export type PreferenceWeightCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferenceWeightAvgOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
};
export type PreferenceWeightMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferenceWeightMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferenceWeightSumOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
};
export type PreferenceWeightCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PreferenceWeightCreateWithoutProfileInput, Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput> | Prisma.PreferenceWeightCreateWithoutProfileInput[] | Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput | Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PreferenceWeightCreateManyProfileInputEnvelope;
    connect?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
};
export type PreferenceWeightUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PreferenceWeightCreateWithoutProfileInput, Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput> | Prisma.PreferenceWeightCreateWithoutProfileInput[] | Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput | Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PreferenceWeightCreateManyProfileInputEnvelope;
    connect?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
};
export type PreferenceWeightUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PreferenceWeightCreateWithoutProfileInput, Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput> | Prisma.PreferenceWeightCreateWithoutProfileInput[] | Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput | Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PreferenceWeightUpsertWithWhereUniqueWithoutProfileInput | Prisma.PreferenceWeightUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PreferenceWeightCreateManyProfileInputEnvelope;
    set?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    disconnect?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    delete?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    connect?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    update?: Prisma.PreferenceWeightUpdateWithWhereUniqueWithoutProfileInput | Prisma.PreferenceWeightUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PreferenceWeightUpdateManyWithWhereWithoutProfileInput | Prisma.PreferenceWeightUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PreferenceWeightScalarWhereInput | Prisma.PreferenceWeightScalarWhereInput[];
};
export type PreferenceWeightUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PreferenceWeightCreateWithoutProfileInput, Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput> | Prisma.PreferenceWeightCreateWithoutProfileInput[] | Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput | Prisma.PreferenceWeightCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PreferenceWeightUpsertWithWhereUniqueWithoutProfileInput | Prisma.PreferenceWeightUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PreferenceWeightCreateManyProfileInputEnvelope;
    set?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    disconnect?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    delete?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    connect?: Prisma.PreferenceWeightWhereUniqueInput | Prisma.PreferenceWeightWhereUniqueInput[];
    update?: Prisma.PreferenceWeightUpdateWithWhereUniqueWithoutProfileInput | Prisma.PreferenceWeightUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PreferenceWeightUpdateManyWithWhereWithoutProfileInput | Prisma.PreferenceWeightUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PreferenceWeightScalarWhereInput | Prisma.PreferenceWeightScalarWhereInput[];
};
export type EnumPreferenceKindFieldUpdateOperationsInput = {
    set?: $Enums.PreferenceKind;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PreferenceWeightCreateWithoutProfileInput = {
    id?: string;
    kind: $Enums.PreferenceKind;
    key: string;
    weight: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceWeightUncheckedCreateWithoutProfileInput = {
    id?: string;
    kind: $Enums.PreferenceKind;
    key: string;
    weight: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceWeightCreateOrConnectWithoutProfileInput = {
    where: Prisma.PreferenceWeightWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreferenceWeightCreateWithoutProfileInput, Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput>;
};
export type PreferenceWeightCreateManyProfileInputEnvelope = {
    data: Prisma.PreferenceWeightCreateManyProfileInput | Prisma.PreferenceWeightCreateManyProfileInput[];
};
export type PreferenceWeightUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PreferenceWeightWhereUniqueInput;
    update: Prisma.XOR<Prisma.PreferenceWeightUpdateWithoutProfileInput, Prisma.PreferenceWeightUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.PreferenceWeightCreateWithoutProfileInput, Prisma.PreferenceWeightUncheckedCreateWithoutProfileInput>;
};
export type PreferenceWeightUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PreferenceWeightWhereUniqueInput;
    data: Prisma.XOR<Prisma.PreferenceWeightUpdateWithoutProfileInput, Prisma.PreferenceWeightUncheckedUpdateWithoutProfileInput>;
};
export type PreferenceWeightUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.PreferenceWeightScalarWhereInput;
    data: Prisma.XOR<Prisma.PreferenceWeightUpdateManyMutationInput, Prisma.PreferenceWeightUncheckedUpdateManyWithoutProfileInput>;
};
export type PreferenceWeightScalarWhereInput = {
    AND?: Prisma.PreferenceWeightScalarWhereInput | Prisma.PreferenceWeightScalarWhereInput[];
    OR?: Prisma.PreferenceWeightScalarWhereInput[];
    NOT?: Prisma.PreferenceWeightScalarWhereInput | Prisma.PreferenceWeightScalarWhereInput[];
    id?: Prisma.StringFilter<"PreferenceWeight"> | string;
    profileId?: Prisma.StringFilter<"PreferenceWeight"> | string;
    kind?: Prisma.EnumPreferenceKindFilter<"PreferenceWeight"> | $Enums.PreferenceKind;
    key?: Prisma.StringFilter<"PreferenceWeight"> | string;
    weight?: Prisma.IntFilter<"PreferenceWeight"> | number;
    createdAt?: Prisma.DateTimeFilter<"PreferenceWeight"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PreferenceWeight"> | Date | string;
};
export type PreferenceWeightCreateManyProfileInput = {
    id?: string;
    kind: $Enums.PreferenceKind;
    key: string;
    weight: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceWeightUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPreferenceKindFieldUpdateOperationsInput | $Enums.PreferenceKind;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceWeightUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPreferenceKindFieldUpdateOperationsInput | $Enums.PreferenceKind;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceWeightUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumPreferenceKindFieldUpdateOperationsInput | $Enums.PreferenceKind;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceWeightSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    kind?: boolean;
    key?: boolean;
    weight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferenceWeight"]>;
export type PreferenceWeightSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    kind?: boolean;
    key?: boolean;
    weight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferenceWeight"]>;
export type PreferenceWeightSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    kind?: boolean;
    key?: boolean;
    weight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferenceWeight"]>;
export type PreferenceWeightSelectScalar = {
    id?: boolean;
    profileId?: boolean;
    kind?: boolean;
    key?: boolean;
    weight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PreferenceWeightOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profileId" | "kind" | "key" | "weight" | "createdAt" | "updatedAt", ExtArgs["result"]["preferenceWeight"]>;
export type PreferenceWeightInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type PreferenceWeightIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type PreferenceWeightIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $PreferenceWeightPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PreferenceWeight";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profileId: string;
        kind: $Enums.PreferenceKind;
        key: string;
        weight: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["preferenceWeight"]>;
    composites: {};
};
export type PreferenceWeightGetPayload<S extends boolean | null | undefined | PreferenceWeightDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload, S>;
export type PreferenceWeightCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PreferenceWeightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PreferenceWeightCountAggregateInputType | true;
};
export interface PreferenceWeightDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PreferenceWeight'];
        meta: {
            name: 'PreferenceWeight';
        };
    };
    /**
     * Find zero or one PreferenceWeight that matches the filter.
     * @param {PreferenceWeightFindUniqueArgs} args - Arguments to find a PreferenceWeight
     * @example
     * // Get one PreferenceWeight
     * const preferenceWeight = await prisma.preferenceWeight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferenceWeightFindUniqueArgs>(args: Prisma.SelectSubset<T, PreferenceWeightFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PreferenceWeight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferenceWeightFindUniqueOrThrowArgs} args - Arguments to find a PreferenceWeight
     * @example
     * // Get one PreferenceWeight
     * const preferenceWeight = await prisma.preferenceWeight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferenceWeightFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PreferenceWeightFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PreferenceWeight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceWeightFindFirstArgs} args - Arguments to find a PreferenceWeight
     * @example
     * // Get one PreferenceWeight
     * const preferenceWeight = await prisma.preferenceWeight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferenceWeightFindFirstArgs>(args?: Prisma.SelectSubset<T, PreferenceWeightFindFirstArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PreferenceWeight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceWeightFindFirstOrThrowArgs} args - Arguments to find a PreferenceWeight
     * @example
     * // Get one PreferenceWeight
     * const preferenceWeight = await prisma.preferenceWeight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferenceWeightFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PreferenceWeightFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PreferenceWeights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceWeightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreferenceWeights
     * const preferenceWeights = await prisma.preferenceWeight.findMany()
     *
     * // Get first 10 PreferenceWeights
     * const preferenceWeights = await prisma.preferenceWeight.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const preferenceWeightWithIdOnly = await prisma.preferenceWeight.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PreferenceWeightFindManyArgs>(args?: Prisma.SelectSubset<T, PreferenceWeightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PreferenceWeight.
     * @param {PreferenceWeightCreateArgs} args - Arguments to create a PreferenceWeight.
     * @example
     * // Create one PreferenceWeight
     * const PreferenceWeight = await prisma.preferenceWeight.create({
     *   data: {
     *     // ... data to create a PreferenceWeight
     *   }
     * })
     *
     */
    create<T extends PreferenceWeightCreateArgs>(args: Prisma.SelectSubset<T, PreferenceWeightCreateArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PreferenceWeights.
     * @param {PreferenceWeightCreateManyArgs} args - Arguments to create many PreferenceWeights.
     * @example
     * // Create many PreferenceWeights
     * const preferenceWeight = await prisma.preferenceWeight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PreferenceWeightCreateManyArgs>(args?: Prisma.SelectSubset<T, PreferenceWeightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PreferenceWeights and returns the data saved in the database.
     * @param {PreferenceWeightCreateManyAndReturnArgs} args - Arguments to create many PreferenceWeights.
     * @example
     * // Create many PreferenceWeights
     * const preferenceWeight = await prisma.preferenceWeight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PreferenceWeights and only return the `id`
     * const preferenceWeightWithIdOnly = await prisma.preferenceWeight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PreferenceWeightCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PreferenceWeightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PreferenceWeight.
     * @param {PreferenceWeightDeleteArgs} args - Arguments to delete one PreferenceWeight.
     * @example
     * // Delete one PreferenceWeight
     * const PreferenceWeight = await prisma.preferenceWeight.delete({
     *   where: {
     *     // ... filter to delete one PreferenceWeight
     *   }
     * })
     *
     */
    delete<T extends PreferenceWeightDeleteArgs>(args: Prisma.SelectSubset<T, PreferenceWeightDeleteArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PreferenceWeight.
     * @param {PreferenceWeightUpdateArgs} args - Arguments to update one PreferenceWeight.
     * @example
     * // Update one PreferenceWeight
     * const preferenceWeight = await prisma.preferenceWeight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PreferenceWeightUpdateArgs>(args: Prisma.SelectSubset<T, PreferenceWeightUpdateArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PreferenceWeights.
     * @param {PreferenceWeightDeleteManyArgs} args - Arguments to filter PreferenceWeights to delete.
     * @example
     * // Delete a few PreferenceWeights
     * const { count } = await prisma.preferenceWeight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PreferenceWeightDeleteManyArgs>(args?: Prisma.SelectSubset<T, PreferenceWeightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PreferenceWeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceWeightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreferenceWeights
     * const preferenceWeight = await prisma.preferenceWeight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PreferenceWeightUpdateManyArgs>(args: Prisma.SelectSubset<T, PreferenceWeightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PreferenceWeights and returns the data updated in the database.
     * @param {PreferenceWeightUpdateManyAndReturnArgs} args - Arguments to update many PreferenceWeights.
     * @example
     * // Update many PreferenceWeights
     * const preferenceWeight = await prisma.preferenceWeight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PreferenceWeights and only return the `id`
     * const preferenceWeightWithIdOnly = await prisma.preferenceWeight.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreferenceWeightUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PreferenceWeightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PreferenceWeight.
     * @param {PreferenceWeightUpsertArgs} args - Arguments to update or create a PreferenceWeight.
     * @example
     * // Update or create a PreferenceWeight
     * const preferenceWeight = await prisma.preferenceWeight.upsert({
     *   create: {
     *     // ... data to create a PreferenceWeight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreferenceWeight we want to update
     *   }
     * })
     */
    upsert<T extends PreferenceWeightUpsertArgs>(args: Prisma.SelectSubset<T, PreferenceWeightUpsertArgs<ExtArgs>>): Prisma.Prisma__PreferenceWeightClient<runtime.Types.Result.GetResult<Prisma.$PreferenceWeightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PreferenceWeights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceWeightCountArgs} args - Arguments to filter PreferenceWeights to count.
     * @example
     * // Count the number of PreferenceWeights
     * const count = await prisma.preferenceWeight.count({
     *   where: {
     *     // ... the filter for the PreferenceWeights we want to count
     *   }
     * })
    **/
    count<T extends PreferenceWeightCountArgs>(args?: Prisma.Subset<T, PreferenceWeightCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PreferenceWeightCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PreferenceWeight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceWeightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferenceWeightAggregateArgs>(args: Prisma.Subset<T, PreferenceWeightAggregateArgs>): Prisma.PrismaPromise<GetPreferenceWeightAggregateType<T>>;
    /**
     * Group by PreferenceWeight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceWeightGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PreferenceWeightGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PreferenceWeightGroupByArgs['orderBy'];
    } : {
        orderBy?: PreferenceWeightGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PreferenceWeightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceWeightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PreferenceWeight model
     */
    readonly fields: PreferenceWeightFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PreferenceWeight.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PreferenceWeightClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PreferenceWeight model
 */
export interface PreferenceWeightFieldRefs {
    readonly id: Prisma.FieldRef<"PreferenceWeight", 'String'>;
    readonly profileId: Prisma.FieldRef<"PreferenceWeight", 'String'>;
    readonly kind: Prisma.FieldRef<"PreferenceWeight", 'PreferenceKind'>;
    readonly key: Prisma.FieldRef<"PreferenceWeight", 'String'>;
    readonly weight: Prisma.FieldRef<"PreferenceWeight", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PreferenceWeight", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PreferenceWeight", 'DateTime'>;
}
/**
 * PreferenceWeight findUnique
 */
export type PreferenceWeightFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * Filter, which PreferenceWeight to fetch.
     */
    where: Prisma.PreferenceWeightWhereUniqueInput;
};
/**
 * PreferenceWeight findUniqueOrThrow
 */
export type PreferenceWeightFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * Filter, which PreferenceWeight to fetch.
     */
    where: Prisma.PreferenceWeightWhereUniqueInput;
};
/**
 * PreferenceWeight findFirst
 */
export type PreferenceWeightFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * Filter, which PreferenceWeight to fetch.
     */
    where?: Prisma.PreferenceWeightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceWeights to fetch.
     */
    orderBy?: Prisma.PreferenceWeightOrderByWithRelationInput | Prisma.PreferenceWeightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PreferenceWeights.
     */
    cursor?: Prisma.PreferenceWeightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceWeights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceWeights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PreferenceWeights.
     */
    distinct?: Prisma.PreferenceWeightScalarFieldEnum | Prisma.PreferenceWeightScalarFieldEnum[];
};
/**
 * PreferenceWeight findFirstOrThrow
 */
export type PreferenceWeightFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * Filter, which PreferenceWeight to fetch.
     */
    where?: Prisma.PreferenceWeightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceWeights to fetch.
     */
    orderBy?: Prisma.PreferenceWeightOrderByWithRelationInput | Prisma.PreferenceWeightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PreferenceWeights.
     */
    cursor?: Prisma.PreferenceWeightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceWeights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceWeights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PreferenceWeights.
     */
    distinct?: Prisma.PreferenceWeightScalarFieldEnum | Prisma.PreferenceWeightScalarFieldEnum[];
};
/**
 * PreferenceWeight findMany
 */
export type PreferenceWeightFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * Filter, which PreferenceWeights to fetch.
     */
    where?: Prisma.PreferenceWeightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceWeights to fetch.
     */
    orderBy?: Prisma.PreferenceWeightOrderByWithRelationInput | Prisma.PreferenceWeightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PreferenceWeights.
     */
    cursor?: Prisma.PreferenceWeightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceWeights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceWeights.
     */
    skip?: number;
    distinct?: Prisma.PreferenceWeightScalarFieldEnum | Prisma.PreferenceWeightScalarFieldEnum[];
};
/**
 * PreferenceWeight create
 */
export type PreferenceWeightCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * The data needed to create a PreferenceWeight.
     */
    data: Prisma.XOR<Prisma.PreferenceWeightCreateInput, Prisma.PreferenceWeightUncheckedCreateInput>;
};
/**
 * PreferenceWeight createMany
 */
export type PreferenceWeightCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreferenceWeights.
     */
    data: Prisma.PreferenceWeightCreateManyInput | Prisma.PreferenceWeightCreateManyInput[];
};
/**
 * PreferenceWeight createManyAndReturn
 */
export type PreferenceWeightCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * The data used to create many PreferenceWeights.
     */
    data: Prisma.PreferenceWeightCreateManyInput | Prisma.PreferenceWeightCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PreferenceWeight update
 */
export type PreferenceWeightUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * The data needed to update a PreferenceWeight.
     */
    data: Prisma.XOR<Prisma.PreferenceWeightUpdateInput, Prisma.PreferenceWeightUncheckedUpdateInput>;
    /**
     * Choose, which PreferenceWeight to update.
     */
    where: Prisma.PreferenceWeightWhereUniqueInput;
};
/**
 * PreferenceWeight updateMany
 */
export type PreferenceWeightUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PreferenceWeights.
     */
    data: Prisma.XOR<Prisma.PreferenceWeightUpdateManyMutationInput, Prisma.PreferenceWeightUncheckedUpdateManyInput>;
    /**
     * Filter which PreferenceWeights to update
     */
    where?: Prisma.PreferenceWeightWhereInput;
    /**
     * Limit how many PreferenceWeights to update.
     */
    limit?: number;
};
/**
 * PreferenceWeight updateManyAndReturn
 */
export type PreferenceWeightUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * The data used to update PreferenceWeights.
     */
    data: Prisma.XOR<Prisma.PreferenceWeightUpdateManyMutationInput, Prisma.PreferenceWeightUncheckedUpdateManyInput>;
    /**
     * Filter which PreferenceWeights to update
     */
    where?: Prisma.PreferenceWeightWhereInput;
    /**
     * Limit how many PreferenceWeights to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PreferenceWeight upsert
 */
export type PreferenceWeightUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * The filter to search for the PreferenceWeight to update in case it exists.
     */
    where: Prisma.PreferenceWeightWhereUniqueInput;
    /**
     * In case the PreferenceWeight found by the `where` argument doesn't exist, create a new PreferenceWeight with this data.
     */
    create: Prisma.XOR<Prisma.PreferenceWeightCreateInput, Prisma.PreferenceWeightUncheckedCreateInput>;
    /**
     * In case the PreferenceWeight was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PreferenceWeightUpdateInput, Prisma.PreferenceWeightUncheckedUpdateInput>;
};
/**
 * PreferenceWeight delete
 */
export type PreferenceWeightDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
    /**
     * Filter which PreferenceWeight to delete.
     */
    where: Prisma.PreferenceWeightWhereUniqueInput;
};
/**
 * PreferenceWeight deleteMany
 */
export type PreferenceWeightDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PreferenceWeights to delete
     */
    where?: Prisma.PreferenceWeightWhereInput;
    /**
     * Limit how many PreferenceWeights to delete.
     */
    limit?: number;
};
/**
 * PreferenceWeight without action
 */
export type PreferenceWeightDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceWeight
     */
    select?: Prisma.PreferenceWeightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceWeight
     */
    omit?: Prisma.PreferenceWeightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceWeightInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PreferenceWeight.d.ts.map