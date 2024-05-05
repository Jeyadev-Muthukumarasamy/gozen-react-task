const express = require("express");
const app = express();
const cors = require("cors");
const { dbConfig } = require("./db/db.config");
const router = require("./route/route");
app.use(cors());
app.use(express.json());

app.use("/",router)
const PORT = 3000;
dbConfig();
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})