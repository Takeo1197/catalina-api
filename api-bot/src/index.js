const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Define API Routes
const employee = require("./routes/employee.routes");
//const product = require("./routes/product.routes");

//Set API Routes
app.use("/api/employee", employee);
//app.use("/api/product", product);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
