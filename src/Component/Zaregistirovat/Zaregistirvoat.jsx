import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Box,Typography } from '@mui/material';
import { useStore } from '../store/store';
import "./main.css"
const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const isFalse=useStore(state=>state.isFalse)
  const increasePopulation = useStore((state) => state.increasePopulation)
  return (
    <>    
      <Modal
        open={modal1Open}
        onOk={() => increasePopulation(false)}
        onCancel={() => increasePopulation(false)}
      >
      </Modal>
      <br />
      <br />
      <Modal
        centered
        open={isFalse}
        onOk={() => increasePopulation(false)}
        onCancel={() => increasePopulation(false)}
      >
        <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',padding: '30px 30px'}}>
        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '30px',lineHeight: '32px',color: '#23262F'}}>Зарегистрироватся</Typography>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '20px',color: '#72777A',textAlign: 'center'}}>Заполните данные необходимые для <br /> регистрации</Typography>
        <br />
        <input type="email" placeholder='Ваше ФИО' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}} />
        <br />
        <input type="password" placeholder='Ваше E-mail' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}} />
      <br />
      <input type="text" style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}}  placeholder='Номер телефона' />
      <br />
      <input type="text" style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}}  placeholder='Придумайте пароль' />
      <br />
      <input type="text" style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: '#72777A',padding: '8px',border: '1px solid #E3E5E6'}}  placeholder='Повторите пароль' />
        <br />
        <Button style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '16px',lineHeight: '16px',color: 'white',height: '40px',width: '60%',backgroundColor: '#EA412B'}}>Зарегистрироваться</Button>
        <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '40px',color: '#23262F'}}>Уже зарегистрированы?<span style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#CB0E16',cursor: 'pointer'}}> Войти</span></Typography>
       </Box>
      </Modal>
    </>
  );
};
export default App;