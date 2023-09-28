import React from "react";
import nav from "../../assets/Navbar/nav.svg";
import fasebok from "../../assets/Footer/fasebok.png";
import instagram from "../../assets/Footer/instagram.png";
import telegram from "../../assets/Footer/telegram.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="px-[11.11vw] bg-nav">
      <div className="py-[4vw] flex gap-[37.22vw]">
        <div className="text-white">
          <img
            className="w-[7.8vw] h-[2.22vw] cursor-pointer"
            src={nav}
            alt=""
          />
          <h5 className="text-white font-Inter text-[0.83vw] font-[500] pt-[3.05vw] cursor-pointer">
            <span className="text-white font-Inter text-[0.83vw] font-[200]">
              Copyright ©{" "}
            </span>
            Все права защищены
          </h5>
        </div>
        <div className="text-white">
          <div className="flex gap-[0.83vw] justify-end">
            <a className="text-white" target="_blanl" href="farobiyuz">
              <FacebookRoundedIcon className="w-[2.08vw] h-[2.08vw] cursor-pointer" />
            </a>
            <a
              className="text-white"
              target="_blanl"
              href="https://www.instagram.com/farobiyuz/"
            >
              <InstagramIcon className="w-[2.08vw] h-[2.08vw] cursor-pointer" />{" "}
            </a>
            <a
              className="text-white"
              target="_blanl"
              href="https://t.me/farobiy_uz"
            >
              {" "}
              <TelegramIcon className="w-[2.08vw] h-[2.08vw] cursor-pointer" />
            </a>
          </div>
          <div className="flex gap-[0.97vw] pt-[3.05vw] cursor-pointer">
            <h6 className="font-Inter text-white text-[0.97vw] font-[300] ">
              Documentation
            </h6>
            <h6 className="font-Inter text-white text-[0.97vw] font-[300] ">
              About Us
            </h6>
            <h6 className="font-Inter text-white text-[0.97vw] font-[300] ">
              Pricing
            </h6>
            <h6 className="font-Inter text-white text-[0.97vw] font-[300] ">
              FAQ
            </h6>
            <h6 className="font-Inter text-white text-[0.97vw] font-[300] ">
              Support
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
