// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import UserRoute from "./router/user.route.js"
// const app = express();
// app.use(cors());
// app.use(express.json());
// mongoose.connect('mongodb://127.0.0.1:27017/bmi-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));
// app.use("/user", UserRoute);

// app.listen(3000, () => {
//   console.log("server started");
// });







import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./router/user.route.js";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cors());
app.use(cookieParser());
mongoose.connect("mongodb://localhost:27017/bmi-app")
    .then(() => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use("/user", UserRouter);

        app.listen(5000, () => {
            console.log("Server Started.. " );
        });
}).catch(err=>{
    console.log("Database connection failed..");
})

