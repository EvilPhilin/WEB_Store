import Mongoose from 'mongoose';
import Express from 'express';
import Http from 'http';

import ClientHandler from './clienthandler.js';

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
    response.send(await ClientHandler(request));
})

let port = process.env.PORT || 5000;

http.listen(port, function()
{
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();