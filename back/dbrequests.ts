import Category from './Schemas/category.js';
import Customer from './Schemas/customer.js';
import Type from './Schemas/model.js';
import Order from './Schemas/order.js';

class funcs
{
    /////////////////////////////////////////////// Requests
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

    async good_info(__id: number)
    {
        let res: any;
        await Type.find( {id_model: __id}, function(err, type)
        {
            if(err) return -1;
            res = type;
        });
        return res;
    }

    async sum_for_period(__id: number, start: string, end: string)
    {
        let query: any;
        let res: number = 0;
        await Order.find( {date_of_order: {"$gte": start, "$lte": end}},
        function(err, orders)
        {
            if(err) return -1;
            query = orders;
        });
        let i: any;
        for(i of query)
        {
            await Type.find( {id_model: i.type}, function(err, mod)
            {
                if(err) return -1;
                res += mod[0].price;
            });
        }
        return res;
    }
    /////////////////////////////////////////////// Inserts

    async add_category(__id: number, __name: string)
    {
        let id_status: boolean = true;
        if(await Category.exists({id_category: __id})) id_status = false;

        if(id_status) await Category.create({id_category: __id, name: __name}, function(err, cat){});

        return {id: id_status};
    }

    async add_customer(__id: number, __fname: string, __lname: string, __dob: string, __location: string)
    {
        let id_status: boolean = true;
        if(await Customer.exists({id_customer: __id})) id_status = false;

        if(id_status) await Customer.create({id_customer: __id, fname: __fname, lname: __lname, date_of_birth: __dob, location: __location},
        function(err, cus){});

        return {id: id_status};
    }

    async add_model(__id: number, __name: string, __price: number, __category: number, __storage: number)
    {
        let id_status: boolean = true;
        let cat_status: boolean = false;
        if(await Type.exists({id_model: __id})) id_status = false;
        if(await Category.exists({id_category: __category})) cat_status = true;

        if(id_status) await Type.create({id_model: __id, name: __name, price: __price, category: __category, storage: __storage}, 
        function(err, mod){});

        return {id: id_status, category: cat_status};
    }

    async add_order(__id: number, __customer: number, __model: number, __doo: string, __dod: string, __delivery: string)
    {
        let id_status: boolean = true;
        let cus_status: boolean = false;
        let mod_status: boolean = false;
        if(await Order.exists({id_order: __id})) id_status = false;
        if(await Customer.exists({id_customer: __customer})) cus_status = true;
        if(await Type.exists({id_model: __model})) mod_status = true;

        if(id_status && cus_status && mod_status) await Order.create({id_order: __id, customer: __customer, type: __model, date_of_order: __doo, date_of_delivery: __dod, delivery_type: __delivery},
        async function(err, ord)
        {
            if(err) return;
            await Type.update({id_model: __model}, {$inc: {storage: -1}});
        });
        return {id: id_status, customer: cus_status, model: mod_status};
    }
};

const DBfuncs: funcs = new funcs();
export default DBfuncs;