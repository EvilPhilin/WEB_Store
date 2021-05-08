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

let order: any = await DBreq.customer_orders(1);

const app = Express();
const http = new Http.Server(app);

app.get('/', (request: any, response: any) =>
{
    response.send(order);
})

let port = process.env.PORT || 5000;

http.listen(port, function()
{
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();