import mg from 'mongoose';
const modelSchema = new mg.Schema({
    id_model: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    category: { type: Number, required: true },
    storage: { type: Number, required: true }
});
;
export default mg.model('models', modelSchema);
