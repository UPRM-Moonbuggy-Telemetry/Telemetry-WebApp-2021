const express = require('express');
const router = express.Router();

const  vibrationController = require('../controllers/vibrationController');

router.post("/dataEntry/vibrationSensors", vibrationController.addVibrationData);
router.get("/dataEntry/vibrationSensors", vibrationController.getVibrationData);
router.put("/dataEntry/vibrationSensors", vibrationController.updateVibrationData);
router.delete("/dataEntry/vibrationSensors", vibrationController.deleteVibrationData);

module.exports = router;