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
import { Carousel } from "antd";
import PlaceIcon from "@mui/icons-material/Place";
import NearMeTwoToneIcon from "@mui/icons-material/NearMeTwoTone";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import KeyboardOptionKeyIcon from "@mui/icons-material/KeyboardOptionKey";
import farrux from "../../assets/Home/farrux.png";
import jasur from "../../assets/Home/jasur.png";
import fatima from "../../assets/Home/fatima.png";
import facebook from "../../assets/Home/Facebook.png"
import instagram from "../../assets/Home/instagram.png"
import telegram from "../../assets/Home/telegram.png"
import "./home.css";
import { Map, Placemark, YMaps } from "react-yandex-maps";
const contentStyle = {
  height: "100vh",
  color: "#fff",
  textAlign: "center",
};

const HomePage = () => {
  const [box, setbox] = useState([
    {
      img: farrux,
      lastName: " Фаррух Болтаев",
      director: "Директор",
      sarlavha: "Про работу нашей команды",
      text: "Мы единственная компания которая предоставляет услуги на высшем уровне. Наша команда изо дня в день старается улучшать наш сервис. На сегодняшний день MarcosLogistics является лидером в это сегменте",
    },
    {
      img: jasur,
      lastName: " Джасур Нургилджанов",
      director: "Менеджер",
      sarlavha: "Про работу нашей команды",
      text: "Мы единственная компания которая предоставляет услуги на высшем уровне. Наша команда изо дня в день старается улучшать наш сервис. На сегодняшний день MarcosLogistics является лидером в это сегменте",
    },
    {
      img: fatima,
      lastName: " Фатима Адиева",
      director: "Бухгалтер",
      sarlavha: "Про работу нашей команды",
      text: "Мы единственная компания которая предоставляет услуги на высшем уровне. Наша команда изо дня в день старается улучшать наш сервис. На сегодняшний день MarcosLogistics является лидером в это сегменте",
    },
  ]);
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
      num: "",
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
      <img className="w-[100%] h-[85vh]" src={Home} alt="" />
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
      <div className=" pt-[7.29vw] w-[100%] h-[100vh] img mt-[5.55vw]">
        <div className=" px-[11.11vw] py-[5.55vw] flex gap-[6vw] w-[100%] items-center">
          <Carousel autoplay className="w-[36.80vw] mt-[7vw]">
            <div style={contentStyle}>
              <h3 className="text-[#FCFCFD] font-Inter text-[2.22vw] font-[700] leading-[2.77vw]">
                Скидка 10%{" "}
              </h3>
              <p className="text-[#FCFCFD] font-Inter text-[1.25vw] font-[400] leading-[1.66vw]">
                Промокод действут с 20 сентября по 31 декабря 2020 г
              </p>
            </div>
            <div style={contentStyle}>
              <h3 className="text-[#FCFCFD] font-Inter text-[2.22vw] font-[700] leading-[2.77vw]">
                Скидка 10%{" "}
              </h3>
              <p className="text-[#FCFCFD] font-Inter text-[1.25vw] font-[400] leading-[1.66vw]">
                Промокод действут с 20 сентября по 31 декабря 2020 г
              </p>
            </div>
            <div style={contentStyle}>
              <h3 className="text-[#FCFCFD] font-Inter text-[2.22vw] font-[700] leading-[2.77vw]">
                Скидка 10%{" "}
              </h3>
              <p className="text-[#FCFCFD] font-Inter text-[1.25vw] font-[400] leading-[1.66vw]">
                Промокод действут с 20 сентября по 31 декабря 2020 г
              </p>
            </div>
          </Carousel>
          <div className="w-[34.86vw] bg-white px-[2.77vw] py-[1.77vw] mt-[-9.5vw]">
            <div className="flex gap-[1.11vw]">
              <button
                style={{ border: "2px solid #E6E8EC" }}
                className="text-nav text-[0.83vw] font-Inter font-[700] leading-[1.11vw] w-[14.097vw] h-[2.77vw]"
              >
                Автомобил
              </button>
              <button className="text-white text-[0.83vw] font-Inter font-[700] leading-[1.11vw] w-[14.097vw] h-[2.77vw] bg-nav">
                {" "}
                Товары
              </button>
            </div>
            <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.vw] flex items-center pt-[1.61vw] gap-[0.6vw]">
              <PlaceIcon className="text-[0.83vw] text-[#979C9E] w-[1.24vw] h-[1.24vw]" />
              Ташкент
            </h6>
            <p className="text-[#979C9E] text-[0.97vw] font-[500] leading-[1.25vw] underline pt-[1vw]">
              Фергана Самарканд Джизак
            </p>
            <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center gap-[0.6vw]">
              <NearMeTwoToneIcon className="text-[0.83vw] text-[#979C9E] w-[1.24vw] h-[1.24vw]" />
              Москва
            </h6>
            <p className="text-[#979C9E] text-[0.97vw] font-[500] leading-[1.25vw] underline ">
              {" "}
              Санкт-Петербург Новосибирск Челябинск
            </p>
            <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[1vw] gap-[0.6vw]">
              <KeyboardOptionKeyIcon className="text-[0.83vw] text-[#979C9E] w-[1.24vw] h-[1.24vw]" />
              3405{" "}
              <span className="text-[#979C9E] text-[0.97vw] font-[500]">
                (см)
              </span>
            </h6>
            <div className="flex gap-[1.51vw]">
              <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]">
                <DeviceHubIcon className="text-[0.83vw] text-[#979C9E] w-[1.24vw] h-[1.24vw]" />
                Высота{" "}
                <span className="text-[#979C9E] text-[0.97vw] font-[500]">
                  (см)
                </span>
              </h6>
              <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]">
                Длина{" "}
                <span className="text-[#979C9E] text-[0.97vw] font-[500]">
                  (см)
                </span>
              </h6>
              <h6 className="text-nav font-Inter text-[1.15vw] font-[700] leading-[1.25vw] flex items-center pt-[2.43vw] gap-[0.6vw]">
                Ширина{" "}
                <span className="text-[#979C9E] text-[0.97vw] font-[500]">
                  (см)
                </span>
              </h6>
            </div>
            <hr />
            <div className="flex gap-[4.30vw] pb-[1vw]">
              <div>
                <p className="text-[#979C9E] text-[0.97vw] font-[500]">
                  Стоимость доставки
                </p>
                <h6 className="text-nav font-Inter text-[1.66vw] font-[700] leading-[1.25vw] flex items-center gap-[0.6vw]">
                  12 500 000 UZS
                </h6>
              </div>
              <div>
                <p className="text-[#979C9E] text-[0.97vw] font-[500]">
                  Дата доставки
                </p>
                <h6 className="text-nav font-Inter text-[1.66vw] font-[700] leading-[1.25vw] flex items-center gap-[0.6vw]">
                  31.12.2023
                </h6>
              </div>
            </div>
            <button className="w-[29.30vw] h-[3.88vw] bg-[#EA412B] text-white font-Inter text-[1.11vw] font-[700]">
              Оформить
            </button>
          </div>
        </div>
        {/* <img src={truck} alt="" /> */}
      </div>
      {/* --------------------------------Отзывы от компании---------------------- */}
      <div className="w-[100%] liniy">
        <div className="px-[11.11vw] pt-[5.55vw]">
          <div className="flex justify-center pb-[5.55vw]">
            <h3 className="text-nav font-Inter text-[2.22vw] font-[700]">
              Отзывы от компании
            </h3>
          </div>
          <div className="flex gap-[1.66vw]">
            {box.map((item, index) => (
              <div
                style={{ border: "2px solid #E3E5E5" }}
                className="w-[24.79vw] p-[2.77vw] bg-white"
              >
                <div className="flex items-center gap-[1.11vw]">
                  <div>
                    <img
                      className="w-[5.44vw] h-[5.44vw]"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="mt-[1.7vw]">
                    <h4 className="text-black font-Inter text-[1.11vw] font-[600] leading-[1.28vw]">
                      {" "}
                      {item.lastName}
                    </h4>
                    <p className="text-[#72777A] font-Inter text-[0.97vw] font-[400]">
                      {item.director}
                    </p>
                  </div>
                </div>
                <div className="pt-[2.22vw]">
                  <h5 className="text-black font-Inter text-[1.11vw] font-[600] leading-[1.38vw]">
                    {item.sarlavha}
                  </h5>
                  <p className="text-[#72777A] font-Inter] text-[0.97vw] font-[400] ">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* --------------- Yandex map --------------------- */}
      <div className="px-[11.11vw] pt-[5.55vw] pb-[5.55vw] flex items-center gap-[11.38vw]">
        <div>
        <YMaps>
        <Map
        className="w-[37.5vw] h-[34.72vw]"
          defaultState={{
            center: [41.355613,69.287903],
            zoom: 18
          }}
        >
          <Placemark defaultGeometry={[41.355613,69.287903]} />
        </Map>
      </YMaps>
        </div>
        <div className="flex flex-col text-center items-center pt-[5.77vw]">
          <h5 className="text-black font-Inter text-[2.32vw] font-[700]">Наши контакты</h5>
          <a style={{textDecoration:"none"}} className="text-nav font-Inter text-[1.38vw] font-[400] pt-[3.33vw]" href="tel+998(77)777-46-00">+998(77)777-46-00</a>
          <a style={{textDecoration: 'none'}} className="text-nav font-Inter text-[1.38vw] font-[400] pt-[0.5vw]" href="https://www.instagram.com/farobiyuz/">info@marcos.uz</a>
          <div className="flex gap-[1.11vw] pt-[1.77vw]">
            <a className="w-[3.22vw]  h-[3.22vw]" target="_blanl" href="farobiyuz"><img src={facebook} alt="" /></a>
            <a className="w-[3.22vw] h-[3.22vw]" target="_blanl" href="https://www.instagram.com/farobiyuz/"><img src={instagram} alt="" /></a>
            <a className="w-[3.22vw] h-[3.22vw]" target="_blanl" href="https://t.me/farobiy_uz"><img src={telegram} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
