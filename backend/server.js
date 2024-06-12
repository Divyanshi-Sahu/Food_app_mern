import express from "express";
import cors from "cors";
import { connectDb } from "./config/connectdb.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoutes.js";

// const express = require('express');

const path = require("path");
const app = express();
const port = 4000;

// middleware

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./admin/dist")));
app.use(express.static(path.join(__dirname, "./frontend/dist")));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'./admin/dist/index.html'))
})
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'./frontend/dist/index.html'))
})

//connect db
connectDb();
//api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("Hello backend working")
})

app.listen(port, (req, res) => {
    console.log(`port is running on ${port}`)
})

// mongodb+srv://divyanshisahu706:foodAppMern@cluster0.wf9aqfx.mongodb.net/?