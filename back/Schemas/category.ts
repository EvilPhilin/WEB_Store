import mg from 'mongoose';

const categorySchema: mg.Schema = new mg.Schema(
    {
        id_category: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true }
    }
);

export interface ICategory extends mg.Document
{
    id_category: number,
    name: string
};

export default mg.model<ICategory>('categories', categorySchema);