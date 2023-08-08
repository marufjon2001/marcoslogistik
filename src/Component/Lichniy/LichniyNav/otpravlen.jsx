import { Box } from '@mui/material';
import React,{useState} from 'react';
import { Button, Typography} from '@mui/material';
// import Draver from "../Lichniy/Draver/Draver"
import "../main.css"
import lichniy from "../../images/Lichniy/lichniy.png"
import Draver from "../Draver/Draver"



const Otpravlen = () => {
    const[text,settext] = useState(true)
    const[text1,settext1] = useState(false)
  let menuitem = ()=>(
    settext(!text),
    settext1(!text1)
  )
    return (
        <Box>
                   <Box className="istory" sx={{width: '80%',position: 'relative'}}>
                        <Typography className="istory_tex" style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '70px',color: '#23262F'}}>История отправлений</Typography>
                        <Box className="novybtn" sx={{display: 'flex',gap: '10px',flexWrap: 'wrap'}}>
                            <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#EA412B',backgroundColor: '#FFF0F1',height: '40px',border: '2px solid #FFF0F1'}}>Новые (3)</Button><br /><br />
                             <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Номер заказа <img src={lichniy} alt="" /></Typography>
                            </Box>
                               <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>В процессе (10)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Статус<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box className="Navbarwhite">
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>Ожидает оплату (10)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Адрес доставки<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box className="Navbarwhite">
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>Готовы к доставке (20)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Тип доставки<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box className="Navbarwhite">
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>В пути (20)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Дата отправки<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box className="Navbarwhite">
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>Доставлено (20)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Трек-номер<img src={lichniy} alt="" /></Typography>
                            </Box>
                        </Box>
                    <hr className='hr' style={{border: '0.2px solid black',width: '98%'}}/>
                    <Draver/>
                    <br /><br /><br />
                    </Box>
        </Box>
    );
}

export default Otpravlen;
