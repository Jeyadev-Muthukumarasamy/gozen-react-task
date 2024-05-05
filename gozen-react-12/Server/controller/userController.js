const {generateHashedPassword,comparePasswordHash} = require("../util/bcrypt");
const { generateAccessToken } = require("../util/jwt");
const Users = require("../model/userShema");
const mongoose = require("mongoose")
const signup = async(req,res)=>{
    try {
        const {username,password} = req.body;
        const data = await Users.findOne();
        if(data){
            return res.status(404).json({
                message:"user already exist,please choose a different username",
                data:data
            })
        }
        const hashedPassword = await generateHashedPassword(password)
        console.log(hashedPassword);

        const userData = await Users.create({
            username:username,
            password:hashedPassword
        })

        return res.status(200).json({
            message:"successfuly signed up",
            data:userData
        }
        )
        
    } catch (error) {
        
    }
}


const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({ username });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        console.log(user);
        const isAuthenticated = await comparePasswordHash(password, user.password);
        console.log(isAuthenticated);
        if (!isAuthenticated) {
            return res.status(404).json({
                message: "Username/password invalid",
            });
        }

        const accessToken = await generateAccessToken(user._id);

        return res.status(200).json({
            message: "Successfully logged in",
            data: {
                username: user.username,
                accessToken: accessToken,
            },
        });
    } catch (error) {
        console.log(error);
    }
};


module.exports = { login,signup}