import React from "react";

import Slider from "../Slider/Slider.jsx"

const MainContent = (props) => {

    const { title, text, images, color } = props.data;

    console.log(images)
    console.log(color)

    return (
        <article className={'main__section'}>
            <div className={'main__text-wrap'}>
                <h1 className={'main__section-title section-title'}>{title}</h1>
                <div className={'main__text'} dangerouslySetInnerHTML={{__html: text}} />
            </div>
            <Slider
                images = { images }
                color = { color }
            />
        </article>
    )
}

export default MainContent;
