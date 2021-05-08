import Mongoose from 'mongoose';
import Express from 'express';
import Category from './Schemas/category.js';
const url = "mongodb+srv://Evil_Philin:83913932133@webstoreproject.1rfah.mongodb.net/web_store?retryWrites=true&w=majority";
//const url: string = "mongodb://localhost:27017/store?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
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
await Category.find({ id_category: 1 }, function (err, cat) {
    console.log(cat);
});
import Http from 'http';
const app = Express();
const http = new Http.Server(app);
app.use((request, response) => {
    response.send('<h1>Серёга тестит хттп</h1>');
});
let port = process.env.PORT || 5000;
http.listen(port, function () {
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();
