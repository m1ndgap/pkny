import React, { useState } from "react";

import { Navigation, A11y, EffectFade, Controller, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Picture from "./Picture.jsx"
import {mobileImg, retinaImg, pSBC, shadeColor} from "../toolbox.js"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Slider = (props) => {

    let { images, color } = props

    const sliderRotationDelay = 5000;

    const [ textSwiper, setTextSwiper ] = useState(null);
    const [ controlledSwiper, setControlledSwiper ] = useState(null);
    const [ mainSwiper, setMainSwiper ] = useState(null);

    const mainSlidesMarkup = images.map(item =>
            <SwiperSlide>
                <picture>
                    <source srcSet={`./img/${item.img} 1x, ./img/${retinaImg(item.img)} 2x`}
                            media={"(min-width: 720px)"} />
                    <source srcSet={`./img/${mobileImg(item.img)}`}
                            media={"(max-width: 719px)"}/>
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
                allowTouchMove="false"
                // onSlideChange={() => console.log('slide change')}
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
                onSlideChangeTransitionEnd = {(swiper) => {

                    if (swiper.autoplay.running){
                        swiper.navigation.nextEl.classList.add('slider-next--animate')

                    }
                }}
                onSlideChangeTransitionStart = {(swiper) => {
                    swiper.navigation.nextEl.classList.remove('slider-next--animate')
                }}
                autoplay = {{
                    delay: sliderRotationDelay,
                    duration: 1000,
                    disableOnInteraction: true,

                }}
                onSwiper={(swiper) => {
                    swiper.navigation.nextEl.style.animationDuration = `${sliderRotationDelay}ms`
                    swiper.navigation.nextEl.classList.add('slider-next--animate')
                }}
                className={"main-slider"}
            >
                {mainSlidesMarkup}
                <div className={"slider__btn-wrap"}>
                    <button type={"button"} className={"slider-prev"} style={{backgroundColor: `${color}`}}>
                        <svg x="0px" y="0px" viewBox="0 0 64 64">
                            <polygon points="48,28.5 24.4,28.5 30.9,22 26,17.1 11.1,32 26,46.9 30.9,42 24.4,35.5 48,35.5 "/>
                        </svg>
                    </button>
                    <button  type={"button"} className={"slider-next"}
                             style={{
                                 backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, ${color} 50%)`,
                                 backgroundColor: `${color}`
                             }}>
                        <svg viewBox="0 0 64 64">
                            <polygon points="38,17.1 33.1,22 39.5,28.5 16,28.5 16,35.5 39.5,35.5 33.1,42 38,46.9 52.9,32 "/>
                        </svg>
                    </button>
                </div>
            </Swiper>
        </div>
    )
}

// ${shadeColor(color, 20)} ,

export default Slider;
