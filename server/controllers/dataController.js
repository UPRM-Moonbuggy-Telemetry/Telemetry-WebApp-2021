const { append } = require("express/lib/response");
const db = require("../db");
require("dotenv").config();

const  batteryController = require('./batteryController');
const  locationController = require('../controllers/locationController');
const  sensorController = require('../controllers/sensorController');
const  strainController = require('../controllers/strainController');
const  vibrationController = require('../controllers/vibrationController');
const  hallEffectController = require('../controllers/halleffectController');

const addData = async (req, res) => {
  //Rover Data
  const { created_at, updated_at} = req.body.data;

  try{
    const newEntry = await db.query
      (
          "INSERT INTO RoverData (created_at, updated_at) VALUES ($1, $2) RETURNING *",
          [created_at, updated_at]
      );
    
    req.body.data['data_id'] = newEntry.rows[0]['data_id'];
    const battery = await batteryController.addBatteryData(req,res);
    const location = await locationController.addLocationData(req,res);
    const sensor =  await sensorController.addSensorData(req,res);
    req.body.data['sensor_id'] = sensor['sensor_id'];
    const strain = await strainController.addStrainData(req,res);
    const vibration = await vibrationController.addVibrationData(req,res);
    const halleffect = await hallEffectController.addHallEffectData(req,res);
    
    newEntry.rows.push(battery);
    newEntry.rows.push(location);
    newEntry.rows.push(sensor);// I don't think it's necesary
    newEntry.rows.push(strain);
    newEntry.rows.push(vibration);
    newEntry.rows.push(halleffect);

    res.status(201).json(newEntry.rows);

  } catch (err) {
      console.log(err);
  }
}

const getData = async (req,res) => {
  try {
    const allData= await db.query("SELECT * FROM RoverData");
    res.status(200).json({
        status: "success",
        results: allData.rows.length,
        data: {
            users: allData.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateData = async (req,res) => {
  try {
    const result = await db.query("UPDATE FROM RoverData WHERE data_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM RoverData WHERE data_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addData,
  getData,
  updateData,
  deleteData
}