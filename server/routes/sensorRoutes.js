const express = require('express');
const router = express.Router();

const  sensorController = require('../controllers/sensorController');

router.post("/dataEntry/sensor", sensorController.enterData);
router.get("/dataEntry/sensor", sensorController.getData);
router.put("/dataEntry/sensor", sensorController.updateData);
router.delete("/dataEntry/sensor", sensorController.deleteData);

module.exports = router;