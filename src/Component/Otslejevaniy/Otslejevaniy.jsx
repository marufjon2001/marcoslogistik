import { Box, Typography } from '@mui/material';
import Navbarwhite from "../Navbar/Navbarwhite/Navbarwhite"
import img from "../images/Otslejevaniy/img.png"
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Otslejevaniy = () => {
    return (
        <Box sx={{backgroundColor: '#FCFCFD'}}>
            <Navbarwhite/>
            <img src={img} alt="" />
            <Box>
                <Box sx={{position: 'relative',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
                    <br /><br />
                <input type="search"placeholder='Введите трек-код' style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '16px',color: ' #72777A',width: '270px',height: '40px',paddingLeft: '10px'}}/>
           <Box mt={-1}ml={27} sx={{width: '34px',height: '32px',backgroundColor: '#23262F',display: 'flex',justifyContent: 'center',alignItems: 'center',position: 'absolute',color: '#FCFCFD'}}>
           <SearchIcon/>
           </Box><br />
           <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Посылка № NHJ78652365</Typography>
                </Box>
                <Box>
                    <Box sx={{backgroundColor: 'white',width: '30%',display: 'flex',justifyContent: 'center',padding: '25px',gap: '50px'}}>
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
                    <Box sx={{backgroundColor: 'white',}}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '40px',color: '#23262F'}}>Статус</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Otslejevaniy;
