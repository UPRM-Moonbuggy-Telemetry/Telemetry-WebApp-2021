const express = require('express');
const router = express.Router();

const  dataController = require('../controllers/dataController');

router.post("/dataEntry", dataController.addData);
router.get("/dataEntry", dataController.getData);
router.put("/dataEntry", dataController.updateData);
router.delete("/dataEntry/:id", dataController.deleteData);

module.exports = router;