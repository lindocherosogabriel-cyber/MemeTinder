import mongoose from "mongoose";
declare const memeModel: mongoose.Model<{
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    titulo: string;
    midia: string;
    description?: string | null;
    gostei?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default memeModel;
//# sourceMappingURL=MemeModel.d.ts.map