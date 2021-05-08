import mg from 'mongoose';

const customerSchema: mg.Schema = new mg.Schema(
    {
        id_customer: { type: Number, required: true, unique: true },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        date_of_birth: { type: String, required: true },
        location: { type: String, required: true }
    }
);

export interface ICustomer extends mg.Document
{
    id_customer: number,
    fname: string,
    lname: string,
    date_of_birth: string,
    location: string
};

export default mg.model<ICustomer>('customers', customerSchema);