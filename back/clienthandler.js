import DBreq from './dbrequests.js';
export default async function (request) {
    let func = request.get('command');
    let result;
    switch (func) //good_info(1), order_info(1), customer_orders(1), sum_for_period(3)
     {
        /////////////////////////////////////////////// Requests
        case 'good_info':
            {
                result = await DBreq.good_info(parseInt(request.get('arg1')));
                break;
            }
        case 'order_info':
            {
                result = await DBreq.order_info(parseInt(request.get('arg1')));
                break;
            }
        case 'customer_orders':
            {
                result = await DBreq.customer_orders(parseInt(request.get('arg1')));
                break;
            }
        case 'sum_for_period':
            {
                let start = request.get('arg2');
                let end = request.get('arg3');
                result = await DBreq.sum_for_period(parseInt(request.get('arg1')), start, end);
                break;
            }
        /////////////////////////////////////////////// Inserts
        //add_category(2), add_customer(5), add_model(5), add_order(6)
        case 'add_category':
            {
                result = await DBreq.add_category(parseInt(request.get('arg1')), request.get('arg2'));
                break;
            }
        case 'add_customer':
            {
                let id = parseInt(request.get('arg1'));
                let fname = request.get('arg2');
                let lname = request.get('arg3');
                let dob = request.get('arg4');
                let location = request.get('arg5');
                result = await DBreq.add_customer(id, fname, lname, dob, location);
                break;
            }
        case 'add_model':
            {
                let id = parseInt(request.get('arg1'));
                let name = request.get('arg2');
                let price = parseInt(request.get('arg3'));
                let category = parseInt(request.get('arg4'));
                let storage = parseInt(request.get('arg5'));
                result = await DBreq.add_model(id, name, price, category, storage);
                break;
            }
        case 'add_order':
            {
                let id = parseInt(request.get('arg1'));
                let customer = parseInt(request.get('arg2'));
                let model = parseInt(request.get('arg3'));
                let doo = request.get('arg4');
                let dod = request.get('arg5');
                let delivery = request.get('arg6');
                result = await DBreq.add_order(id, customer, model, doo, dod, delivery);
                break;
            }
        default:
            {
                result = 'Wrong request type!';
                break;
            }
    }
    return { RESULT: result };
}
