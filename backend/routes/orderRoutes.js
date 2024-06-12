import express from "express";
import authorized from "../middleware/auth.js";
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeOrder", authorized, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userOrders", authorized, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
