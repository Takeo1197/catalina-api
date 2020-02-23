const express = require("express");
const router = express.Router();
const employee = require("../controllers/employee.controller");

router.get("/", employee.findAll);
//router.get("/:id", employee.findOne);

module.exports = router;
