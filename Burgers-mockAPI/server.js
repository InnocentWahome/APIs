//import required modules
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


//defining the port
const port = process.env.PORT || 3000;


//use middleware
server.use(middlewares);
server.use(router);

//port listening
server.listen(port);