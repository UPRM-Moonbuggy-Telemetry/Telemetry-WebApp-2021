const express = require('express');
const router = express.Router();

const  batteryController = require('../controllers/batteryController');

router.post("/dataEntry/battery", batteryController.enterData);
router.get("/dataEntry/battery", batteryController.getData);
router.put("/dataEntry/battery", batteryController.updateData);
router.delete("/dataEntry/battery", batteryController.deleteData);

module.exports = router;