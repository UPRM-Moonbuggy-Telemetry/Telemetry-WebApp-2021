const db = require("../db");
require("dotenv").config();


const addHallEffectData = async (req, res) => {
  //Hall Effect Data
  const { sensor_id, rpm } = req.body.data;

  if(rpm !== null) {
      try{
        const newEntry = await db.query
          (
              "INSERT INTO HallEffectData (rpm, data_id) VALUES ($1,$2) RETURNING *",
              [rpm, data_id]
          );
  
        res.status(201).json(newEntry.rows[0]);
    
      } catch (err) {
          console.log(err);
      }
  }
};

const getHallEffectData = async (req,res) => {
  try {
    const allData = await db.query("SELECT * FROM HallEffectData");
    res.status(200).json({
        status: "success",
        results: allUsers.rows.length,
        data: {
            users: allUsers.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateHallEffectData = async (req,res) => {
  try {
    const {rpm} = req.body.data;
    const result = await db.query("UPDATE HallEffectData SET rpm = $1 WHERE halleffect_id = $2 RETURNING *", [rpm, req.params.hid])
    res.status(204).json({
        status: "success",
        data: {
          halleffect: result.rows[0]
        }
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteHallEffectData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM HallEffectData WHERE halleffect_id = $1", [req.params.hid])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    addHallEffectData,
    getHallEffectData,
    updateHallEffectData,
    deleteHallEffectData
}