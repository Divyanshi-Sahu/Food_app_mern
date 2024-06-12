import express from "express"
import { addItem, getItem, removeItem } from "../controllers/cartController.js";
import authorized  from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add",authorized, addItem);
cartRouter.post("/remove",authorized, removeItem);
cartRouter.post("/get",authorized, getItem);

export default cartRouter;
