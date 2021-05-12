import DBreq from './dbrequests.js';

export default async function(request: any)
{
    let func: string = request.get('command');
    let result: any;
    switch(func) //good_info(1), order_info(1), customer_orders(1), sum_for_period(3)
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
            result = await DBreq.sum_for_period(parseInt(request.get('arg1')), request.get('arg2'), request.get('arg3'));
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