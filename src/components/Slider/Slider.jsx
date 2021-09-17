import React, { useState } from "react";

import { Navigation, A11y, EffectFade, Controller, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Picture from "./Picture.jsx"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Slider = (props) => {

    let { images, color } = props

    const [ textSwiper, setTextSwiper ] = useState(null)
    const [ controlledSwiper, setControlledSwiper ] = useState(null);

    const mainSlidesMarkup = images.map(item =>
            <SwiperSlide>
                <picture>
                    <source srcSet={`./img/${item.img}`}
                            media={"(min-width: 800px)"} />
                    <img src={`./img/${item.img}`}
                         alt={item.imgAlt} />
                </picture>
            </SwiperSlide>
    );

    const textSlidesMarkup = images.map(item =>
        <SwiperSlide style={{backgroundColor: `${color}`}}>
            <p>
                {item.imgDesc[0]}
            </p>
            {item.imgDesc[1] ? <p>{item.imgDesc[1]}</p> : ''}
        </SwiperSlide>
    );

    return (
        <div className={"sliders-wrap"}>
            <Swiper
                modules={[EffectFade, Controller]}
                effect="fade"
                fadeEffect={"crossFade: true"}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={setControlledSwiper}
                className={"text-slider"}
            >
                {textSlidesMarkup}
            </Swiper>

            <Swiper
                key={2}
                modules={[Navigation, A11y, Autoplay]}
                slidesPerView={1}
                speed={1000}
                controller={{ control: controlledSwiper }}
                navigation={{
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev'}}
                onSlideChange={() => {}}
                autoplay = {{
                    delay: 3000,
                    duration: 1000,
                    disableOnInteraction: true,

                }}
                onSwiper={(swiper) => console.log(swiper)}
                className={"main-slider"}
            >
                {mainSlidesMarkup}
                <div className={"slider__btn-wrap"}>
                    <button type={"button"} className={"slider-prev"} style={{backgroundColor: `${color}`}}>
                        <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM26 7L1 7L1 9L26 9L26 7Z"/>
                        </svg>
                    </button>
                    <button  type={"button"} className={"slider-next"} style={{backgroundColor: `${color}`}}>
                        <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9L25 9V7L0 7L0 9Z" />
                        </svg>
                    </button>
                </div>
            </Swiper>
        </div>
    )
}


export default Slider;
