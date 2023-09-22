import React from 'react';
import phone from "../../../assets/Navbar/phone.svg"

const Navbartop = () => {
    return (
        <div className='px-[11.11vw] py-[1.11vw] bg-nav flex items-center gap-[45.06vw]'>
            <div className='flex gap-[1.66vw]'>
                <h6 className='text-white font-Inter text-[0.83vw] font-[500] cursor-pointer'>О компании</h6>
                <h6 className='text-white font-Inter text-[0.83vw] font-[500] cursor-pointer'>Частые вопросы</h6>
                <h6 className='text-white font-Inter text-[0.83vw] font-[500] cursor-pointer'>Сотрудничество</h6>
            </div>
            <div>
                <h6 className='text-white font-Inter text-[0.83vw] font-[500] cursor-pointer flex items-center gap-[0.6vw]'><img className='w-[1.66vw] h-[1.66vw]' src={phone} alt="" /> +998 (77) 777-46-00</h6>
            </div>
        </div>
    );
}

export default Navbartop;
