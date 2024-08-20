import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../assets/images/profile6.jpg";
import profilePic2 from "../../assets/images/boy.png";
// import profilePic3 from "../../assets/images/profile3.jpg";
import profilePic4 from "../../assets/images/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I must say, it was an incredible experience. The facilities were top-notch, with well-maintained pitches, state-of-the-art lighting, and comfortable seating for spectators",
    },
    {
      img: profilePic2,
      review:
        "What impressed me the most was the attention to detail in every aspect of the ground. From the immaculately trimmed grass to the clearly marked lines on the pitch, it was evident that the management takes great pride in ensuring the playing surface is in pristine condition.",
    },
    
    {
      img: profilePic4,
      review:
        "The atmosphere at the ground was electric, with passionate fans cheering from the stands. It truly felt like a professional footballing experience.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span style={{color: "#408639"}}>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        // modules={[Pagination]}
        slidesPerView={1}
        // pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
