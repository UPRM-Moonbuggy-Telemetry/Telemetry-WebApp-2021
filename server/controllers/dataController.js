const db = require("../../db");
require("dotenv").config();

const enterData = async (req, res) => {
    try {

      //const { username, password, email } = req.body.user;
     
        const newEntry = await db.query
        (
            // "INSERT INTO account (username, password, email, account_validation) VALUES ($1, $2, $3, $4) RETURNING *",
            // [username, hashedPassword, email, 0]
        );

        res.status(201).json(newEntry.rows[0]);
  
    } catch (err) {
        console.log(err);
    }
  };