const express = require('express');
const router = express.Router();

const  strainController = require('../controllers/strainController');

router.post("/dataEntry/strainSensors", strainController.addStrainData);
router.get("/dataEntry/strainSensors", strainController.getStrainData);
router.put("/dataEntry/strainSensors", strainController.updateStrainData);
router.delete("/dataEntry/strainSensors", strainController.deleteStrainData);

module.exports = router;