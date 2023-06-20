import { Box, Button,Fab } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navbar1 from './Navbar1/Navbar1';
import navbar from "../images/Navbar/navbar.svg"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}



function BasicExample() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
     <Navbar1/>
     <Box sx={{backgroundColor: '#23262F'}} width={'100%'} display={'flex'} justifyContent={"center"}>
    <Navbar style={{backgroundColor: '#23262F',width: '100%'}} expand="lg">
      <Container className='navbar'>
        <img style={{height: '40px'}} src={navbar} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{position: 'relative'}} className="me-auto">
           <input type="search"placeholder='Введите трек-код' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '16px',color: ' #72777A',width: '270px',height: '40px',paddingLeft: '10px'}}/>
           <Box ml={28} mt={0.5} sx={{width: '34px',height: '32px',backgroundColor: '#23262F',display: 'flex',justifyContent: 'center',alignItems: 'center',position: 'absolute',color: '#FCFCFD'}}>
           <SearchIcon/>
           </Box>
          </Nav>
          <Box sx={{display: 'flex',gap: '22px'}}>
      <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '10px',lineHeight: '12px',color: '#23262F',width: '138px',backgroundColor: '#FCFCFD',padding: '13px',height: '40px'}}>Оформить заявку</Button>
      <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '10px',lineHeight: '12px',color: '#FCFCFD',width: '138px',backgroundColor: '#23262F',padding: '13px',border: '1px solid #FCFCFD',height: '40px'}}>Калькулятор цен</Button>
{/* ---------------------------modalka----------------------------------------------- */}
      <Fab onClick={handleClickOpen} style={{backgroundColor: '#F2F4F5',flex: 'none',order: '0',flexGrow: '0',width: '40px',height: '40px',boxShadow: 'none'}} color="primary" aria-label="add">
      <Person2OutlinedIcon style={{color: '#23262F'}}/>
        </Fab>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        </BootstrapDialogTitle>
       <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',padding: '35px 15px'}}>
        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '30px',lineHeight: '30px',color: '#23262F'}}>Вход в кабинет </Typography>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '30px',color: '#72777A'}}>Введите логин и пароль для входа </Typography>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '30px',color: '#72777A'}}> в личный кабинет</Typography>
        <input type="email" placeholder='Введите E-mail' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}} />
        <br />
        <input type="password" placeholder='Введите пароль' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}} />
      <br />
        <Button  style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '16px',lineHeight: '16px',color: 'white',height: '40px',width: '69.5%',backgroundColor: '#EA412B',padding: '20px'}}>Войти</Button>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '40px',color: '#23262F'}}>Еще не зарегистрированы? <span style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#CB0E16',cursor: 'pointer'}}>Зарегистрироваться</span></Typography>
       </Box>
      </BootstrapDialog>    
{/* --------------------------------------------------------------modalka---------------------------------- */}
          </Box>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </Box>
    </Box>
  );
}

export default BasicExample;