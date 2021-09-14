import React from "react";

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Picture = (props) => {
    console.log(props)
    let { img } = props


    return (
        <SwiperSlide>
            <picture>
                <source srcSet={`./img/${img}`}
                        media={"(min-width: 800px)"} />
                    <img src={`./img/${img}`}
                         alt={""} />
            </picture>
        </SwiperSlide>
    )
}


export default Picture;
