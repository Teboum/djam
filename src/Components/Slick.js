import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./Slick.css";

SwipeCore.use([Navigation, Pagination]);
const data = [
  {
    id: 1,
    auteur: "someOne",
    citation: "lorem ipsum dolor sit, amet consectetur adipiscing elit.",
  },
  {
    id: 1,
    auteur: "someOne",
    citation: "lorem ipsum dolor sit, amet consectetur adipiscing elit.",
  },
  {
    id: 1,
    auteur: "someOne",
    citation: "lorem ipsum dolor sit, amet consectetur adipiscing elit.",
  },
  {
    id: 1,
    auteur: "someOne",
    citation: "lorem ipsum dolor sit, amet consectetur adipiscing elit.",
  },
  {
    id: 1,
    auteur: "someOne",
    citation:
      "lorem ipsum dolor sit, amet consectetur adipiscing elitlorem ipsum dolor sit, amet consectetur adipiscing elitlorem ipsum dolor sit, amet consectetur adipiscing elitlorem ipsum dolor sit, amet consectetur adipiscing elitlorem ipsum dolor sit, amet consectetur adipiscing elit.",
  },
];

function Slick() {
  return (
    <div className="slick-box">
      <h2>Citation :</h2>

      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        tag="div"
        wrapperTag="div"
        id="main"
        arrows={false}
        style={{ padding: "50px", height: "180px" }}
      >
        {data.map((citation, i) => (
          <SwiperSlide className="swiper-elem" tag="div" key={i}>
            <h3 className="slick-title">{citation.auteur},</h3>
            <p className="slick-paragraphe">{citation.citation}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slick;
