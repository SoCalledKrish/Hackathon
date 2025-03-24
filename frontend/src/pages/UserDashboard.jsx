import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, TextField, Button, Modal, Backdrop, Fade } from "@mui/material";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/Ellucian1.png";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  // 🔹 Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove stored token
    navigate("/"); // Redirect to login page
  };

  // 🔹 Handle modal open/close
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
      
      {/* Navbar (Logout button is inside it) */}
      <Navbar onLogout={handleLogout} />

      <Box sx={{ position: "relative", p: 3, mt: 5, textAlign: "center", width: "100%", maxWidth: "1200px" }}>
        <Typography variant="h3" sx={{ mb: 5, color: "#fff", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}>
          Your AI Custom Application
        </Typography>

        {/* Chatbot Feature Card (Centered) */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Card
            sx={{
              p: 4,
              width: "400px",
              height: "auto",
              background: "linear-gradient(135deg, #6a1b76 30%, #a72fbf 100%)",
              color: "#fff",
              borderRadius: "20px",
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.07)", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
            }}
          >
            <CardContent sx={{ width: "100%" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Chatbot
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Name: AI Chat Assistant
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1rem", mb: 2 }}>
                Description: This chatbot helps automate responses and assist customers efficiently.
              </Typography>

              {/* Form Details Button */}
              <Button
                variant="contained"
                fullWidth
                onClick={handleOpenModal}
                sx={{
                  mt: 2,
                  p: 1.5,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  background: "linear-gradient(90deg, #6a1b76, #a72fbf)",
                }}
              >
                Form Details
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* 🔹 Modal for Form Details */}
      <Modal open={modalOpen} onClose={handleCloseModal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              maxWidth: "500px",
              bgcolor: "rgba(103, 60, 108, 0.9)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
              p: 4,
              textAlign: "center",
              color: "#fff",
              backdropFilter: "blur(20px)",
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              Fill the Details
            </Typography>

            {/* Form Fields */}
            <TextField
              fullWidth
              variant="filled"
              label="Field 1"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& input": { color: "#fff" } }}
            />

            <TextField
              fullWidth
              variant="filled"
              label="Field 2"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& input": { color: "#fff" } }}
            />

            <TextField
              fullWidth
              variant="filled"
              label="Field 3"
              name="field3"
              value={formData.field3}
              onChange={handleChange}
              sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& input": { color: "#fff" } }}
            />

            <TextField
              fullWidth
              variant="filled"
              label="Field 4"
              name="field4"
              value={formData.field4}
              onChange={handleChange}
              sx={{ mb: 3, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& input": { color: "#fff" } }}
            />

            {/* Predict Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                p: 1.5,
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #6a1b76, #a72fbf)",
              }}
            >
              Predict
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default UserDashboard;
