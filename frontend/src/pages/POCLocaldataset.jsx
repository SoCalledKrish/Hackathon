import { Box, Typography, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Card, MenuItem } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer
import backgroundImage from "../assets/Ellucian1.png"; // Dashboard background

const LocalDataset = () => {
  const [selectedFields, setSelectedFields] = useState([]);
  const [targetVariable, setTargetVariable] = useState("");

  // Dummy dataset fields
  const datasetFields = ["Field 1", "Field 2", "Field 3", "Field 4", "Field 5", "Field 6"];

  const handleCheckboxChange = (field) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
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
      }}
    >
      {/* Dark Overlay */}
      <Box sx={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />

      {/* Navbar */}
      <Navbar />

      {/* Content Container */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
        <Paper
          elevation={6}
          sx={{
            position: "relative",
            maxWidth: "900px",
            mx: "auto",
            p: 5,
            background: "rgba(80, 45, 85, 0.95)", // Darker background
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* Heading */}
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
            Select Variables for Training
          </Typography>

          {/* Description */}
          <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: "1.6", fontWeight: "500" }}>
            Choose independent variables and a target variable from your dataset to begin training.
          </Typography>

          {/* Independent Variables (Displayed Horizontally in Cards) */}
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Select Independent Variables
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            {datasetFields.map((field) => (
              <Grid item key={field}>
                <Card
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderRadius: "10px",
                    cursor: "pointer",
                    minWidth: "140px",
                    boxShadow: selectedFields.includes(field) ? "0px 5px 15px rgba(106, 27, 118, 0.6)" : "0px 2px 5px rgba(0,0,0,0.3)",
                    background: selectedFields.includes(field) ? "linear-gradient(135deg, #5a1563 30%, #8c1d94 100%)" : "rgba(255,255,255,0.08)",
                    color: selectedFields.includes(field) ? "#fff" : "#ddd",
                    transition: "0.3s ease",
                    "&:hover": { transform: "scale(1.05)", boxShadow: "0px 5px 15px rgba(106, 27, 118, 0.6)" },
                  }}
                  onClick={() => handleCheckboxChange(field)}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: selectedFields.includes(field) ? "#fff" : "#bbb",
                          "&.Mui-checked": { color: "#fff" },
                          transform: "scale(1.3)", // Bigger checkbox
                        }}
                        checked={selectedFields.includes(field)}
                        onChange={() => handleCheckboxChange(field)}
                      />
                    }
                    label={<Typography sx={{ fontSize: "1rem", fontWeight: "500" }}>{field}</Typography>}
                    sx={{ width: "100%", justifyContent: "center" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Space to Differentiate Independent Variables & Target Variable */}
          <Box sx={{ height: "20px" }} />

          {/* Target Variable (Dropdown Selection) */}
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Select Target Variable
          </Typography>
          <TextField
            select
            fullWidth
            variant="filled"
            label="Target Variable"
            value={targetVariable}
            onChange={(e) => setTargetVariable(e.target.value)}
            sx={{
              mb: 3,
              bgcolor: "rgba(255,255,255,0.12)", // Darker dropdown
              borderRadius: "10px",
              "& label": { color: "#ccc", fontWeight: "bold" },
              "& .MuiInputBase-root": {
                color: "#fff",
                "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
              },
              "& .MuiSelect-icon": { color: "#fff" },
            }}
          >
            {datasetFields.map((field) => (
              <MenuItem
                key={field}
                value={field}
                sx={{
                  color: "#fff",
                  background: "rgba(50, 25, 60, 0.9)",
                  "&:hover": { background: "#6a1b76" },
                }}
              >
                {field}
              </MenuItem>
            ))}
          </TextField>

          {/* Start Training Button */}
          <Button
            variant="contained"
            sx={{
              mt: 5,
              width: "80%",
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "25px",
              padding: "12px 0",
              background: "linear-gradient(90deg, #5a1563, #8c1d94)",
              transition: "0.3s ease",
              "&:hover": { background: "linear-gradient(90deg, #4a124f, #791b85)", transform: "scale(1.05)" },
            }}
          >
            Start Training
          </Button>
        </Paper>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LocalDataset;
