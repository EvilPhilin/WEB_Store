import mg from 'mongoose';
const customerSchema = new mg.Schema({
    id_customer: { type: Number, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    location: { type: String, required: true }
});
;
export default mg.model('customers', customerSchema);
