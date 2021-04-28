import mongoose, { Schema, Document } from 'mongoose';

const customerSchema: Schema = new Schema(
    {
        id_customer: { type: Number, required: true, unique: true },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        date_of_birth: { type: String, required: true },
        location: { type: String, required: true }
    }
);

export interface ICustomer extends Document
{
    id_customer: number,
    fname: string,
    lname: string,
    date_of_birth: string,
    location: string
};

export default mongoose.model<ICustomer>('customers', customerSchema);