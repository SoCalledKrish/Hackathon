import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ModelSelection = ({ open, onClose, onModelSelect }) => {
  const models = ["Chatbot Model", "Automation Workflow"];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          p: 4,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(15px)",
          borderRadius: "15px",
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            mb: 2,
          }}
        >
          Select a Model
        </Typography>

        {models.map((model, index) => (
          <Button
            key={index}
            onClick={() => onModelSelect(model)}
            sx={{
              display: "block",
              width: "100%",
              p: 1.5,
              my: 1,
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "10px",
              transition: "0.3s",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.5)",
              },
            }}
          >
            {model}
          </Button>
        ))}

        <Button
          onClick={onClose}
          sx={{
            mt: 2,
            color: "#fff",
            background: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            fontWeight: "bold",
            borderRadius: "10px",
            transition: "0.3s",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ModelSelection;
