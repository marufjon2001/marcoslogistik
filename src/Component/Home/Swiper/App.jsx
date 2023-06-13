import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../images/Kasb/img.png";
import img2 from "../../images/Kasb/img2.png";
import img3 from "../../images/Kasb/img3.png";
import img4 from "../../images/Kasb/img4.png";
import { Typography } from "@mui/material";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div
        style={{ display: "flex", justifyContent: "end", overflow: "hidden",backgroundColor: '#FCFCFD',padding: '30px' }}
      >
        <div style={{ width: "94.5%",flexWrap: 'wrap' }}>
          <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '32px',lineHeight: '38px',color: '#23262F',}}>Наши преимущества</Typography>
          <br /><br />
          <Slider {...settings}>
            <div>
              <img src={img} alt="" />
              <br />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "36px",
                  color: "#23262F",
                }}
              >
                Опыт и профессионализм
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#72777A",
                }}
              >
                Мы обладаем многолетним опытом <br /> в грузоперевозках и
                предоставляем <br /> высококачественные 
              </Typography>
            </div>
            <div>
              <img src={img2} alt="" />
              <br />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "36px",
                  color: "#23262F",
                }}
              >
               Надежность и безопасность
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#72777A",
                }}
              >
                Мы обладаем многолетним опытом <br /> в грузоперевозках и
                предоставляем <br /> высококачественные
              </Typography>
            </div>
            <div>
              <img src={img3} alt="" />
              <br />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "36px",
                  color: "#23262F",
                }}
              >
                Честные цены
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#72777A",
                }}
              >
                Мы обладаем многолетним опытом <br /> в грузоперевозках и
                предоставляем 
              </Typography>
            </div>
            <div>
              <img src={img4} alt="" />
              <br />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "36px",
                  color: "#23262F",
                }}
              >
               Долгосрочное партнерство
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#72777A",
                }}
              >
                Мы обладаем многолетним опытом <br /> в грузоперевозках и
                предоставляем <br />{" "}
                клиентам.
              </Typography>
            </div>
            <div>
              <img src={img3} alt="" />
              <br />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "36px",
                  color: "#23262F",
                }}
              >
                Честные цены
              </Typography>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#72777A",
                }}
              >
                Мы обладаем многолетним опытом <br /> в грузоперевозках и
                предоставляем 
              </Typography>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
