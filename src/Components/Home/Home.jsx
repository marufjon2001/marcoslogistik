import React from "react";
import Home from "../../assets/Home/home.png";
import map from "../../assets/Home/map.png";
import img1 from "../../assets/Home/img1.png";
import img2 from "../../assets/Home/img2.png";
import Swiper from "./Swiper.js/Swiper"

const HomePage = () => {
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
      <div className="px-[11.11vw] pt-[8.40vw]">
        <h3 className="text-nav font-Inter text-[2.22vw] font-[700] leading-[2.63vw]">Наши преимущества</h3>
        <Swiper/>
      </div>
    </div>
  );
};

export default HomePage;
