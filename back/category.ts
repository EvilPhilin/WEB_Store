import mongoose, { Schema, Document } from 'mongoose';

const categorySchema: Schema = new Schema(
    {
        id_category: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true }
    }
);

export interface ICategory extends Document
{
    id_category: number,
    name: string
};

export default mongoose.model<ICategory>('categories', categorySchema);