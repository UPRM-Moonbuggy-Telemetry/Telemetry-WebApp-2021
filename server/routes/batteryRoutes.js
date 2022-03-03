const express = require('express');
const router = express.Router();

const  batteryController = require('../controllers/batteryController');

router.post("/dataEntry/battery", batteryController.addBatteryData);
router.get("/dataEntry/battery", batteryController.getBatteryData);
router.put("/dataEntry/battery", batteryController.updateBatteryData);
router.delete("/dataEntry/battery", batteryController.deleteBatteryData);

module.exports = router;