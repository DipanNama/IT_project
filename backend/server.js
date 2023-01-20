const app = require("./app");
const dotenv = require("dotenv");
const connetDatabase = require("./config/database");

// config
dotenv.config({path:"backend/config/config.env"});

// Connecting to Database
connetDatabase()

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})