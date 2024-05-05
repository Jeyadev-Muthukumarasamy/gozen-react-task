const mongoose = require("mongoose")

const dbConfig = async() => {
    try {
        const {connection} = await mongoose.connect('mongodb://localhost:27017/gozen-frontend-server')
        console.log(connection.host)
        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = {dbConfig}