const User = require('../models/user');
const jwt = require('jsonwebtoken');

//create jwt token
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}

const Login_user = async(req,res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email,password);

        //create token after signup
        const token = createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const Signup_user = async(req,res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email,password);

        //create token after signup
        const token = createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {Login_user,Signup_user}