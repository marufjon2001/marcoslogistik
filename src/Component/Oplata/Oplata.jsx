import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import oplata from "../images/Oplata/oplata.png"
import clickimg from "../images/Oplata/click.png"
import payme from "../images/Oplata/payme.png"
import uzum from "../images/Oplata/uzum.png"
import sber from "../images/Oplata/sber.png"
import zakaz from "../images/Oplata/zakaz.png"
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import zayafka from "../images/Zayafka/zayafka.png"
import { Link } from 'react-router-dom';
import "../Oplata/main.css"
import Navbarwhite from "../Navbar/Navbarwhite/Navbarwhite"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  height: "90%",
  bgcolor: 'background.paper',
  padding: '30px 40px',
};
const Oplata = () => {
 const[click,setclikc] = useState([
    {
        rasm: clickimg,
        click: 'Оплата Click '
    },
    {
        rasm: payme,
        click: 'Оплата Payme'
    },
    {
        rasm: uzum,
        click: 'Оплата Uzum'
    },
    {
        rasm: sber,
        click: 'Оплата картой'
    },
    {
        rasm: zakaz,
        click: 'Оплатить заказ позже'
    },
 ])
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

    return (
        <Box>
            <Navbarwhite/>
            <img style={{width: '100%'}} src={oplata} alt="" />
            <Box sx={{display: 'flex',justifyContent: 'center'}}>
            <Box sx={{width: '84%'}} mt={5}>
                <br /><br />
                <Box sx={{display: 'flex',justifyContent: 'center'}}>
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Выберите способ оплаты</Typography>
                </Box>
                {
                    click.map((item,index)=>(
                        <Box  sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
                    <br />
                    <Box className="oplata" onClick={handleOpen} sx={{border: '2px solid #E6E8EC',height: '55px',width: '28.5%',display: 'flex',alignItems: 'center'}}>
                         <img style={{padding: '10px 20px',cursor: 'pointer'}} src={item.rasm} alt="" />
                         <Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '16px',lineHeight: '24px',color: '#23262F',cursor: 'pointer'}}>{item.click}</Typography>
                    </Box>
                </Box>
                    ))
                }
            </Box>
            </Box>
                <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
                     <Typography className='koplate' style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '120px',color: '#23262F'}}
                     >К оплате: 25 390 000 UZS</Typography>
                      <Button className='oplatabtn' style={{ width: '10%',fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight:"16px",color: '#23262F',height: '40px',border: '2px solid #E6E8EC',padding: '20px'}}><Link style={{textDecoration: 'none',color: '#23262F'}} to={"/menu/Tovar"}>Отмена </Link></Button>                  
                </Box>
   {/* ------------------------------------  MOdal   ----------------------------------------- */}
                <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={open}>
          <Box className="zayafkaimg" sx={style}>
           <Box className="zayafkaimg" sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',gap: '10px',padding: '5%',}}>
             <img src={zayafka} alt="" />
             <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Заявка отправлена</Typography>
             <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '18px',lineHeight: '25px',color: '#23262F', textAlign:"center" }}>Вы можете оплатить ваш заказ в любое удобное время <br /> в разделе “Личный кабинет”
             </Typography>
             <Link to={'/menu/Личный кабинет'}>
             <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '20px',color: 'white',height: '40px',backgroundColor: '#CB0E16'}}>Посмотреть статус</Button>
             </Link>
             <Button className='otmenabtn' onClick={()=>handleClose(true)} style={{width: '16.5%', fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '20px',color: 'black',height: '40px',backgroundColor: 'white',border: '2px solid #E6E8EC',}}> Отмена</Button>
           </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
        </Box>
    );
}

export default Oplata;
