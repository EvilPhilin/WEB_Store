import Mongoose from 'mongoose';
import Express from 'express';
import Http from 'http';
import DBreq from './dbrequests.js';
const url = "mongodb+srv://Evil_Philin:83913932133@webstoreproject.1rfah.mongodb.net/web_store?retryWrites=true&w=majority";
Mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
let database = Mongoose.connection;
database.once("open", function () {
    console.log("Connected to database");
});
database.on("error", function () {
    console.log("Error connecting to database");
});
let price = await DBreq.sum_for_period(1, "0000/01/01", "1234/12/30");
const app = Express();
const http = new Http.Server(app);
app.get('/', (request, response) => {
    response.send(price);
});
let port = process.env.PORT || 5000;
http.listen(port, function () {
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();
