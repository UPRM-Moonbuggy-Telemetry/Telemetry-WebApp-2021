const db = require("../db");
require("dotenv").config();


const addSensorData = async (req, res) => {
  //Hall Effect Data
  const {data_id} = req.body.data;

  try{
    const newEntry = await db.query
      (
          "INSERT INTO sensorData (data_id) VALUES ($1) RETURNING *",
          [data_id]
      );

    // res.status(201).json(newEntry.rows[0]);
    return newEntry.rows[0];

  } catch (err) {
      console.log(err);
  }
}


const getSensorData = async (req,res) => {
  try {
    const allSensorData = await db.query("SELECT * FROM sensorData");
    res.status(200).json({
        status: "success",
        results: allSensorData.rows.length,
        data: {
            sensorData: allSensorData.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateSensorData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM sensorData WHERE user_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteSensorData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM sensorData WHERE user_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    addSensorData,
    getSensorData,
    updateSensorData,
    deleteSensorData
}