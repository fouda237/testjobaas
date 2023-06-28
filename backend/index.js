require("dotenv").config()
const express = require("express");
const cors = require("cors");
const bodyparse=require("body-parser")
const router = require("./routes/usersRoute");
const mongoose=require("mongoose")
const PORT = process.env.PORT ;
const data=require("./config/database")
const app = express();
//middleware
app.use(cors());
// Parses the text as url encoded data
app.use(bodyparse.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyparse.json());

app.use(router);


// // database connection
data()
// mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,useUnifiedTopology:true});
// const db=mongoose.connection;
// db.on('error',(error )=>console.log(error));
// db.once('open',async()=>{
//   console.log("connected to the database!")
// });

const server=app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
module.exports=server;