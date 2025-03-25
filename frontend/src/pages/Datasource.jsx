import { Box, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/Ellucian1.png";
import Footer from "../components/Footer"; // Import Footer

const DataSource = () => {
  const navigate = useNavigate();

  const dataSources = [
    { title: "Ellucian Banner", description: "Extract data from Ellucian Banner.", path: "/ellucian-banner" },
    { title: "Ellucian Colleague", description: "Extract data from Ellucian Colleague.", path: "/ellucian-colleague" },
    { title: "Ellucian Ethos", description: "Extract data from Ellucian Ethos.", path: "/ellucian-ethos" },
    { title: "POC Local Dataset", description: "Extract data from local datasets.", path: "/local-dataset" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
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

      {/* Main Section */}
      <Box sx={{ flexGrow: 1, position: "relative", p: 3, mt: 5, mx: "auto", width: "90%", maxWidth: "1200px", textAlign: "center" }}>
        {/* Page Title */}
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Extraction of Data
        </Typography>

        {/* Feature Cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 4, justifyContent: "center", mt: 4 }}>
          {dataSources.map((data, index) => (
            <Card
              key={index}
              sx={{
                p: 4,
                height: "250px",
                background: "linear-gradient(135deg, #6a1b76 30%, #a72fbf 100%)",
                color: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.07)", boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.4)", cursor: "pointer" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              onClick={() => handleCardClick(data.path)}
            >
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                  {data.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default DataSource;
