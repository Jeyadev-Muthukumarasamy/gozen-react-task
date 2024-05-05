const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
    const secretKey = "your_secret_key_here";
    const accessToken = jwt.sign({ _id: userId }, secretKey);
    return accessToken;
};

module.exports = { generateAccessToken };
