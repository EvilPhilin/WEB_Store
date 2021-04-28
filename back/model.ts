import mongoose, { Schema, Document } from 'mongoose';

const modelSchema: Schema = new Schema(
    {
        id_model: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        category: { type: Number, required: true },
        storage: { type: Number, required: true }
    }
);

export interface IModel extends Document
{
    id_model: number,
    name: string,
    price: number,
    category: number,
    storage: number
};

export default mongoose.model<IModel>('models', modelSchema);