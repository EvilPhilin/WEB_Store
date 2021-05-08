import mg from 'mongoose';
const categorySchema = new mg.Schema({
    id_category: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true }
});
;
export default mg.model('categories', categorySchema);
