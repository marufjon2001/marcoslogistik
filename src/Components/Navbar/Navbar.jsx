import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navbartop from "./Navbartop/Navbartop";
import nav from "../../assets/Navbar/nav.svg"
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';

function NavScrollExample() {
  // ctrl alt t menu
  return (
    <div>
      <Navbartop/>
    <Navbar expand="lg" className="px-[11.11vw] py-[2.77vw] bg-nav flex">
      <Container fluid className="flex items-center gap-[16vw] pb-[1.66vw]">
        <Navbar.Brand className="flex items-center gap-[3.32vw]">
        <div>
          <img className="w-[7.08vw] h-[2.77vw]" src={nav} alt="" />
        </div>
        <div className="relative">
          <div className="w-[2.22vw] h-[2.22vw] bg-nav absolute ml-[16.5vw] mt-[0.4vw] flex items-center justify-center"><SearchIcon className="text-white"/></div>
          <input type="text" placeholder="Введите трек-код" className="text-[#72777A] font-Inter text-[0.97vw] font-[400] w-[19vw] h-[2.77vw] outline-none px-[1vw]"/>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <div className="flex gap-[1.66vw]">
          <button className="w-[10.97vw] h-[2.77vw] text-nav font-Inter text-[0.97vw] font-[700] bg-[white]">Оформить заявку</button>
          <button style={{border: "1px solid white"}} className="w-[10.97vw] h-[2.77vw] text-white font-Inter text-[0.97vw] font-[700] bg-nav">Калькулятор цен</button>
          <Fab size="small" className="shadow-none w-[2.77vw] h-[2.77vw]" aria-label="add">
           <PersonIcon className="text-nav w-[1.66vw] h-[1.66vw]"/>
          </Fab>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;
