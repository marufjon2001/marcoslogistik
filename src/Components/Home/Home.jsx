import React, { useState } from "react";
import Home from "../../assets/Home/home.png";
import map from "../../assets/Home/map.png";
import img1 from "../../assets/Home/img1.png";
import img2 from "../../assets/Home/img2.png";
import Swiper from "./Swiper.js/Swiper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Carousel } from 'antd';
import truck from "../../assets/Home/truck.png"
import PlaceIcon from '@mui/icons-material/Place';
import NearMeTwoToneIcon from '@mui/icons-material/NearMeTwoTone';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import KeyboardOptionKeyIcon from '@mui/icons-material/KeyboardOptionKey';
const contentStyle = {
  height: '100vh',
  color: '#fff',
  textAlign: 'center',
};


const HomePage = () => {
  const [buttons, setbuttons] = useState([
    {
      buttonv: "Отправка",
      active: true,
    },
    {
      buttonv: "Оплата",
      active: false,
    },
    {
      buttonv: "Доставка",
      active: false,
    },
  ]);

  const [text, settext] = useState([
    {
      num: "1",
      sarlavha: "Как подготовить посылку",
      text: "Для скорейшей отправки ваших документов и посылок мы пользуемся услугами авиаперевозчиков, поэтому ",
      active: false,
    },
    {
      num: "2",
      sarlavha: "Сроки доставки по Узбекистану",
      text: "Для скорейшей отправки ваших документов и посылок мы пользуемся услугами авиаперевозчиков, поэтому ",
      active: false,
    },
    {
      num: "3",
      sarlavha: "Запрещенные к перевозке посылки",
      text: "Для скорейшей отправки ваших документов и посылок мы пользуемся услугами авиаперевозчиков, поэтому ",
      active: false,
    },
    {
      num: "4",
      sarlavha: "Ограничения на перевозку",
      text: "Для скорейшей отправки ваших документов и посылок мы пользуемся услугами авиаперевозчиков, поэтому ",
      active: false,
    },
  ]);

  let clickbtn = (item, index) => {
    for (let i in buttons) {
      buttons[i].active = false;
    }
    buttons[index].active = true;
    setbuttons([...buttons]);
  };
  let Number = (item, index) => {
    for (let num in text) {
      text[num].active = false;
    }
    text[index].active = true;
    settext([...text]);
  };
  return (
    <div className="relative">
      <div className="px-[11.11vw] absolute pt-[8.33vw] w-[67.88vw]">
        <h1 className="font-Inter text-[2.77vw] font-[700] leading-[2.77vw] text-[white] pb-[1.11vw]">
          Решения для практически бесконечного числа потребностей в логистике
        </h1>
        <p className="text-[white] font-Inter text-[1.38vw] font-[400] leading-[1.38vw] w-[36vw] pb-[5.83vw]">
          MarcosLogistics представлена более чем в 20 городах и территориях
          России и Узбекистана
        </p>
        <button className="w-[7.77vw] h-[2.77vw] bg-[white] text-nav font-Inter text-[0.97vw] font-[700] px-[1.11vw]">
          Подробнее
        </button>
      </div>
      <img className="w-[100%] h-[100vh]" src={Home} alt="" />
      {/* -----------------О нас------------------ */}
      <div className="px-[11.11vw] pt-[5.55vw] w-[100%] flex items-center">
        <div className="w-[40%]">
          <h2 className="text-nav font-Inter text-[2.32vw] font-[700] leading-[2.63vw] pb-[2.22vw]">
            О нас
          </h2>
          <h5 className="text-[#72777A] font-Inter text-[1.11vw] font-[400] leading-[1.66vw] pb-[2.22vw]">
            Мы - MarcosLogistics, транспортно-экспедиционная компания, которая
            перевезет Ваши грузы в кратчайшие сроки по принципу
            «от-двери-до-двери».
          </h5>
          <h5 className="text-[#72777A] font-Inter text-[1.11vw] font-[400] leading-[1.66vw] pb-[2.22vw]">
            Мы поможем Вам развивать бизнес или просто отправить письмо близкому
            человеку по доступным ценам.
          </h5>
          <h5 className="text-[#72777A] font-Inter text-[1.11vw] font-[400] leading-[1.66vw] pb-[2.22vw]">
            Мы ценим Ваше время!
          </h5>
        </div>
        <div className="w-[70%] h-[80vh] relative">
          <div
            style={{ boxShadow: "0px 40px 32px -24px rgba(15, 15, 15, 0.12)" }}
            className="w-[13.75vw] h-[15.13vw] bg-[#FCFCFD] drop-shadow	-[#0F0F0F1F] absolute flex items-center justify-center flex-col ml-[5vw] mt-[6vw]"
          >
            <img
              className="rounded-[50px] leading-[1.11vw] w-[6vw] h-[6vw]"
              src={img1}
              alt=""
            />
            <h5 className="text-nav font-Inter text-[1.11vw] font-[600] leading-[1.11vw] pt-[0.5vw]">
              Москва
            </h5>
            <p className="text-[#777E90] font-Inter text-[0.83vw] font-[400] leading-[1.11vw]">
              За 7 дней
            </p>
          </div>
          <div
            style={{ boxShadow: "0px 40px 32px -24px rgba(15, 15, 15, 0.12)" }}
            className="w-[13.75vw] h-[15.13vw] bg-[#FCFCFD] drop-shadow	-[#0F0F0F1F] absolute flex items-center justify-center flex-col ml-[25vw] mt-[15vw]"
          >
            <img
              className="rounded-[50px] leading-[1.11vw] w-[6vw] h-[6vw]"
              src={img2}
              alt=""
            />
            <h5 className="text-nav font-Inter text-[1.11vw] font-[600] leading-[1.11vw] pt-[0.5vw]">
              Москва
            </h5>
            <p className="text-[#777E90] font-Inter text-[0.83vw] font-[400] leading-[1.11vw]">
              За 7 дней
            </p>
          </div>
          <img src={map} alt="" />
        </div>
      </div>
      {/* --------------------Наши преимущества-------------- */}
      <div className="pl-[11.11vw] pt-[8.40vw] pr-[5vw]">
        <h3 className="text-nav font-Inter text-[2.22vw] font-[700] leading-[2.63vw] pb-[5.62vw]">
          Наши преимущества
        </h3>
        <Swiper />
      </div>
      {/* ---------------------Часто задаваемые вопросы--------------- */}
      <div className="px-[11.11vw]">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-nav font-Inter text-[2.22vw] font-[700] leading-[2.63vw]">
            Часто задаваемые вопросы
          </h2>
          <div className="flex gap-[1.11vw] pt-[3.33vw]">
            {buttons.map((item, index) => (
              <div>
                <button
                  onClick={() => clickbtn(item, index)}
                  className={
                    item.active
                      ? " text-white py-[0.55vw] px-[1.11vw] font-Inter text-[0.97vw] font-[700] leading-[1.11vw] bg-nav w-[7.1vw] h-[2.22vw]"
                      : "bg-[white] text-[#72777A] w-[7.1vw] h-[2.22vw]"
                  }
                >
                  {item.buttonv}
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center pt-[4.44vw]">
            {text.map((item, index) => (
              <div>
                <Accordion style={{ width: "37.77vw", boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      onClick={() => Number(item, index)}
                      className="flex gap-[1.66vw] text-black font-Inter text-[1.11vw] font-[500] leading-[1.66vw]"
                    >
                      {" "}
                      <h4
                        className={
                          item.active
                            ? "text-[#EA412B] font-Inter text-[1.46vw] font-[500] leading-[1.66vw]"
                            : "text-[#72777A] font-Inter text-[1.46vw] font-[500] leading-[1.66vw]"
                        }
                      >
                        {item.num}
                      </h4>
                      {item.sarlavha}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#72777A] font-Inter text-[1.46vw] font-[500] leading-[1.66vw]">
                      {item.text}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* -------------------------------carousel-------------------------- */}
      <div className=" pt-[7.29vw] w-[100%] h-[100vh]">
      <div className="absolute px-[11.11vw] py-[5.55vw] flex gap-[6vw] w-[100%]">
      <Carousel autoplay className="w-[36.80vw] h-[2.77vw]">
       <div style={contentStyle}>dsvsdvs</div>
       <div style={contentStyle}>dsvsdvs</div>
       <div style={contentStyle}>dsvsdvs</div>
      </Carousel>
      <div className="w-[34.86vw] h-[46.66vw] bg-white px-[2.77vw] py-[2.77vw]">
       <div className="flex gap-[1.11vw]">
        <button style={{border:'2px solid #E6E8EC'}} className="text-nav text-[0.83vw] font-Inter font-[700] leading-[1.11vw] w-[14.097vw] h-[2.77vw]">Автомобил</button>
        <button className="text-white text-[0.83vw] font-Inter font-[700] leading-[1.11vw] w-[14.097vw] h-[2.77vw] bg-nav"> Товары</button>
       </div>
       <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[3.61vw] gap-[0.6vw]"><PlaceIcon className="text-[0.83vw] text-[#979C9E]"/>Ташкент</h6>
       <p className="text-[#979C9E] text-[0.97vw] font-[500] leading-[1.25vw] underline pt-[1vw]">Фергана Самарканд Джизак</p>
       <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]"><NearMeTwoToneIcon className="text-[0.83vw] text-[#979C9E]"/>Москва</h6>
       <p className="text-[#979C9E] text-[0.97vw] font-[500] leading-[1.25vw] underline pt-[1vw]"> Санкт-Петербург Новосибирск Челябинск</p>
       <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]"><KeyboardOptionKeyIcon className="text-[0.83vw] text-[#979C9E]"/>3405 <span className="text-[#979C9E] text-[0.97vw] font-[500]">(см)</span></h6>
       <div className="flex gap-[1.51vw]">
       <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]"><DeviceHubIcon className="text-[0.83vw] text-[#979C9E]"/>Высота <span className="text-[#979C9E] text-[0.97vw] font-[500]">(см)</span></h6>
       <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]">Длина <span className="text-[#979C9E] text-[0.97vw] font-[500]">(см)</span></h6>
       <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]">Ширина <span className="text-[#979C9E] text-[0.97vw] font-[500]">(см)</span></h6>
       </div>
      </div>
      </div>
      <img src={truck} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
