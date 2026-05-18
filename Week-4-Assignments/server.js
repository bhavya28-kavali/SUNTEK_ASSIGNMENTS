import exp from "express";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import { userApp } from "./APIs/Userapi.js";
import { productApp } from "./APIs/Productapi.js";

const app = exp();
const port = 4000;

// middleware
app.use(exp.json());
app.use(cookieParser());

// routes
app.use("/user-api", userApp);
app.use("/product-api", productApp);

// DB connection
async function connectDB() {
  try {
    await connect("mongodb://127.0.0.1:27017/anuragdb2");
    console.log("DB connection successful");

    app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
  } catch (err) {
    console.log("Error in DB connection", err);
  }
}

connectDB();
