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
  if(vibration_front_lft !== null && vibration_front_rt !== null 
    && vibration_rear_lft !== null && vibration_rear_rt !== null 
    && vibration_center_back !== null) {
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
    const allVibrationData = await db.query("SELECT * FROM VibrationData");
    res.status(200).json({
        status: "success",
        results: allVibrationData.rows.length,
        data: {
            vibration: allVibrationData.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateVibrationData = async (req,res) => {
  try {
    const {
      vibration_front_lft,
      vibration_front_rt,
      vibration_rear_lft,
      vibration_rear_rt,
      vibration_center_back
      } = req.body.data;
    
    const result = await db.query("UPDATE VibrationData SET vibration_front_lft = $1, vibration_front_rt = $2, vibration_rear_lft = $3, vibration_rear_rt = $4, vibration_center_back = $5 WHERE vibration_id = $=6", 
                          [vibration_front_lft, vibration_front_rt, vibration_rear_lft, vibration_rear_rt, vibration_center_back, req.params.vid])
    res.status(204).json({
        status: "success",
        data: {
          vibration: result.rows[0]
        }
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteVibrationData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM VibrationData WHERE vibration_id = $1", [req.params.vid])
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