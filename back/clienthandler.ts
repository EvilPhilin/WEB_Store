import DBreq from './dbrequests.js';

export default async function(request: any)
{
    let func: string = request.get('command');
    let result: any;
    switch(func) //good_info(1), order_info(1), customer_orders(1), sum_for_period(3)
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
            let start: string =  request.get('arg2');
            let end: string =  request.get('arg3');
            result = await DBreq.sum_for_period(parseInt(request.get('arg1')), start, end);
            break;
        }
        /////////////////////////////////////////////// Inserts
        //add_category(2), add_customer(5), add_model(5), add_order(6)
        case 'add_category':
        {
            result = await DBreq.add_category(parseInt(request.get('arg1')), request.get('arg2'));
            break
        }
        case 'add_customer':
        {
            let id: number = parseInt(request.get('arg1'));
            let fname: string = request.get('arg2');
            let lname: string = request.get('arg3');
            let dob: string = request.get('arg4');
            let location: string = request.get('arg5');
            result = await DBreq.add_customer(id, fname, lname, dob, location);
            break
        }
        case 'add_model':
        {
            let id: number = parseInt(request.get('arg1'));
            let name: string = request.get('arg2');
            let price: number = parseInt(request.get('arg3'));
            let category: number = parseInt(request.get('arg4'));
            let storage: number = parseInt(request.get('arg5'));
            result = await DBreq.add_model(id, name, price, category, storage);
            break
        }
        case 'add_order':
        {
            let id: number = parseInt(request.get('arg1'));
            let customer: number = parseInt(request.get('arg2'));
            let model: number = parseInt(request.get('arg3'));
            let doo: string = request.get('arg4');
            let dod: string = request.get('arg5');
            let delivery: string = request.get('arg6');
            result = await DBreq.add_order(id, customer, model, doo, dod, delivery);
            break
        }
        default:
        {
            result = 'Wrong request type!';
            break;
        }
    }
    return {RESULT: result};
}