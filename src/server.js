import express from "express";
import ConnectDB from './config/connectDB';
import ContactModel from './models/contact.model';

let app = express();
//connect to MongoDB
ConnectDB();


app.get("/test-database" ,async (req,res) => {
  try {
    let item = {
      userId : "17074545",
      contactId: "124512451",
    };
    let contact = await ContactModel.createNew(item);
    res.send(contact);

  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=>{
  console.log('Listen in port : ', process.env.APP_PORT);
})