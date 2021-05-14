import Http from 'http';

const url = 'mus-market.herokuapp.com';

let options =
{
    hostname: url,
    path: '/func',

    headers:
    {
        command: 'add_category',// good_info(1), order_info(1), customer_orders(1), sum_for_period(3)
        arg1: '2',                // add_category(2)
        arg2: 'Drums',
        arg3: '1234/12/30'
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