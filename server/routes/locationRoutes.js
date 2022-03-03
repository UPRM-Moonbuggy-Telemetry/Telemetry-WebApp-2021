const express = require('express');
const router = express.Router();

const  locationController = require('../controllers/locationController');

router.post("/dataEntry/location", locationController.addLocationData);
router.get("/dataEntry/location", locationController.getLocationData);
router.put("/dataEntry/location", locationController.updateLocationData);
router.delete("/dataEntry/location", locationController.deleteLocationData);

module.exports = router;