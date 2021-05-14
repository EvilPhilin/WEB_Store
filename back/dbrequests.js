import Category from './Schemas/category.js';
import Type from './Schemas/model.js';
import Order from './Schemas/order.js';
class funcs {
    /////////////////////////////////////////////// Requests
    async order_info(__id) {
        let res;
        await Order.find({ id_order: __id }, function (err, order) {
            if (err)
                return -1;
            res = order;
        });
        return res;
    }
    async customer_orders(__id) {
        let res;
        await Order.find({ customer: __id }, function (err, orders) {
            if (err)
                return -1;
            res = orders;
        });
        return res;
    }
    async good_info(__id) {
        let res;
        await Type.find({ id_model: __id }, function (err, type) {
            if (err)
                return -1;
            res = type;
        });
        return res;
    }
    async sum_for_period(__id, start, end) {
        let query;
        let res = 0;
        await Order.find({ date_of_order: { "$gte": start, "$lte": end } }, function (err, orders) {
            if (err)
                return -1;
            query = orders;
        });
        let i;
        for (i of query) {
            await Type.find({ id_model: i.type }, function (err, mod) {
                if (err)
                    return -1;
                res += mod[0].price;
            });
        }
        return res;
    }
    /////////////////////////////////////////////// Inserts
    async add_category(__id, __name) {
        let status = 'Ok!';
        await Category.create({ id_category: __id, name: __name }, function (err, cat) {
            if (err)
                status = err;
        });
        return status;
    }
}
;
const DBfuncs = new funcs();
export default DBfuncs;
