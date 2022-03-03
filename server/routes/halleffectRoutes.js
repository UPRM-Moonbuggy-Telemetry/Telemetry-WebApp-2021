const express = require('express');
const router = express.Router();

const  hallEffectController = require('../controllers/halleffectController');

router.post("/dataEntry/halleffect", hallEffectController.addHallEffectData);
router.get("/dataEntry/halleffect", hallEffectController.getHallEffectData);
router.put("/dataEntry/halleffect", hallEffectController.updateHallEffectData);
router.delete("/dataEntry/halleffect", hallEffectController.deleteHallEffectData);

module.exports = router;