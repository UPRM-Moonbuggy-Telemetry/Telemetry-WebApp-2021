const express = require('express');
const router = express.Router();

const  locationController = require('../controllers/locationController');

router.post("/dataEntry/battery", locationController.enterData);
router.get("/dataEntry/battery", locationController.getData);
router.put("/dataEntry/battery", locationController.updateData);
router.delete("/dataEntry/battery", locationController.deleteData);

module.exports = router;