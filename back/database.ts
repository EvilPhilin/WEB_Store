import Mongoose from 'mongoose';
import Express from 'express';
import Http from 'http';

import Category from './Schemas/category.js';
import Customer from './Schemas/customer.js';
import Type from './Schemas/model.js';
import Order from './Schemas/order.js';
import DBreq from './dbrequests.js';

const url: string = "mongodb+srv://Evil_Philin:83913932133@webstoreproject.1rfah.mongodb.net/web_store?retryWrites=true&w=majority";

Mongoose.connect(url,
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

let database = Mongoose.connection;

database.once("open", function()
{
    console.log("Connected to database");
});

database.on("error", function()
{
    console.log("Error connecting to database");
});

const app = Express();
const http = new Http.Server(app);

app.get('/', (request: any, response: any) =>
{
    response.send("<h1>Main page</h1>");
})

app.get('/func', async (request: any, response: any) =>
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
    response.send(result);
})

let port = process.env.PORT || 5000;

http.listen(port, function()
{
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();