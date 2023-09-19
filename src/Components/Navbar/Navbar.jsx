import React from "react";
import phone from "../../assets/Navbar/phone.svg"
import nav from "../../assets/Navbar/nav.svg"
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Navbar = () => {
  return (
    <div className="bg-nav  px-[11.11vw] py-[1.11vw]">
      <div className="flex items-center gap-[45.06vw]">
        <div className="flex gap-[1.66vw] cursor-pointer">
          <h1 className="text-white font-Inter text-[0.83vw] font-[500]">
            O компании
          </h1>
          <h1 className="text-white font-Inter text-[0.83vw] font-[500]">
            Частые вопросы
          </h1>
          <h1 className="text-white font-Inter text-[0.83vw] font-[500]">
            Сотрудничество
          </h1>
        </div>
        <div className="flex items-center gap-[0.55vw]">
          <img className="cursor-pointer" src={phone} alt="" />
          <a
            style={{ textDecoration: "none" }}
            className="text-white font-Inter text-[0.83vw] font-[500] flex items-center"
            href="tel:(+998777774600)"
          >
            +998 (77) 777-46-00
          </a>
        </div>
      </div>
      <div className="pt-[2.77vw] pb-[1.66vw] text-white flex items-center gap-[20.76vw]">
         <div className="flex gap-[3.32vw] relative">
            <img className="w-[7.093vw] h-[2.47vw] cursor-pointer" src={nav} alt="" />
            <div className="bg-nav w-[2.22vw] h-[2.22vw] z-20 ml-[24vw] mt-[0.3vw] absolute flex items-center justify-center cursor-pointer">
            <SearchIcon/>
            </div>
            <input className="w-[19.02vw] h-[2.77vw] outline-none text-[#72777A] text-[0.97vw] font-[400] px-[0.83vw]" type="text" placeholder="Введите трек-код" />
         </div>
         <div className="flex items-center gap-[1.66vw]">
           <button className="w-[11.97vw] h-[2.77vw] bg-[white] text-[#23262F] font-Inter font-[700] text-[0.97vw]">Оформить заявку</button>
           <button style={{border: '1px solid white'}} className="w-[11.97vw] h-[2.77vw] bg-nav text-[white] font-Inter font-[700] text-[0.97vw]">Калькулятор цен</button>
           <Fab className="w-[2.77vw] h-[2.77vw]" style={{boxShadow: 'none',backgroundColor: '#F2F4F5'}} size="small" aria-label="add">
            <Person2OutlinedIcon className="w-[1.66vw] h-[1.66vw]"/>
           </Fab>
         </div>
      </div>
    </div>
  );
};

export default Navbar;
