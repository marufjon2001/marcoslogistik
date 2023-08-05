import { Box, Typography } from '@mui/material';
import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Navbarwhite from "../../images/Navbarwhite/Navbarwhite.svg"
import { Link } from 'react-router-dom';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import ManageHistorySharpIcon from '@mui/icons-material/ManageHistorySharp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Lichniylink from "../LichniyNav/Lichniylink"
import Otpravlen from "../LichniyNav/otpravlen"
import "../main.css"



function BasicExample() {
  const[text,settext] = useState(true)
  const[text1,settext1] = useState(false)
let menuitem = ()=>(
  settext(!text),
  settext1(!text1)
)
  return (
    <Box className="Lichninav">
     <Box sx={{backgroundColor: '#FFFFFF',zIndex: '1000'}} width={'100%'} display={'flex'} justifyContent={"center"}>
    <Navbar style={{backgroundColor: '#FFFFFF',width: '100%'}} expand="lg">
      <Container className='navbar'>
        <Link to={"/"}>
        <img style={{height: '40px'}} src={Navbarwhite} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Box sx={{width: '100%'}}>
                    <Typography onClick={menuitem}style={text ?{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '40px',color: '#23262F',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}:{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '40px',color: '#72777A',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}}><Person2SharpIcon/> Профиль</Typography>
                    <Typography onClick={menuitem} style={text1 ?{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '16px',color: '#23262F',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}:{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '16px',color: '#72777A',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}}><ManageHistorySharpIcon/>История отправлений</Typography>
                    <Link style={{textDecoration: 'none'}} to={'/menu/Oplata'}>
                    <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '40px',color: '#EA412B',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}}><ExitToAppIcon/>Выйти</Typography>
                    </Link>
                </Box>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </Box>
     {
      text ?  <Lichniylink/> : ""
     },
     {
      text1 ?  <Otpravlen/> : ""
     }
    </Box>
  );
}

export default BasicExample;