import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Style.css';
import { Pagination } from 'swiper/modules';
import img from "../../../assets/Home/Наши/img.png"
import img2 from "../../../assets/Home/Наши/img2.png"
import img3 from "../../../assets/Home/Наши/img3.png"
import img4 from "../../../assets/Home/Наши/img4.png"

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft
        className="mySwiper"
      >
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и профессионализм</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы обладаем многолетним опытом в грузоперевозках и предоставляем высококачественные услуги нашим клиентам.</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img2} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и Надежность и безопасность</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы придерживаемся высоких стандартов надежности, и мы строго следим за соблюдением всех правил безопасности.</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img3} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и Честные цены</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы предлагаем честные цены наших услуг, не снижая при этом качество обслуживания.</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img4} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и Долгосрочное партнерство</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы нацелены на долгосрочное партнерство с нашими клиентами. </p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img2} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и профессионализм</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы обладаем многолетним опытом в грузоперевозках и предоставляем высококачественные услуги нашим клиентам.</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img3} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и Честные цены</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы предлагаем честные цены наших услуг, не снижая при этом качество обслуживания.</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img4} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и Долгосрочное партнерство</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы нацелены на долгосрочное партнерство с нашими клиентами. </p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col w-[17.77vw] h-[17.77vw] cursor-pointer'>
          <img src={img2} alt=""  className='w-[17.77vw] h-[17.77vw] pb-[1.45vw]'/>
          <h2 className='text-black font-Inter text-[1.11vw] font-[700]'>Опыт и профессионализм</h2>
          <p className='font-Inter text-[0.97vw] font-[400] leading-[1.38vw]'>Мы обладаем многолетним опытом в грузоперевозках и предоставляем высококачественные услуги нашим клиентам.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
