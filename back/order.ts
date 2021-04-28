import mongoose, { Schema, Document } from 'mongoose';

const orderSchema: Schema = new Schema(
    {
        id_order: { type: Number, required: true, unique: true },
        customer: { type: Number, required: true },
        type: { type: Number, required: true },
        date_of_order: { type: String, required: true },
        date_of_delivery: { type: String, required: true },
        delivery_type: { type: String, required: true }
    }
);

export interface IOrder extends Document
{
    id_order: number,
    customer: number,
    type: number,
    date_of_order: string,
    date_of_delivery: string,
    delivery_type: string
};

export default mongoose.model<IOrder>('orders', orderSchema);