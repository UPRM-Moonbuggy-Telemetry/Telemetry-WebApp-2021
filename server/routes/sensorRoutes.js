const express = require('express');
const router = express.Router();

const  sensorController = require('../controllers/sensorController');

router.post("/dataEntry/sensor", sensorController.addSensorData);
router.get("/dataEntry/sensor", sensorController.getSensorData);
router.put("/dataEntry/sensor", sensorController.updateSensorData);
router.delete("/dataEntry/sensor", sensorController.deleteSensorData);

module.exports = router;