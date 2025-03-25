
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({ onLogout }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#6a1b76", padding: "23px" }}>
      <Toolbar>
        {/* Ellucian Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "2rem" }}>
          Ellucian Elluvate
        </Typography>

        {/* Logout Button */}
        <Button
          variant="contained"
          color="error"
          sx={{ marginLeft: "10px", borderRadius: "20px" }}
          startIcon={<LogoutIcon />}
          onClick={onLogout} // 🔹 Calls the logout function
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import Logo from "@ellucian/react-design-system/core";

// const Navbar = ({ onLogout }) => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#6a1b76", padding: "15px" }}>
//       <Toolbar>
//         {/* Logo and Title */}
//         <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//           <Box sx={{ height: "40px", width: "150px", display: "flex", alignItems: "center", marginRight: "10px" }}>
//             <Logo logo="preferred" id="Ellucian_Logo" />
//           </Box>
//           <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "2rem" }}>
//             Elluvate
//           </Typography>
//         </Box>

//         {/* Logout Button */}
//         <Button
//           variant="contained"
//           color="error"
//           sx={{ borderRadius: "20px" }}
//           startIcon={<LogoutIcon />}
//           onClick={onLogout}
//         >
//           Logout
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


