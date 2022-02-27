const express = require('express');
const router = express.Router();

const  vibrationController = require('../controllers/vibrationController');

router.post("/dataEntry/vibrationSensors", vibrationController.enterData);
router.get("/dataEntry/vibrationSensors", vibrationController.getData);
router.put("/dataEntry/vibrationSensors", vibrationController.updateData);
router.delete("/dataEntry/vibrationSensors", vibrationController.deleteData);

module.exports = router;