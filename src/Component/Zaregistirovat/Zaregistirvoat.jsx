import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Box,Typography } from '@mui/material';
const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
     
      <Modal
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
      </Modal>
      <br />
      <br />
      <Typography type="primary" onClick={() => setModal2Open(true)}>
        Vertically
      </Typography>
      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',padding: '35px 35px'}}>
        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '30px',lineHeight: '30px',color: '#23262F'}}>Зарегистрироватся</Typography>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '30px',color: '#72777A'}}>Заполните данные необходимые для </Typography>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '30px',color: '#72777A'}}> регистрации</Typography>
        <input type="email" placeholder='Ваше ФИО' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}} />
        <br />
        <input type="password" placeholder='Ваше E-mail' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}} />
      <br />
        <Button style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '16px',lineHeight: '16px',color: 'white',height: '40px',width: '69.5%',backgroundColor: '#EA412B',padding: '20px'}}>Войти</Button>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '40px',color: '#23262F'}}>Еще не зарегистрированы? <span style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#CB0E16',cursor: 'pointer'}}>Зарегистрироваться</span></Typography>
       </Box>
      </Modal>
    </>
  );
};
export default App;