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

function NavScrollExample() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ctrl alt t menu
  return (
    <div>
        <button onClick={handleOpen}>click</button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
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
                <span className="text-[#CB0E16] font-Inter text-[0.97vw] font-[600]">
                  Зарегистрироваться
                </span>
              </h4>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default NavScrollExample;
