const express = require("express");
const cors = require("cors");
const conn = require("./config/database");
const treasuresRoutes = require("./routers/treasuresRoutes");

const app = express();
const port = 4001;

// db connection
conn.connect((err) => {
  if (err) {
    console.error(`error to connect: ${err}`);
  } else {
    console.log("successfully connected to mysql");
  }
});

//create middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // main url
 app.use("/treasures", treasuresRoutes);
app.listen(port, () => console.log(`API is now online on port: ${port}`));
