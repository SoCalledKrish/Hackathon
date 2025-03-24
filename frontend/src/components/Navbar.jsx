// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#6a1b76", padding: "23px" }}>
//       <Toolbar>
//         {/* Ellucian Logo */}
//         <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "2rem" }}>
//           Ellucian Elluvate
//         </Typography>

//         {/* Logout Button */}
//         <Button variant="contained" color="error" sx={{ marginLeft: "10px", borderRadius: "20px" }} startIcon={<LogoutIcon />}>
//           Logout
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;



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
