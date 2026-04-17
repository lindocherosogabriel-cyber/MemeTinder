import mongoose from "mongoose";
declare const User: mongoose.Model<{
    nickname: string;
    password: string;
    email: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    nickname: string;
    password: string;
    email: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    nickname: string;
    password: string;
    email: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nickname: string;
    password: string;
    email: string;
}, mongoose.Document<unknown, {}, {
    nickname: string;
    password: string;
    email: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    nickname: string;
    password: string;
    email: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    nickname: string;
    password: string;
    email: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    nickname: string;
    password: string;
    email: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default User;
//# sourceMappingURL=UserModel.d.ts.map