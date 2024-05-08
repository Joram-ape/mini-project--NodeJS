const express = require("express");
const cors = require("cors");
const conn = require("./config/database");
const userRoutes = require("./routes/usersRoutes");

const app = express();
const port = 3001;

// db connection
conn.connect((err) => {
    if (err) {
        console.error(`error to connect: ${err}`);
    } else {
        console.log("successfully connected to mysql");
    }
})

// create middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main url
app.use("/users", userRoutes);

app.listen(port, () => console.log(`API is now online on port: ${port}`));