import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Paper, MenuItem } from "@mui/material";
import axios from "axios";
import backgroundImage from "../assets/Ellucian1.png";

const Login = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", formData.role);

    //   alert("Login Successful!");
      if (formData.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/userdashboard");
      }
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <Box
    sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "left 45% center", // Move background slightly left
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: 400,
          borderRadius: "15px",
          textAlign: "center",
          background: "rgba(106, 27, 118, 0.7)", // Transparent purple
          backdropFilter: "blur(5px)", // Glass effect
          color: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
          />

          <TextField
            select
            fullWidth
            label="Role"
            name="role"
            variant="outlined"
            margin="normal"
            value={formData.role}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </TextField>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "25px",
              background: "#fff",
              color: "#6a1b76",
              "&:hover": { background: "#ddd" },
            }}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
