const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail } = require("../models/userModel");

const loginUser = async (req, res) => {
  // const { email, password } = req.body;

  // try {
  //   const user = await findUserByEmail(email);
  //   if (!user) return res.status(401).json({ message: "User not found" });

  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  //   const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

  //   res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Server error" });
  // }
  const { email, password } = req.body;

  console.log("🚀 Received login request for:", email, password);

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      console.log("❌ User not found!");
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    console.log("✅ Found user in DB:", user);

    // Debug password comparison
    console.log("🔑 Entered password:", password);
    console.log("🔑 Stored password:", user.password);

    if (user.password !== password) {
      console.log("❌ Incorrect password!");
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    res.json({ message: "Login successful", token: "dummy-token-for-now" });

  } catch (err) {
    console.error("🔥 Error in login:", err);
    res.status(500).json({ message: "Server error" });
  }


};

module.exports = { loginUser };
