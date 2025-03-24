const client = require("../config/db");

const findUserByEmail = async (email) => {
  const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);
  console.log("DB Query Result:", result.rows);
  return result.rows[0]; // Return the first user
};

module.exports = { findUserByEmail };
