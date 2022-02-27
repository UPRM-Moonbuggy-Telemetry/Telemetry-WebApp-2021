const express = require('express');
const router = express.Router();

const  strainController = require('../controllers/strainController');

router.post("/dataEntry/stainSensors", strainController.enterData);
router.get("/dataEntry/stainSensors", strainController.getData);
router.put("/dataEntry/stainSensors", strainController.updateData);
router.delete("/dataEntry/stainSensors", strainController.deleteData);

module.exports = router;