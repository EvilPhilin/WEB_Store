//const Mongoose = require('mongoose');
const Express = require('express');

//import Category from './category';
//import Customer from './customer';
//import Type from './model';
//import Order from './order';

//let database = Mongoose.Connection;

//const url: string = "mongodb://localhost:27017/store";

// Mongoose.connect(url,
// {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });
// database = Mongoose.connection;

// database.once("open", function()
// {
//     console.log("Connected to database");
// });

// database.on("error", function()
// {
//     console.log("Error connecting to database");
// });

// Category.create({ id_category: 1, name: 'Keyboards' });
// Customer.create({ id_customer: 1, fname: 'Alexei', lname: 'Stepanov', date_of_birth: '1/1/1', location: 'Uganda'});
// Type.create({ id_model: 1, name: 'Ya tebe shas potikayu', price: 199, category: 1, storage: 50});
// Order.create({ id_order: 1, customer: 1, type: 1, date_of_order: '1/1/1', date_of_delivery: '2/1/1', delivery_type: 'Airdrop'});

const app = Express();
const http = require('http').Server(app);

app.use((request: any, response: any) =>
{
    response.send('<h1>Серёга тестит хттп</h1>');
})

let port = process.env.PORT;

http.listen(port, function()
{
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();