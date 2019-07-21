import express from "express";
import ConnectDB from './config/connectDB';
import configViewEngine from "./config/viewEngine";

let app = express();
//connect to MongoDB
ConnectDB();

// Config view engine
configViewEngine(app);

app.get("/" ,(req,res) => {
  return res.render("main/master")
});

app.get("/login-register" ,(req,res) => {
  return res.render("auth/loginRegister")
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=>{
  console.log('Listen in port : ', process.env.APP_PORT);
})