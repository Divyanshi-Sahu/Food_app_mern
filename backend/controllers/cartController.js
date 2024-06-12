import userModel from "../models/userModel.js";

//add to cart

const addItem = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Item Added to Cart" });

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
}

//remove from cart
const removeItem = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "removed from cart" });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
        
    }
}

//get cart items
const getItem = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
}

export {addItem,removeItem,getItem}