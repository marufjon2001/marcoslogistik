import { Box, Typography } from "@mui/material";
import React from "react";
import navbar from "../images/Navbar/navbar.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#23262F", width: "100%" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", padding: "60px 0px" }}
      >
        <Box
          sx={{
            width: "86%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img src={navbar} alt="" />
            <br />
            <br />
            <Box display={"flex"}>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Copyright ©
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {" "}
                Все права защищены
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "10px", justifyContent: "end" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100086490766152&mibextid=ZbWKwL"
                target="_blank"
              >
                {" "}
                <FacebookOutlinedIcon
                  style={{ color: "white", fontSize: "35px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086490766152&mibextid=ZbWKwL"
                target="_blank"
              >
                {" "}
                <InstagramIcon style={{ color: "white", fontSize: "35px" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086490766152&mibextid=ZbWKwL"
                target="_blank"
              >
                {" "}
                <TelegramIcon style={{ color: "white", fontSize: "35px" }} />
              </a>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0.5%",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Documentation
              </Typography>
              <hr style={{ color: "white", width: "16px", rotate: "90deg" }} />
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0.5%",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                About Us
              </Typography>
              <hr style={{ color: "white", width: "16px", rotate: "90deg" }} />
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0.5%",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Pricing
              </Typography>
              <hr style={{ color: "white", width: "16px", rotate: "90deg" }} />
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0.5%",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                FAQ
              </Typography>
              <hr style={{ color: "white", width: "16px", rotate: "90deg" }} />
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0.5%",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Support
              </Typography>
              <hr style={{ color: "white", width: "16px", rotate: "90deg" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
