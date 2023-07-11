import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbarwhite from "../Navbar/Navbarwhite/Navbarwhite"
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import ManageHistorySharpIcon from '@mui/icons-material/ManageHistorySharp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import lichniy from "../images/Lichniy/lichniy.png"
const Lichniy = () => {
    const[text,settext] = useState(false)
    const[text1,settext1] = useState(false)

 let menuitem = ()=>(
    settext(!text),
    settext1(!text1)
 )

   
    return (
        <Box>
            <Navbarwhite/>
            <Box sx={{display: 'flex',gap: '30px'}}mt={5}>
                <Box sx={{width: '17%',display: 'flex',justifyContent: "end"}} >
                    <Box width={'60%'}>
                    <Typography onClick={menuitem} style={text ?{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '80px',color: '#72777A',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}:{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '80px',color: '#23262F',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}}><Person2SharpIcon/>Профиль</Typography>
                    <Typography onClick={menuitem} style={text1 ?{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '16px',color: '#23262F',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}:{color: '#72777A',cursor: 'pointer'}}><ManageHistorySharpIcon/>История <br /> отправлений</Typography>
                    <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '14px',lineHeight: '80px',color: '#EA412B',display: 'flex',alignItems: 'center',gap: '10px',cursor: 'pointer'}}><ExitToAppIcon/>Выйти</Typography>
                    </Box>
                </Box>
                {
                    text ?""
                    :<Box sx={{width: '75%',display:"flex",flexWrap: 'wrap',gap: '20px'}}>
                    <Box sx={{width: '48%',}}mt={2}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Личная информация</Typography><br />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>ФИО</Typography>
                        <input type="text" style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/> <br /><br />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>Номер телефона</Typography>
                        <input type='number' style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/>
                    </Box>
                    <Box sx={{width: '48%'}}mt={9}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>ФИО</Typography>
                        <input type="text" style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/> <br /><br />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>Номер телефона</Typography>
                        <input type='number' style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/>
                    </Box>
                    <hr style={{border: '1px solid black',width: '98%'}}/>
                    <Button style={{fontWeight: '700',fontSize: '15px',lineHeight: '16px',color: 'white',backgroundColor: '#EA412B',height: '40px',width: '21%',padding: '20px'}}>Обновить данные</Button>
                    </Box>
                }
                {
                    text ?<Box sx={{width: '75%',position: 'relative'}}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '70px',color: '#23262F'}}>История отправлений</Typography>
                        <Box sx={{display: 'flex',gap: '12px',flexWrap: 'wrap'}}>
                            <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#EA412B',backgroundColor: '#FFF0F1',height: '40px',border: '2px solid #FFF0F1'}}>Новые (3)</Button><br /><br />
                             <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Номер заказа <img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>В процессе (10)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Статус<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>Ожидает оплату (10)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Адрес доставки<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>Готовы к доставке (20)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Тип доставки<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>В пути (20)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Дата отправки<img src={lichniy} alt="" /></Typography>
                            </Box>
                            <Box>
                            <Button style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '14px',lineHeight: '16px',color: '#23262F',height: '40px',border: '2px solid #E6E8EC'}}>Доставлено (20)</Button><br /><br />
                            <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '12px',lineHeight: '16px',color: '#72777A',display: 'flex',gap: '10px'}}>Трек-номер<img src={lichniy} alt="" /></Typography>
                            </Box>
                        </Box>
                    <hr style={{border: '0.2px solid black',width: '98%'}}/>
                    gfug
                    </Box>
                    :""
                }
            </Box>
        </Box>
    );
}

export default Lichniy;
