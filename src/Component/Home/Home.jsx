import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import tranck from "../images/Home/tranck.png"
import xarita from "../images/Xarita/xarita.png"
import moskva from "../images/Xarita/moskva.png"
import moskva1 from "../images/Xarita/moskva1.png"
import App from "../Home/Swiper/App"

const Home = () => {
    return (
        <Box sx={{backgroundColor: '#FFFFFF'}}>
            {/* tanck img */}
           <Box width={'100%'} height={'100%'} position={'relative'}>
            <Box sx={{display: 'flex',justifyContent: 'center'}}>
            <Box position={'absolute'} width={'86%'} mt={12}>
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '35px',lineHeight: '40px',color: '#FFFFFF',}}>Решения для практически <br /> бесконечного числа <br /> потребностей в логистике</Typography>
                <br />
                <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '20px',lineHeight: '28px',color: '#FFFFFF'}}>MarcosLogistics представлена более чем в 20 городах и <br /> территориях России и Узбекистана</Typography>
                <br /><br /><br />
                <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '16px',alignItems: 'center',color: '#23262F',backgroundColor: '#FCFCFD',padding: '12px, 16px, 12px, 16px',height: '40px',width: "130px"}}>Подробнее</Button>
            </Box>
            </Box>
            <img style={{width: '100%',height: '100%'}} src={tranck} alt="" />
           </Box>
           <Box display={'flex'} justifyContent={'center'}mt={15}>
             <Box sx={{backgroundColor: '#FFFFFF',display: 'flex',justifyContent: 'center',alignItems: 'center',padding: '50px'}} width={'93%'}> 
                <Box width={'45%'}>
                    <Typography variant='h6' style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '30px',lineHeight: '38px',color: '#23262F'}}>О нас</Typography>
                    <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '15px',lineHeight: '24px',color: '#72777A',order: '1'}}>Мы - MarcosLogistics, транспортно-экспедиционная <br /> компания, которая перевезет Ваши  грузы в кратчайшие <br /> сроки по принципу «от-двери-до-двери».</Typography>
                    <br /><br />
                    <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '15px',lineHeight: '24px',color: '#72777A',order: '1'}}>Мы поможем Вам развивать бизнес или просто <br /> отправить письмо близкому человеку по доступным <br /> ценам. <br /><br />Мы ценим Ваше время!</Typography>
                </Box>
                <Box width={'61%'} position={'relative'}>
                    <Box mt={5} ml={7} className="Москва" sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',padding: '30px',position: 'absolute'}}>
                     <img src={moskva} alt="" />
                     <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '16px',lineHeight: '30px',color: '#23262F'}}>Москва</Typography>
                     <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '12px',lineHeight: '30px',color: '#777E90'}}>За 7 дней</Typography>
                    </Box>
                    <Box ml={39} mt={25} className="Москва" sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',padding: '30px',position: 'absolute'}}>
                     <img src={moskva1} alt="" />
                     <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '16px',lineHeight: '30px',color: '#23262F'}}>Москва</Typography>
                     <Typography style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '12px',lineHeight: '30px',color: '#777E90'}}>За 7 дней</Typography>
                    </Box>
                    <img width={'100%'} height={'400px'} src={xarita} alt="" />
                </Box>
             </Box>
           </Box>
           <Box>
            <App/>
           </Box>
           
        </Box>
    );
}

export default Home;
