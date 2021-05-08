import Category from './Schemas/category.js';
import Customer from './Schemas/customer.js';
import Type from './Schemas/model.js';
import Order from './Schemas/order.js';

class funcs
{
    async order_info(__id: number)
    {
        let res: any;
        await Order.find( {id_order: __id}, function(err, order)
        {
            if(err) return -1;
            res = order;
        });
        return res;
    }

    async customer_orders(__id: number)
    {
        let res: any;
        await Order.find( {customer: __id}, function(err, orders)
        {
            if(err) return -1;
            res = orders;
        });
        return res;
    }
};

const DBfuncs: funcs = new funcs();
export default DBfuncs;