const express = require('express');
const router = express.Router();

const  dataController = require('../controllers/dataController');
router.post("/dataEntry", dataController.enterData);

module.exports = router;