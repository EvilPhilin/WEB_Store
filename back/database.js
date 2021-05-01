"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Mongoose = require('mongoose');
var Express = require('express');
var category_1 = __importDefault(require("./category"));
var customer_1 = __importDefault(require("./customer"));
var model_1 = __importDefault(require("./model"));
var order_1 = __importDefault(require("./order"));
var database = Mongoose.Connection;
var url = "mongodb+srv://Evil_Philin:83913932133@webstoreproject.1rfah.mongodb.net/web_store?retryWrites=true&w=majority";
Mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
database = Mongoose.connection;
database.once("open", function () {
    console.log("Connected to database");
});
database.on("error", function () {
    console.log("Error connecting to database");
});
category_1.default.create({ id_category: 1, name: 'Keyboards' });
customer_1.default.create({ id_customer: 1, fname: 'Alexei', lname: 'Stepanov', date_of_birth: '1/1/1', location: 'Uganda' });
model_1.default.create({ id_model: 1, name: 'Ya tebe shas potikayu', price: 199, category: 1, storage: 50 });
order_1.default.create({ id_order: 1, customer: 1, type: 1, date_of_order: '1/1/1', date_of_delivery: '2/1/1', delivery_type: 'Airdrop' });
var app = Express();
var http = require('http').Server(app);
app.use(function (request, response) {
    response.send('<h1>Серёга тестит хттп</h1>');
});
var port = process.env.PORT || 5000;
http.listen(port, function () {
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();
