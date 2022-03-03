const db = require("../db");
require("dotenv").config();


const addStrainData = async (req, res) => {
  // Strain Data
  const {
    sensor_id,
    strain_center_front_1, strain_center_front_2, strain_center_front_3,
    strain_center_back_1, strain_center_back_2, strain_center_back_3,
    strain_backseat_1, strain_backseat_2, strain_backseat_3,
    shear_strain_1, shear_strain_2, shear_strain_3 
    } = req.body.data;

  //Battery Data Entry 
  if(strain_center_front_1 && strain_center_front_2 && strain_center_front_3 &&
    strain_center_back_1 && strain_center_back_2 && strain_center_back_3 &&
    strain_backseat_1 && strain_backseat_2 && strain_backseat_3&&
    shear_strain_1 && shear_strain_2 && shear_strain_3  !== null) {
      try{
        const newEntry = await db.query
          (
              // "INSERT INTO account (username, password, email, account_validation) VALUES ($1, $2, $3, $4) RETURNING *",
              // [username, hashedPassword, email, 0]
          );
  
        res.status(201).json(newEntry.rows[0]);
    
      } catch (err) {
          console.log(err);
      }
  }
}

const getStrainData = async (req,res) => {
  try {
    const allUsers = await db.query("SELECT * FROM users");
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


const updateStrainData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM user_schedule WHERE user_id = $1", [req.params.id])
    res.status(204).json({
        status: "success",
    });
  } catch (err) {
      console.log(err);
  }
}

const deleteStrainData = async (req,res) => {
  try {
    const result = await db.query("DELETE FROM user_schedule WHERE user_id = $1", [req.params.id])
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