import express from "express";
import bodyParser from 'body-parser';
import connectFlash from 'connect-flash';
import ConnectDB from './config/connectDB';
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import configSession from "./config/session";

//Init app
let app = express();
//connect to MongoDB
ConnectDB();

// Config session
configSession(app)

// Config view engine
configViewEngine(app);

// enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// Enable flash messages
app.use(connectFlash())

//init all routes
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=>{
  console.log('Listen in port : ', process.env.APP_PORT);
})