const express = require('express');
const router = express.Router();

const  strainController = require('../controllers/strainController');

router.post("/dataEntry/stainSensors", strainController.addStrainData);
router.get("/dataEntry/stainSensors", strainController.getStrainData);
router.put("/dataEntry/stainSensors", strainController.updateStrainData);
router.delete("/dataEntry/stainSensors", strainController.deleteStrainData);

module.exports = router;