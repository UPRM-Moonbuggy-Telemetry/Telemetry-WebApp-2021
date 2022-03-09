const db = require("../db");
require("dotenv").config();


const addStrainData = async (req, res) => {
  // Strain Data
  const {
    data_id, strain_upper_aarm_left, strain_upper_aarm_right,strain_swing_arm_left,
    strain_swing_arm_right, strain_collapsion_front, strain_collapsion_back, strain_p_modified
    } = req.body.data;

  if(data_id && strain_upper_aarm_left && strain_upper_aarm_right && strain_swing_arm_left &&
    strain_swing_arm_right && strain_collapsion_front && strain_collapsion_back && strain_p_modified) {
      try{
        const newEntry = await db.query
          (
              "INSERT INTO account ( strain_upper_aarm_left, strain_upper_aarm_right, strain_swing_arm_left,strain_swing_arm_right, strain_collapsion_front, strain_collapsion_back, strain_p_modified, data_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
              [strain_upper_aarm_left, strain_upper_aarm_right,strain_swing_arm_left, strain_swing_arm_right,
              strain_collapsion_front, strain_collapsion_back, strain_p_modified, data_id]
          );
  
        //res.status(201).json(newEntry.rows[0]);
        return newEntry.rows[0]
    
      } catch (err) {
          console.log(err);
      }
  }
}

const getStrainData = async (req,res) => {
  try {
    const results = await db.query("SELECT * FROM strainData");
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            strain: results.rows
        },
    });
  } catch (err) {
      console.log(err);
  }
}


const updateStrainData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM strainData WHERE strain_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteStrainData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM strainData WHERE strain_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    addStrainData,
    getStrainData,
    updateStrainData,
    deleteStrainData
}