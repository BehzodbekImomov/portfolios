import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Contact.css";
import Button from "@mui/material/Button";
const Contact = () => {
  return (
    <section id="contact">


    <div className="container contact ">
      <div className="contact-text">
        <h2>contact</h2>
        <span className="line"></span>

        <p>
          I would love to hear about your project and how I can help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="form-group">
        <Box
          className="form-group"
          component="form"
          sx={{ width: 1000, maxWidth: "100%" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="standard-basic"
            label="NAME"
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="EMAIL"
            variant="standard"
          />
          <TextField
            multiline
            rows={8}
            id="standard-multiline-static"
            fullWidth
            label="MESSAGE"
            variant="standard"
          />

          <Button
            className="btn"
            variant="text"
            sx={{
              marginTop: "20px",
              color: "white",
              borderBottom: "2px solid #ccc",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "transparent",
                borderBottom: "2px solid #ccc",
              },
            }}
          >
            SEND MESSAGE
          </Button>
        </Box>
      </div>
      </div>
       </section>
  );
};

export default Contact;
