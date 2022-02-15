const db = require("../../db");
require("dotenv").config();


const addHalleffectData = async (req, res) => {
  //Hall Effect Data
  const {rpm } = req.body.data;

  //Battery Data Entry 
  if(rpm !== null) {
      try{
        const newEntry = await db.query
          (
              "INSERT INTO HallEffectData (rpm) VALUES ($1) RETURNING *",
              [rpm]
          );
  
        res.status(201).json(newEntry.rows[0]);
    
      } catch (err) {
          console.log(err);
      }
  }
};

const getHalleffectData = async (req,res) => {
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


const updateHalleffectData = async (req,res) => {
  try {
    const result = await db.query("UPDATE FROM HallEffectData WHERE halleffect_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteHalleffectData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM HallEffectData WHERE halleffect_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    addHalleffectData,
    getHalleffectData,
    updateHalleffectData,
    deleteHalleffectData
}