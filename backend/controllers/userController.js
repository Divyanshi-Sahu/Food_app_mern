import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import validator from "validator";


const generateToken = (id)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET);
}
// login user

const loginUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json ({success:false, message: "User not exists" });
        }

        const isMatch = await bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.json ({success:false, message: "Passsword do not match" });
        }

        const token = generateToken(user._id);
         res.json({success:true,token})

    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"error"})

    }
    
}

//generateToken

//signup user

const signupUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        //validating email & password

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter valid email" });
        }

        if (password.length<8) {
            return res.json({ success: false, message: "Enter strong password"});
        }

        // authenticate user

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = generateToken(user._id);
        res.json({success:true,token})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

export {loginUser,signupUser}