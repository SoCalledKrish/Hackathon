import { Box, Typography } from "@mui/material";
import logo from "../assets/ellucianLogo.jpg"; // Adjust the path if necessary

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#6a1b76",
        color: "white",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Logo */}
      <img src={logo} alt="Ellucian Logo" style={{ height: "40px", marginRight: "10px" }} />

      {/* Footer Text */}
      <Typography variant="body1">
        © {new Date().getFullYear()} Ellucian Elluvate. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
