const db = require("../../db");
require("dotenv").config();

const addData = async (req, res) => {
  //Rover Data
  const { created_at, updated_at} = req.body.data;
  
  try{
    const newEntry = await db.query
      (
          "INSERT INTO RoverData (created_at, updated_at) VALUES ($1, $2) RETURNING *",
          [created_at, updated_at]
      );

    res.status(201).json(newEntry.rows[0]);

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