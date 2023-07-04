import Posilku1 from "../../images/Posilku/Posilku.svg"
import medal from "../../images/Posilku/medal.svg"
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const Posilku = () => {
    const [text, setext] = useState([
        {
          numer: "01",
          text:"Автомобил",
          activee: true,
        },
        {
          numer: "02",
          text:" Товары",
          activee: false,
        },
       
      ]);
    let menuitem = (item) => {
        setext(() => {
          return text.map((sonItem) => {
            if (sonItem.numer === item.numer) {
              sonItem.activee = true;
            } else {
              sonItem.activee = false;
            }
            return sonItem;
          });
        });
      };
    return (
        <Box>
            <img style={{width: '100%'}} src={Posilku1} alt="" />
            <Box sx={{display: 'flex',justifyContent: 'center'}} mt={5}>
                <Box sx={{width: '85%'}}>
                    <Typography variant='p' style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Тип посылки</Typography>
                    <br /><br />
                    <Box sx={{display: 'flex',gap: '20px'}}>
                        {
                            text.map((item)=>(
                                <Button onClick={() => menuitem(item)} style={item.activee ?{fontFamily: 'Inter',fontWeight: '700',fontSize: '12px',lineHeight: '16px',color: 'white',padding: '12px, 16px, 12px, 16px',backgroundColor: '#23262F',height: '40px',width: '200px'}:
                                {fontFamily: 'Inter',fontWeight: '700',fontSize: '12px',lineHeight: '16px',color: 'black',padding: '12px, 16px, 12px, 16px',backgroundColor: 'white',height: '40px',width: '200px',border: '2px solid #E6E8EC'}}>{item.text}</Button>
                            ))
                        }
                    </Box>
                    <br></br><br />
                    <Box sx={{position: 'relative'}}>
                    <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Вес и габариты</Typography><br />
                    <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '50px',color: '#979C9E'}}>Вес(кг)</Typography>
                    <img style={{position: "absolute",padding: '8px 5px'}} src={medal} alt="" />
                    <input  style={{width: '350px',height: '40px',paddingLeft: '30px',border: '2.5px solid #E3E5E5'}}/>
                    <br /><br />
                    <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '50px',color: '#979C9E'}}>Заполните данные о посылке</Typography>
                    <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#979C9E'}}>Заполните данные </Typography>
                    <br /><br />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Posilku;
