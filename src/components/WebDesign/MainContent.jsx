import React, { useEffect } from "react";

import Slider from "../Slider/Slider.jsx"

const MainContent = (props) => {

    const { title, text, images, color } = props.data;


    useEffect(() => {
        if (window.matchMedia("(max-width: 719px)").matches) {
            const goBackBtn = document.querySelector('.main__mobile-goback');
            const mainWrap = document.querySelector('.main');
            mainWrap.classList.remove('main--mobShow')
            goBackBtn.addEventListener('click', () => {
                mainWrap.classList.remove('main--mobShow')
                mainWrap.classList.add('main--mobHide')
            })
        }
    },[])

    return (
        <article className={'main__section'}>
            <button className="main__mobile-goback">
                <svg fill={color} viewBox="0 0 68 20">
                    <path d="M28.7,5.1c-0.4-0.4-0.9-0.8-1.4-1c-0.6-0.2-1.2-0.3-1.8-0.3c-1.6,0-2.8,0.5-3.6,1.6h-0.1l-0.3-1.3H18v2.3h1.6v12.6h2.7v-4.4
                    c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0.1,0.9,0.1,1.3,0.1c0.8,0,1.5-0.1,2.2-0.4c0.6-0.3,1.2-0.7,1.7-1.2c0.5-0.5,0.8-1.2,1-1.9
                    C29.8,10.9,30,10,30,9.2c0-0.8-0.1-1.6-0.3-2.4C29.5,6.2,29.2,5.6,28.7,5.1z M26.9,10.8c-0.1,0.4-0.3,0.8-0.6,1.1
                    c-0.2,0.3-0.5,0.5-0.9,0.7c-0.4,0.1-0.7,0.2-1.1,0.2c-0.4,0-0.8,0-1.1-0.1c-0.3-0.1-0.6-0.2-0.9-0.4V7.8c0.1-0.5,0.5-0.9,0.9-1.2
                    c0.4-0.3,1-0.4,1.5-0.4c0.3,0,0.6,0.1,0.9,0.2C26,6.5,26.2,6.7,26.4,7c0.5,0.5,0.7,1.2,0.7,2.2C27.1,9.7,27.1,10.2,26.9,10.8z"/>
                    <path d="M37.7,9L42,4.1h-3.2l-3.5,4.2h-0.6V0.9h-2.8v5.5v8.3h2.8v-4.4h0.7l3.6,4.4h3.4v-2.3h-2L37.7,9z"/>
                    <path d="M53.5,4.8c-0.3-0.3-0.7-0.6-1.2-0.7c-0.5-0.1-1-0.2-1.5-0.2c-0.8,0-1.5,0.2-2.2,0.5c-0.5,0.3-1,0.7-1.4,1.2h-0.1l-0.3-1.4
                    h-3.7v2.3h1.5v8.3h2.8V7.9c0.2-0.5,0.5-0.9,0.9-1.1c0.4-0.3,0.9-0.5,1.4-0.5c0.3,0,0.5,0,0.8,0.1c0.3,0.1,0.5,0.2,0.7,0.4
                    c0.4,0.4,0.6,1,0.6,1.9v6.1h2.8V8.2c0-0.7-0.1-1.4-0.3-2.1C54.1,5.6,53.8,5.1,53.5,4.8z"/>
                    <path d="M64.3,4.1l-2.1,7.7h-0.8l-3.1-7.7h-3l4.4,10.7h1.5c-0.2,0.5-0.4,1-0.7,1.5c-0.1,0.1-0.3,0.3-0.4,0.3
                    c-0.2,0.1-0.4,0.1-0.5,0.1H57v2.5h2.6c0.6,0,1.1-0.1,1.7-0.4c0.5-0.3,0.9-0.7,1.2-1.1c0.4-0.5,0.7-1.1,0.9-1.7
                    c0.3-0.7,0.5-1.4,0.8-2.2l2.3-7.3H68V4.1H64.3z"/>
                    <path d="M8,1L0,9l8,8l2.3-2.3L4.5,9l5.7-5.7L8,1z"/>
                </svg>
            </button>
            <div className={'main__text-wrap'}>
                <h1 className={'main__section-title section-title'}>{title}</h1>

            </div>
            <Slider
                images = { images }
                color = { color }
                location = { location }
            />
        </article>
    )
}

export default MainContent;
