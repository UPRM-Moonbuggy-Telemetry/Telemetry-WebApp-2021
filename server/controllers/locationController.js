const db = require("../../db");
require("dotenv").config();

const addLocationData = async (req, res) => {
  //location Data
  const {latitude, longitude}= req.body.data;
  
  try{
    const newEntry = await db.query
      (
          "INSERT INTO LocationData (latitude, longitude) VALUES ($1, $2) RETURNING *",
          [latitude, longitude]
      );

    res.status(201).json(newEntry.rows[0]);

  } catch (err) {
      console.log(err);
  }
}

const getLocationData = async (req,res) => {
  try {
    const allData= await db.query("SELECT * FROM LocationData");
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


const updateLocationData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM LocationData WHERE data_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteLocationData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM LocationData WHERE data_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addLocationData,
  getLocationData,
  updateLocationData,
  deleteLocationData
}