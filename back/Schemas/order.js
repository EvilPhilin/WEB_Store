import mg from 'mongoose';
const orderSchema = new mg.Schema({
    id_order: { type: Number, required: true, unique: true },
    customer: { type: Number, required: true },
    type: { type: Number, required: true },
    date_of_order: { type: String, required: true },
    date_of_delivery: { type: String, required: true },
    delivery_type: { type: String, required: true }
});
;
export default mg.model('orders', orderSchema);
