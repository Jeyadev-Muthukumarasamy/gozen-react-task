const bcrypt = require("bcrypt");

const generateHashedPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

const comparePasswordHash = async (password, passwordHash) => {
    try {
        console.log(password,passwordHash)
        return await bcrypt.compare(password, passwordHash);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { generateHashedPassword, comparePasswordHash };
