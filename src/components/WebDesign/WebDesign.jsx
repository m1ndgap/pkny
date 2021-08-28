import React from "react";

import Slider from "../Slider/Slider.jsx"

const WebDesign = () => {
    return (
        <article className={'main__section'}>
            <div className={'main__text-wrap'}>
                <h1 className={'main__section-title section-title'}>веб-дизайн</h1>
                <div className={'main__text'}>
                    <p>Нынче никого не удивить рекламой типа <span className={'italics'}>«Дизайн за 2 дня – 5000 рублей»</span>.</p>
                    <p>К сожалению, ничто в этой жизни не может быть сделано в короткие сроки, при этом не потеряв в качестве. Для меня нет понятия «халтура», к каждому заказу я подхожу максимально ответственно, а сроки всегда называю адекватные и честные. Срывать их я не люблю. С уважением отношусь к своему времени, а главное – ко времени моих клиентов.</p>
                    <p>Ниже, лишь часть моих работ, не попавших под nda:</p>
                </div>
            </div>
            <Slider

            />
        </article>
    )
}

export default WebDesign;
