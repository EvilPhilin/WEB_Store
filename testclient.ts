import Http from 'http';

const url = 'mus-market.herokuapp.com';

let options =
{
    hostname: url,
    path: '/func',

    headers:
    {
        command: 'order_info',// good_info(1), order_info(1), customer_orders(1), sum_for_period(3)
        arg1: '1',              // add_category(2), add_customer(5), add_model(5), add_order(6)
        arg2: '2',
        arg3: '13',
        arg4: '1111/11/11',
        arg5: '1111/11/12',
        arg6: 'Santa Claus'
    }
};

Http.get(options, (res: any) =>
{
    let data = '';
    res.on('data', (chunk: any) =>
    {
        data += chunk;
    });
    res.on('end', () =>
    {
        console.log(data);
    });
}).on("error", (err: any) => 
{
  console.log("Error: " + err.message);
});