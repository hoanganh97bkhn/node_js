import express from "express";
import ConnectDB from './config/connectDB';
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";

//Init app
let app = express();
//connect to MongoDB
ConnectDB();

// Config view engine
configViewEngine(app);

//init all routes
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=>{
  console.log('Listen in port : ', process.env.APP_PORT);
})