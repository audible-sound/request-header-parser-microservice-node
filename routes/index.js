const ApiController = require("../controllers/api");
const express = require("express");
const router = express.Router();

router.get("/api/whoami", ApiController.getData);

module.exports = router;