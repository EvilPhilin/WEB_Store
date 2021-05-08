import Order from './Schemas/order.js';
class funcs {
    async order_info(__id) {
        let res;
        await Order.find({ id_order: __id }, function (err, order) {
            if (err)
                return -1;
            res = {
                id_order: order[0].id_order,
                customer: order[0].customer,
                type: order[0].type,
                date_of_order: order[0].date_of_order,
                date_of_delivery: order[0].date_of_delivery,
                delivery_type: order[0].delivery_type
            };
        });
        return res;
    }
}
;
const DBfuncs = new funcs();
export default DBfuncs;
