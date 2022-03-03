const db = require("../db");
require("dotenv").config();

const addLocationData = async (req, res) => {
  //location Data
  const {data_id, latitude, longitude}= req.body.data;
  
  if(latitude !==null && longitude!==null){
    try{
      const newEntry = await db.query
        (
            "INSERT INTO LocationData (latitude, longitude, data_id) VALUES ($1, $2, $3) RETURNING *",
            [latitude, longitude,data_id]
        );

      // res.status(201).json(newEntry.rows[0]);
      return newEntry.rows[0];

    } catch (err) {
        console.log(err);
    }
  }
}

const getLocationData = async (req,res) => {
  try {
    const allData= await db.query("SELECT * FROM LocationData");
    res.status(200).json({
        status: "success",
        results: allData.rows.length,
        data: {
            location: allData.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateLocationData = async (req,res) => {
  try {
    const {latitude, longitude} = req.body.data;
    const result = await db.query("UPDATE LocationData SET latitude = $1, longitude = $2 WHERE location_id = $3", 
    [latitude, longitude, req.params.lid]
    );

    res.status(204).json({
        status: "success",
        data: {
          location: result.rows[0]
        }
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteLocationData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM LocationData WHERE location_id = $1", [req.params.lid])
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