import DBreq from './dbrequests.js';
export default async function (request) {
    let func = request.get('command');
    let result;
    switch (func) //good_info(1), order_info(1), customer_orders(1), sum_for_period(3)
     {
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
        default:
            {
                result = 'Wrong request type!';
                break;
            }
    }
    return result;
}
