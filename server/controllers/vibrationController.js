const db = require("../../db");
require("dotenv").config();


const addVibrationData = async (req, res) => {
  // Vibration Data
  const {
    vibration_front_lft,
    vibration_front_rt,
    vibration_rear_lft,
    vibration_rear_rt,
    vibration_center_back
    } = req.body.data;

  //Battery Data Entry 
  if(battery_percentage !== null) {
      try{
        const newEntry = await db.query
          (
            "INSERT INTO VibrationData (vibration_front_lft, vibration_front_rt, vibration_rear_lft,vibration_rear_rt, vibration_center_back) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [ vibration_front_lft,
              vibration_front_rt,
              vibration_rear_lft,
              vibration_rear_rt,
              vibration_center_back
            ]
          );
  
        res.status(201).json(newEntry.rows[0]);
    
      } catch (err) {
          console.log(err);
      }
  }
}

const getVibrationData = async (req,res) => {
  try {
    const allVibrationData = await db.query("SELECT * FROM users");
    res.status(200).json({
        status: "success",
        results: VibrationData.rows.length,
        data: {
            users: VibrationData.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateVibrationData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM user_schedule WHERE vibration_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteVibrationData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM user_schedule WHERE vibration_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    addVibrationData,
    getVibrationData,
    updateVibrationData,
    deleteVibrationData
}