const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const teacherRoute = require("./routes/teachersRoute");




app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/teacher", teacherRoute);

const port = process.env.PORT || 3200;
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));