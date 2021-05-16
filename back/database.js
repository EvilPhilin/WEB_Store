import Mongoose from 'mongoose';
import Express from 'express';
import Http from 'http';
import Path from 'path';
import ClientHandler from './clienthandler.js';
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
const app = Express();
const http = new Http.Server(app);
app.use(Express.static(__dirname));
app.use(Express.static(Path.join(__dirname, 'build')));
app.get('/', (request, response) => {
    response.sendFile(Path.join(__dirname, 'build', 'index.html'));
    response.end();
});
app.get('/args', (request, response) => {
    response.send({ a1: request.get('arg1'), a2: request.get('arg2'), a3: request.get('arg3') });
});
app.get('/func', async (request, response) => {
    let result = await ClientHandler(request);
    response.send(result);
});
let port = process.env.PORT || 5000;
http.listen(port, function () {
    console.log('listening on port ' + port);
});
//Mongoose.disconnect();
