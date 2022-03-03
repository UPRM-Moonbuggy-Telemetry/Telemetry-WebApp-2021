const db = require("../db");
require("dotenv").config();


const addBatteryData = async (req, res) => {
  //Battery Data
  const {data_id, battery_percentage} = req.body.data;

  //Battery Data Entry 
  if(battery_percentage !== null) {
      try{
        const newEntry = await db.query
          (
              "INSERT INTO BatteryData (battery_percentage, data_id) VALUES ($1,$2) RETURNING *",
              [battery_percentage,data_id]
          );
  
        // res.status(201).json(newEntry.rows[0]);
        return newEntry.rows[0];
    
      } catch (err) {
          console.log(err);
      }
  }
}

const getBatteryData = async (req,res) => {
  try {
    const allBatteryData= await db.query("SELECT * FROM BatteryData");
    res.status(200).json({
        status: "success",
        results: allBatteryData.rows.length,
        data: {
            battery: allBatteryData.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateBatteryData = async (req,res) => {
  try {
    const {battery_percentage} = req.body.data;
    const result = await db.query("UPDATE BatteryData SET battery_percentage = $1 WHERE battery_id = $2", [battery_percentage, req.params.bid])
    res.status(204).json({
        status: "success",
        data: {
          battery: result.rows[0]
        }
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteBatteryData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM BatteryData WHERE battery_id = $1", [req.params.bid])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addBatteryData,
  getBatteryData,
  updateBatteryData,
  deleteBatteryData
}