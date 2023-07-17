import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import tranck from "../images/Home/tranck.png";
import xarita from "../images/Xarita/xarita.png";
import moskva from "../images/Xarita/moskva.png";
import moskva1 from "../images/Xarita/moskva1.png";
import App from "../Home/Swiper/App";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import photo from "../images/Home/photo.avif"
import img1 from "../images/Home/img1.jpeg"
import imglar from "../images/Home/imglar.jpg"
import { Carousel } from 'antd';
import RoomIcon from '@mui/icons-material/Room';
import NearMeIcon from '@mui/icons-material/NearMe';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import red from "../images/Home/red.png"
import farrux from "../images/Home/farrux.png"
import djasur from "../images/Home/djasur.png"
import fatima from "../images/Home/fatima.png"
import gps from "../images/Home/gps.png"
import fasebok from "../images/Home/fasebok.png"
import instagram from "../images/Home/instagram.png"
import telegram from "../images/Home/telegram.png"
import "./home.css"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom";

const Home = () => {
  const [text, setext] = useState([
    {
      numer: "01",
      textlar:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio explicabo aperiam inventore",
      textweidth: "Как подготовить посылку",
      activee: false,
    },
    {
      numer: "02",
      textlar:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora aut non quidem rerum fuga. Nulla!",
      textweidth: "Сроки доставки по Узбекистану",
      activee: false,
    },
    {
      numer: "03",
      textlar:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio explicabo aperiam inventore",
      textweidth: "Запрещенные к перевозке посылки",
      activee: false,
    },
    {
      numer: "04",
      textlar:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio explicabo aperiam inventore",
      textweidth: "Ограничения на перевозку",
      activee: false,
    },
  ]);
  const [otpravka, setotpravka] = useState([
    {
      son: 1,
      text: "Отправка",
      active: true,
    },
    {
      son: 2,
      text: "Оплата",
      active: false,
    },
    {
      son: 3,
      text: "Доставка",
      active: false,
    },
  ]);
  const [menejer, setmenejer] = useState([
    {
      img: farrux,
      ism: " Фаррух Болтаев",
      lavozim: 'Директор',
      text: 'Про работу нашей команды',
      malumot: 'Мы единственная компания которая предоставляет услуги на высшем уровне. Наша команда изо дня в день старается улучшать наш сервис. На сегодняшний день MarcosLogistics является лидером в это сегменте'

    },
    {
      img: djasur,
      ism: "Джасур Нургилджанов",
      lavozim: 'Менеджер',
      text: 'Про работу нашей команды',
      malumot: 'Мы единственная компания которая предоставляет услуги на высшем уровне. Наша команда изо дня в день старается улучшать наш сервис. На сегодняшний день MarcosLogistics является лидером в это сегменте'

    },
    {
      img: fatima,
      ism: " Фатима Адиева",
      lavozim: 'Бухгалтер',
      text: 'Про работу нашей команды',
      malumot: 'Мы единственная компания которая предоставляет услуги на высшем уровне. Наша команда изо дня в день старается улучшать наш сервис. На сегодняшний день MarcosLogistics является лидером в это сегменте'

    },
  ])

  let menuitem = (item) => {
    setotpravka(() => {
      return otpravka.map((sonItem) => {
        if (sonItem.son === item.son) {
          sonItem.active = true;
        } else {
          sonItem.active = false;
        }
        return sonItem;
      });
    });
  };
  let menuitemm = (item) => {
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
     <Navbar/>
    <Box sx={{ backgroundColor: "#FFFFFF" }}>
      {/* tanck img */}
      <Box  width={"100%"} height={"100%"} position={"relative"}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box position={"absolute"} width={"86%"} mt={12}>
            <Typography className="text"
              style={{
                fontFamily: "Inter", 
                fontWeight: "700",
                fontSize: "35px",
                lineHeight: "40px",
                color: "#FFFFFF",
              }}
            >
              Решения для практически <br /> бесконечного числа <br />{" "}
              потребностей в логистике
            </Typography>
            <br />
            <Typography className="text_1"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "28px",
                color: "#FFFFFF",
              }}
            >
              MarcosLogistics представлена более чем в 20 городах и <br />{" "}
              территориях России и Узбекистана
            </Typography>
            <br />
            <br />
            <br />
            <Button className="button"
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "16px",
                alignItems: "center",
                color: "#23262F",
                backgroundColor: "#FCFCFD",
                padding: "12px, 16px, 12px, 16px",
                height: "40px",
                width: "130px",
              }}
            >
              Подробнее
            </Button>
          </Box>
        </Box>
        <img  style={{ width: "100%", height: "100%" }} src={tranck} alt="" />
      </Box>
      <Box className="Map" display={"flex"} justifyContent={"center"} mt={15}>
        <Box className="onas_box"
          sx={{
            width: '95%',
            backgroundColor: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <Box className="onastext" width={"45%"}> 
            <Typography className="onass"
              variant="h6"
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "38px",
                color: "#23262F",
              }}
            >
              О нас
            </Typography>
            <Typography
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "24px",
                color: "#72777A",
                order: "1",
              }}
            >
              Мы - MarcosLogistics, транспортно-экспедиционная <br /> компания,
              которая перевезет Ваши грузы в кратчайшие <br /> сроки по принципу
              «от-двери-до-двери».
            </Typography>
            <br />
            <Typography
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "24px",
                color: "#72777A",
                order: "1",
              }}
            >
              Мы поможем Вам развивать бизнес или просто <br /> отправить письмо
              близкому человеку по доступным <br /> ценам.
              Мы ценим Ваше время!
            </Typography>
          </Box>
          <Box className="xarita_box" width={"61%"} position={"relative"}>
            <Box
              mt={5}
              ml={7}
              className="Москва"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "30px",
                position: "absolute",
              }}
            >
              <img  src={moskva} alt="" />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "#23262F",
                }}
              >
                Москва
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "30px",
                  color: "#777E90",
                }}
              >
                За 7 дней
              </Typography>
            </Box>
            <Box
              ml={39}
              mt={25}
              className="Москва_xarita"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "30px",
                position: "absolute",
                backgroundColor: '#FCFCFDD4',
                width:"30%",

              }}
            >
              <img style={{borderRadius: '50px'}} className="imglar" src={moskva1} alt="" />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "#23262F",
                }}
              >
                Москва
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "30px",
                  color: "#777E90",
                }}
              >
                За 7 дней
              </Typography>
            </Box>
            <img className="xarita" width={"100%"} height={"400px"} src={xarita} alt="" />
          </Box>
        </Box>
      </Box>
      <Box>
        <App />
      </Box>

      <Box mt={10} display={"flex"} justifyContent={"center"}>
        <Box>
          <Typography className="Часто"
            style={{
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "38px",
              color: "#23262F",
              cursor: "pointer",
            }}
          >
            Часто задаваемые вопросы
          </Typography>
          <br />
          <br />
          {otpravka.map((item, index) => (
            <Box className="otpravka"  onClick={() => menuitem(item)} sx={{ float: "left" }} ml={5}>
              <Typography className="otpravkabuton"
                style={
                  item.active
                    ? {
                        backgroundColor: "#353945",
                        width: "101px",
                        height: "32px",
                        fontFamily: "Inter",
                        fontWeight: "700",
                        fontSize: "700",
                        lineHeight: "16px",
                        color: "#FFFFFF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }
                    : {
                        width: "101px",
                        height: "32px",
                        fontFamily: "Inter",
                        fontWeight: "700",
                        fontSize: "700",
                        lineHeight: "16px",
                        color: "#72777A",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }
                }
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

       {/*------------------------ collapse----------------------------- */}
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={10}>
        <Box sx={{ width: "50%",}}>
          {text.map((item, index) => (
            <Box>
              <Accordion style={{border: 'none',boxShadow: 'none'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Typography
                    onClick={()=>menuitemm(item)}
                      style={{
                        fontFamily: "Fraunces",
                        fontWeight: "900",
                        fontSize: "20px",
                        lineHeight: "32px",
                        color: `${item.activee ? "#EA412B" : "#83888F"}`,
                      }}
                    >
                      {item.numer}
                    </Typography>
                    <Typography
                    onClick={()=>menuitemm(item)}
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: `${item.activee ? "#333D4B" : "#83888F"}`
                      }}
                    >
                      {item.textweidth}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#72777A",
                    }}
                  >
                    {item.textlar}
                  </Typography>
                  <hr />
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        <br /><br />
        </Box>
      </Box>

      {/*----------------------------- Carusel ------------------------------*/}
      <Box sx={{width: '100%',position: 'relative'}}>
        
        <Box id={'carusel'} sx={{position: 'absolute',zIndex: '10',display: 'flex',justifyContent: 'center',width: '100%'}}>
          <Box display={'flex'}justifyContent={"space-between"} padding={5} alignItems={"end"}width={'90%'}>
            <Box>
             <Typography variant="h5" style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '30px',lineHeight: '40px',color: '#FCFCFD'}}>Скидка 10% </Typography>
             <Typography variant="p" style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '18px',lineHeight: '30px',color: '#FCFCFD'}}>Промокод действут с 20 сентября по 31 декабря</Typography>
            </Box>
            <Box sx={{display: 'flex',justifyContent: 'center',backgroundColor: '#FCFCFD',padding: '35px 10px'}}>
             <Box sx={{width: '90%'}}>
               <Box sx={{display: 'flex',gap: '15px'}}>
                <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '12px',lineHeight: '16px',color: '#23262F',backgroundColor: '#E6E8EC',width: '200px',height: '40px'}}>Автомобил</Button>
                <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '12px',lineHeight: '16px',color: '#FFFFFF',backgroundColor: '#23262F',width: '200px',height: '40px'}}> Товары</Button>
               </Box>
               <br />
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '18px',color: '#23262F',display: 'flex',gap: '10px',alignItems: 'center'}}><RoomIcon style={{color: '#979C9E'}}/> Ташкент</Typography>
                <hr/>
                <Box sx={{display: 'flex',gap: '25px'}}>
                <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#979C9E',textDecoration: 'underline',}}>Фергана  </Typography>
                <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#979C9E',textDecoration: 'underline',}}>Самарканд</Typography>
                <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#979C9E',textDecoration: 'underline',}}>Джизак</Typography>
                </Box><br />
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '18px',color: '#23262F',display: 'flex',gap: '10px',alignItems: 'center'}}><NearMeIcon style={{color: '#979C9E'}}/> Москва</Typography>
                <hr />
                <Box sx={{display: 'flex',gap: '25px'}}>
                <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#979C9E',textDecoration: 'underline',}}> Санкт-Петербург  </Typography>
                <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#979C9E',textDecoration: 'underline',}}>Новосибирск</Typography>
                <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '18px',color: '#979C9E',textDecoration: 'underline',}}>Челябинск</Typography>
                </Box><br />
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '18px',color: '#23262F',display: 'flex',gap: '10px',alignItems: 'center'}}><ZoomInMapIcon style={{color: '#979C9E'}}/> 3405 <span style={{fontSize: '11px',color: '#979C9E'}}>(кг)</span></Typography>
                 <hr />
                 <Box sx={{display: 'flex',gap: '25px'}}>
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '15px',color: '#23262F',display: 'flex',gap: '10px',alignItems: 'center'}}><EventSeatIcon style={{color: '#979C9E'}}/> Высота <span style={{fontSize: '11px',color: '#979C9E'}}>(кг)</span></Typography>
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '15px',color: '#23262F',display: 'flex',gap: '10px',alignItems: 'center'}}>Длина <span style={{fontSize: '11px',color: '#979C9E'}}>(см)</span></Typography>
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '15px',color: '#23262F',display: 'flex',gap: '10px',alignItems: 'center'}}>Ширина <span style={{fontSize: '11px',color: '#979C9E'}}>(см)</span></Typography>
                </Box><br />
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '50px',color: '#979C9E',display: 'flex',gap: '55px',alignItems: 'center',}}> Стоимость доставки<span style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '16px',lineHeight: '18px',color: '#979C9E',display: 'flex',gap: '10px',alignItems: 'center'}}>Дата доставки</span></Typography>
                <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '20px',lineHeight: '20px',color: '#23262F',display: 'flex',gap: '75px',alignItems: 'center'}}>12 500 000 UZS<span style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '20px',lineHeight: '20px',color: '#23262F',display: 'flex',gap: '95px',alignItems: 'center'}}>31.12.2021</span></Typography>
                <br />
             <Button style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '15px',lineHeight: '24px',color: '#FFFFFF',backgroundColor: '#EA412B',width: '370px',height: '40px',padding: '20px'}}><Link style={{textDecoration: 'none',color: 'white'}} to={'/menu/posilku'}> Оформить</Link></Button>
             </Box>
            </Box>
          </Box>
        </Box>

      <Carousel autoplay>
    <Box>
      <img style={{width: '100%',height: '680px'}} src={img1} alt="" />
    </Box>
    <Box>
      <img style={{width: '100%',height: '680px'}} src={photo} alt="" />
    </Box>
    <Box>
      <img style={{width: '100%',height: '680px'}} src={imglar} alt="" />
    </Box>
  </Carousel>
      </Box>
      
      <Box sx={{width: '100%',height: '100%',position: 'relative'}}>
        <img style={{width: '100%',position: 'absolute',zIndex: '1'}} src={red} alt="" />
        <Box sx={{display: 'flex',justifyContent: 'center'}}pt={10}>
          <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '32px',lineHeight: '38px',color: '#23262F'}}>Отзывы от компании</Typography>
        </Box>
        <Box sx={{display: 'flex',justifyContent: 'center'}} mt={10}>
          <Box sx={{width: '86%',display: 'flex',gap: '22px',zIndex: '100',flexWrap: 'wrap'}}>
           {
            menejer.map((item,index)=>(
              <Box sx={{width: '32%',border: ' 2px solid #E3E5E6',backgroundColor: '#FFFFFF',padding: '30px'}}>
              <Box sx={{display: 'flex',alignItems: 'center',gap: '20px'}}>
               <img src={item.img} alt="" />
               <Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '16px',lineHeight: '20px',color: 'black'}}> {item.ism} <br /><span style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '18px',color: '#72777A'}}>{item.lavozim}</span></Typography>
              </Box>
              <br />
              <Box>
                <Box>
                  <Typography style={{fontFamily: 'Inter',fontWeight: '600',fontSize: '16px',lineHeight: '20px',color: '#000000'}}>{item.text}</Typography>
                  <Typography variant="p" style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '14px',lineHeight: '18px',color: '#72777A'}}>{item.malumot}</Typography>
                </Box>
              </Box>
            </Box>
            ))
           }
          </Box>
        </Box>
      </Box>
      <br /><br /><br />
      <Box sx={{display: 'flex',justifyContent: 'center'}} mt={10}>
        <Box sx={{width: '86%',display: 'flex',alignItems: 'center',gap: '150px'}}mb={10}>
           <Box>
            <a href="https://www.google.com/maps/dir/Eman+Group,+5+Djami+Square,+Tashkent+100057,+O%CA%BBzbekiston/Shahriston+ko'chasi,+Tashkent,+O%60zbekiston/@41.3542885,69.2477575,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x38ae8c92267a3301:0x3cb8b146e2b3910e!2m2!1d69.2538121!2d41.3555108!1m5!1m1!1s0x38ae8cae3ab5871f:0x15743fc46216c6e1!2m2!1d69.2772063!2d41.3521537?hl=UZ&entry=ttu" target="_blank"><img src={gps} alt="" /></a>
           </Box>
           <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
            <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '32px',lineHeight: '86px',color: '#23262F'}}>Наши контакты</Typography>
            <a href="" style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '20px',lineHeight: '40px',color: '#182F43',textDecoration: 'none'}}>+998(77)777-46-00</a>
            <a href="" style={{fontFamily: 'Inter',fontWeight: '400',fontSize: '20px',lineHeight: '40px',color: '#182F43',textDecoration: 'none'}}>info@marcos.uz</a>
            <Box sx={{display: 'flex'}}>
              <a href="https://www.facebook.com/profile.php?id=100086490766152&mibextid=ZbWKwL" target="_blank"><img src={fasebok} alt=""/></a>
              <a href="https://instagram.com/farobiyuz?igshid=MzRlODBiNWFlZA==" target="_blank"><img src={instagram} alt=""/></a>
              <a href="https://t.me/farobiy_uz" target="_blank"><img src={telegram} alt=""/></a>
            </Box>
           </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Home;
