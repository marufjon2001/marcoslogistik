import { Box, Typography } from '@mui/material';
import Navbarwhite from "../Navbar/Navbarwhite/Navbarwhite"
import img from "../images/Otslejevaniy/img.png"
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';
import "./main.css"

const Otslejevaniy = () => {    
    return (
        <Box sx={{backgroundColor: '#FCFCFD',width: '100%',height: '100%'}}>
            <Navbarwhite/>
            <img style={{width: '100%'}} src={img} alt="" />
            <Box className="posilkuuu">
                <Box sx={{position: 'relative',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
                    <br /><br />
                <input type="search"placeholder='Введите трек-код' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '16px',color: ' #72777A',width: '270px',height: '40px',paddingLeft: '10px',border: '2px solid black'}}/>
           <Box mt={-1}ml={27} sx={{width: '34px',height: '32px',backgroundColor: '#23262F',display: 'flex',justifyContent: 'center',alignItems: 'center',position: 'absolute',color: '#FCFCFD'}}>
           <SearchIcon/>
           </Box><br />
           <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Посылка № NHJ78652365</Typography>
                </Box>
                <Box sx={{display: 'flex',justifyContent: 'center',gap: "4%"}} mt={8}>
                    <Box sx={{backgroundColor: 'white',width: '32%',display: 'flex',justifyContent: 'center',padding: '25px',gap: '50px'}}>
                        <Box>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '40px',color: '#23262F'}}>Данные о посылке</Typography>
                            <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '22px',color: '#72777A'}}>Номер заказа</Typography>
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#23262F'}}>1231313</Typography><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '22px',color: '#72777A'}}>Дата отправки</Typography>
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#23262F'}}>18.11.2021</Typography>
                        </Box>
                        <Box mt={2}>
                            <br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '22px',color: '#72777A'}}>Адрес доставки</Typography>
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#23262F'}}>Казахстан, г. <br /> Кызылорда,<br />
                            Абая 21</Typography><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '22px',color: '#72777A'}}>Тип доставки</Typography>
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#23262F'}}>От двери до двери</Typography>
                        </Box>
                    </Box>
                    <Box sx={{backgroundColor: 'white',width: '20%',padding: '25px'}}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '40px',color: '#23262F'}}>Статус</Typography>
                        <Box>
                            <Box sx={{display: 'flex',gap: '20px'}}>                
                        <Radio
        value="b"
        defaultChecked
        color={'info'}
        inputProps={{ 'aria-label': 'B' }}
      />
      <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#23262F'}}>Заказ подтвержден <br /> <span style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '20px',color: '#72777A'}}>15 нояб. 2021 </span></Typography>
                            </Box><br />
                            <Box sx={{display: 'flex',gap: '20px'}}>                
                        <Radio
        value="b"
        color={'info'}
        inputProps={{ 'aria-label': 'B' }}
      />
      <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#23262F'}}>Заказ подтвержден <br /> <span style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '20px',color: '#72777A'}}>15 нояб. 2021 </span></Typography>
                            </Box><br />
                            <Box sx={{display: 'flex',gap: '20px'}}>                
                        <Radio
        value="b"
        color={'info'}
        inputProps={{ 'aria-label': 'B' }}
      />
      <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#23262F'}}>Заказ отправлен<br /> <span style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '20px',color: '#72777A'}}>18 нояб. 2021 </span></Typography>
                            </Box><br />
                            <Box sx={{display: 'flex',gap: '20px'}}>                
                        <Radio
        value="b"
        color={'info'}
        inputProps={{ 'aria-label': 'B' }}
      />
      <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#23262F'}}>В пункте распределения <br /> <span style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '20px',color: '#72777A'}}>21 нояб. 2021 </span></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <br /><br /><br /><br />
        </Box>
    );
}

export default Otslejevaniy;
