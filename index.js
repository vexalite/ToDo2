const express = require("express");
const app = express();
const todoRouter = require("./routes/todoRoutes");
const userRouter = require("./routes/userRoutes"); 
const viewRouter = require("./routes/viewRoutes"); 
const dotenv = require("dotenv");
const cors = require("cors");

app.set("view engine", "ejs")

dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/todo", todoRouter);
app.use("/", viewRouter);

app.get("/", (req, res) =>{
    res.send("Todos API");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})


