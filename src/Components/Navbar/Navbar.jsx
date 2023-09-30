import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navbartop from "./Navbartop/Navbartop";
import nav from "../../assets/Navbar/nav.svg";
import SearchIcon from "@mui/icons-material/Search";
import Fab from "@mui/material/Fab";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
  

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "37.77vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border:"none"
};

function NavScrollExample({modalOne, handleClose, handleOpen, clickTwo}) {
  const [open, setOpen] = React.useState(false);
  
  // ctrl alt t menu
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOne}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalOne}>
          <Box sx={style}>
            <div className="flex justify-center flex-col items-center text-center">
              <h5 className="text-nav font-Inter text-[2.22vw] font-[700]">
                Вход в кабинет
              </h5>
              <p className="text-[#72777A] font-Inter font-[400] text-[1.66vw] pt-[0.83vw]">
                Введите логин и пароль для входа в личный кабинет
              </p>
              <input
                style={{ border: "2px solid #E3E5E5" }}
                type="text"
                placeholder="Введите E-mail"
                className="font-Inter text-[1.11vw] font-[400] w-[24.44vw] h-[3.33vw] pl-[1vw]"
              />
              <input
                style={{ border: "2px solid #E3E5E5" }}
                type="text"
                placeholder="Введите пароль"
                className="font-Inter text-[1.11vw] font-[400] w-[24.44vw] h-[3.33vw] pl-[1vw] mt-[1vw]"
              />
              <button className="w-[24.44vw] h-[3.33vw] bg-[#EA412B] text-white font-Inter text-[1.11vw] font-[500] mt-[2.22vw]">
                Войти
              </button>
              <h4 className="text-nav font-Inter text-[0.97vw] font-[400] mt-[2.22vw]">
                Еще не зарегистрированы?{" "}
                <span onClick={clickTwo} className="text-[#CB0E16] font-Inter text-[0.97vw] font-[600]">
                  Зарегистрироваться
                </span>
              </h4>
            </div>
          </Box>
        </Fade>
      </Modal>
      <Navbartop />
      <Navbar expand="lg" className="px-[11.11vw] py-[2.77vw] bg-nav flex">
        <Container fluid className="flex items-center gap-[16vw] pb-[1.66vw]">
          <Navbar.Brand className="flex items-center gap-[3.32vw]">
            <div>
              <img className="w-[7.08vw] h-[2.77vw]" src={nav} alt="" />
            </div>
            <div className="relative">
              <div className="w-[2.22vw] h-[2.22vw] bg-nav absolute ml-[16.5vw] mt-[0.4vw] flex items-center justify-center">
                <SearchIcon className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Введите трек-код"
                className="text-[#72777A] font-Inter text-[0.97vw] font-[400] w-[19vw] h-[2.77vw] outline-none px-[1vw]"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="flex gap-[1.66vw]">
              <button className="w-[10.97vw] h-[2.77vw] text-nav font-Inter text-[0.97vw] font-[700] bg-[white]">
                Оформить заявку
              </button>
              <button
                style={{ border: "1px solid white" }}
                className="w-[10.97vw] h-[2.77vw] text-white font-Inter text-[0.97vw] font-[700] bg-nav"
              >
                Калькулятор цен
              </button>
              <Fab
                onClick={handleOpen}
                size="small"
                className="shadow-none w-[2.77vw] h-[2.77vw]"
                aria-label="add"
              >
                <PersonIcon className="text-nav w-[1.66vw] h-[1.66vw]" />
              </Fab>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
