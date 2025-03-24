// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Typography, Card, CardContent, Modal, Backdrop, Fade, TextField, Button } from "@mui/material";
// import Navbar from "../components/Navbar";
// import backgroundImage from "../assets/Ellucian1.png";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const featureCards = [
//     { title: "Create Chatbot", description: "Build AI-powered chatbots for automation and customer support.", isFunctional: true },
//     { title: "NLP Classifier", description: "Classify and analyze text data with Natural Language Processing." },
//     { title: "Analytical Model", description: "Use data-driven models to gain insights and predictions." },
//     { title: "LLM Models", description: "Leverage Large Language Models for advanced AI capabilities." },
//   ];

//   const [modalOpen, setModalOpen] = useState(false);
//   const [chatbotName, setChatbotName] = useState("");
//   const [chatbotDescription, setChatbotDescription] = useState("");

//   const handleOpenModal = () => setModalOpen(true);
//   const handleCloseModal = () => setModalOpen(false);
//   const handleNext = () => navigate("/datasource");
  

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Box sx={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
//       <Navbar />

//       <Box sx={{ position: "relative", p: 3, mt: 5, mx: "auto", width: "90%", maxWidth: "1200px", textAlign: "center" }}>
//         <Typography variant="h3" sx={{ mb: 5, color: "#fff", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}>
//           Your AI Custom Application
//         </Typography>

//         <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 4, justifyContent: "center", mt: 4 }}>
//           {featureCards.map((card, index) => (
//             <Card
//               key={index}
//               sx={{
//                 p: 4,
//                 height: "250px",
//                 background: "linear-gradient(135deg, #6a1b76 30%, #a72fbf 100%)",
//                 color: "#fff",
//                 borderRadius: "20px",
//                 boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
//                 transition: "transform 0.3s",
//                 "&:hover": { transform: "scale(1.07)", boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.4)" },
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 cursor: card.isFunctional ? "pointer" : "default",
//               }}
//               onClick={card.isFunctional ? handleOpenModal : null}
//             >
//               <CardContent>
//                 <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
//                   {card.title}
//                 </Typography>
//                 <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
//                   {card.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       </Box>

//       {/* Chatbot Modal */}
//       <Modal open={modalOpen} onClose={handleCloseModal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
//         <Fade in={modalOpen}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "60%",
//               maxWidth: "600px",
//               bgcolor: "rgba(103, 60, 108, 0.9)",
//               border: "2px solid rgba(255, 255, 255, 0.2)",
//               borderRadius: "20px",
//               boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
//               p: 5,
//               textAlign: "center",
//               color: "#fff",
//               backdropFilter: "blur(20px)",
//             }}
//           >
//             <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
//               Create Your Chatbot
//             </Typography>

//             <TextField fullWidth variant="filled" label="Chatbot Name" value={chatbotName} onChange={(e) => setChatbotName(e.target.value)} sx={{ mb: 3, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& input": { color: "#fff" } }} />

//             <TextField fullWidth variant="filled" label="Description" multiline rows={3} value={chatbotDescription} onChange={(e) => setChatbotDescription(e.target.value)} sx={{ mb: 3, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& textarea": { color: "#fff" } }} />

//             <Button variant="contained" fullWidth onClick={handleNext} sx={{ mt: 2, p: 1.5, fontSize: "1.2rem", fontWeight: "bold", borderRadius: "10px", background: "linear-gradient(90deg, #6a1b76, #a72fbf)" }}>
//               Next
//             </Button>
//           </Box>
//         </Fade>
//       </Modal>
//     </Box>
//   );
// };

// export default Dashboard;





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, Modal, Backdrop, Fade, TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/Ellucian1.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const featureCards = [
    { title: "Create Chatbot", description: "Build AI-powered chatbots for automation and customer support.", isFunctional: true },
    { title: "NLP Classifier", description: "Classify and analyze text data with Natural Language Processing." },
    { title: "Analytical Model", description: "Use data-driven models to gain insights and predictions." },
    { title: "LLM Models", description: "Leverage Large Language Models for advanced AI capabilities." },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [chatbotName, setChatbotName] = useState("");
  const [chatbotDescription, setChatbotDescription] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleNext = () => navigate("/datasource");

  // 🔹 Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove stored token
    navigate("/"); // Redirect to login page
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
      
      {/* Navbar (Logout button is inside it) */}
      <Navbar onLogout={handleLogout} />

      <Box sx={{ position: "relative", p: 3, mt: 5, mx: "auto", width: "90%", maxWidth: "1200px", textAlign: "center" }}>
        <Typography variant="h3" sx={{ mb: 5, color: "#fff", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}>
          Your AI Custom Application
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 4, justifyContent: "center", mt: 4 }}>
          {featureCards.map((card, index) => (
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
                "&:hover": { transform: "scale(1.07)", boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.4)" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                cursor: card.isFunctional ? "pointer" : "default",
              }}
              onClick={card.isFunctional ? handleOpenModal : null}
            >
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Chatbot Modal */}
      <Modal open={modalOpen} onClose={handleCloseModal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              maxWidth: "600px",
              bgcolor: "rgba(103, 60, 108, 0.9)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
              p: 5,
              textAlign: "center",
              color: "#fff",
              backdropFilter: "blur(20px)",
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              Create Your Chatbot
            </Typography>

            <TextField fullWidth variant="filled" label="Chatbot Name" value={chatbotName} onChange={(e) => setChatbotName(e.target.value)} sx={{ mb: 3, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& input": { color: "#fff" } }} />

            <TextField fullWidth variant="filled" label="Description" multiline rows={3} value={chatbotDescription} onChange={(e) => setChatbotDescription(e.target.value)} sx={{ mb: 3, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "10px", "& label": { color: "#ccc" }, "& textarea": { color: "#fff" } }} />

            <Button variant="contained" fullWidth onClick={handleNext} sx={{ mt: 2, p: 1.5, fontSize: "1.2rem", fontWeight: "bold", borderRadius: "10px", background: "linear-gradient(90deg, #6a1b76, #a72fbf)" }}>
              Next
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Dashboard;




