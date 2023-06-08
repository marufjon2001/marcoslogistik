import { Box, Button, Fab } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Navbar1 from "./Navbar1/Navbar1";
import navbar from "../images/Navbar/navbar.svg";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchIcon from "@mui/icons-material/Search";

function BasicExample() {
  return (
    <Box>
      <Navbar1 />
      <Box
        sx={{ backgroundColor: "#23262F" }}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Navbar
          style={{ backgroundColor: "#23262F", width: "100%" }}
          expand="lg"
        >
          <Container className="navbar">
            <img style={{ height: "40px" }} src={navbar} alt="" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{ position: "relative" }} className="me-auto">
                <input
                  type="search"
                  placeholder="Введите трек-код"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: " #72777A",
                    width: "270px",
                    height: "40px",
                    paddingLeft: "10px",
                  }}
                />
                <Box
                  ml={28}
                  mt={0.5}
                  sx={{
                    width: "34px",
                    height: "32px",
                    backgroundColor: "#23262F",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    color: "#FCFCFD",
                  }}
                >
                  <SearchIcon />
                </Box>
              </Nav>
              <Box sx={{ display: "flex", gap: "22px" }}>
                <Button
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "700",
                    fontSize: "10px",
                    lineHeight: "12px",
                    color: "#23262F",
                    width: "138px",
                    backgroundColor: "#FCFCFD",
                    padding: "13px",
                    height: "40px",
                  }}
                >
                  Оформить заявку
                </Button>
                <Button
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "700",
                    fontSize: "10px",
                    lineHeight: "12px",
                    color: "#FCFCFD",
                    width: "138px",
                    backgroundColor: "#23262F",
                    padding: "13px",
                    border: "1px solid #FCFCFD",
                    height: "40px",
                  }}
                >
                  Калькулятор цен
                </Button>
                <Fab
                  style={{
                    backgroundColor: "#F2F4F5",
                    flex: "none",
                    order: "0",
                    flexGrow: "0",
                    width: "40px",
                    height: "40px",
                    boxShadow: "none",
                  }}
                  color="primary"
                  aria-label="add"
                >
                  <Person2OutlinedIcon style={{ color: "#23262F" }} />
                </Fab>
              </Box>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Box>
    </Box>
  );
}

export default BasicExample;
