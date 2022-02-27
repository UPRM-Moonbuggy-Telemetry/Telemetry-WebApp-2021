const express = require('express');
const router = express.Router();

const  hallEffectController = require('../controllers/halleffectController');

router.post("/dataEntry/halleffect", hallEffectController.enterData);
router.get("/dataEntry/halleffect", hallEffectController.getData);
router.put("/dataEntry/halleffect", hallEffectController.updateData);
router.delete("/dataEntry/halleffect", hallEffectController.deleteData);

module.exports = router;