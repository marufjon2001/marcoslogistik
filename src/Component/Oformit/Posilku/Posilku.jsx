import Posilku1 from "../../images/Posilku/Posilku.svg"
import medal from "../../images/Posilku/medal.svg"
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Select } from 'antd';
const options = [];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

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
      const [active,setactive] = useState(false)
      const [active2,setactive2] = useState(false)
      
      
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
                    <Typography style={active ? {fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '50px',color: "black",cursor: 'pointer'}: {fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '50px',color: '#979C9E',cursor: 'pointer'}} onClick={()=>setactive(true)}>Заполните данные о посылке</Typography>
                    <Typography style={active2 ? {fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '50px',color: "black",cursor: 'pointer'}: {fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '50px',color: '#979C9E',cursor: 'pointer'}} onClick={()=>setactive2(true)}>Заполните данные </Typography>
                    <br />
                    <Box>
                {/* ------------------    Заполните данные------------------------------  */}
                       {
                        active2 ? <Box sx={{width: '100%',display: 'flex',flexWrap: 'wrap'}}>
                        <Box sx={{width: '50%'}}>
                         <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Телефон отправителя</Typography>
                         <input type="number"  placeholder="Номер телефона" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Имя получателя</Typography>
                         <input  placeholder="Введите имя отправителя" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Комментарии и пожелания</Typography>
                        </Box>
                        <Box sx={{width: '50%'}}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Адрес получателя</Typography>
                          <input type="number" placeholder="Номер телефона" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Телефон получателя</Typography>
                         <input type="number" placeholder="Номер телефона" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        </Box>
                       </Box>
                       : ""
                       }
                    </Box>
            {/* --------------------------- Заполните данные о посылке--------------- */}
                    {
                      active ? 
                    <Box sx={{width: '100%',display: 'flex',flexWrap: 'wrap'}}>
                        <Box sx={{width: '50%'}}>
                         <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Город отправителя</Typography>
                         <Select
                         placeholder='Ташкент'
                          mode="tags"
                          style={{
                            width: '85%',
                            height: '40px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                           
                          }}
                          onChange={handleChange}
                          tokenSeparators={[',']}
                          options={options}
                        />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Адрес отправителя</Typography>
                         <input  placeholder="Алишер Навои 12" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Почтовый индекс отправителя</Typography>
                         <input  placeholder="100011" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Выберите дату отправки</Typography>
                        <input type="datetime-local" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        </Box>
                        <Box sx={{width: '50%'}}>
                         <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Город получателя</Typography>
                         <Select
                         placeholder='Москва'
                          mode="tags"
                          style={{
                            width: '85%',
                            height: '40px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                           
                          }}
                          onChange={handleChange}
                          tokenSeparators={[',']}
                          options={options}
                        />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Адрес получателя</Typography>
                         <input  placeholder="Тверская ел 12" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '40px',color: '#979C9E'}}>Почтовый индекс получателя</Typography>
                         <input  placeholder="125009" style={{
                            width: '85%',
                            height: '30px',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '16px',
                            borderRadius: "4px",
                            borderColor: '#E3E5E5',
                            paddingLeft: '10px'
                           
                          }}/>
                        </Box>
                       </Box>

                      :""
                    }
                      </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Posilku;
