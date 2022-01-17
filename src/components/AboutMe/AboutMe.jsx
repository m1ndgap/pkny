import React from "react";

const AboutMe = (props) => {

    const { show } = props

    return (
        <div className={`about-me__wrap ${show ? 'about-me__wrap--hidden' : ''}`}>
            {/*<video loop autoPlay={true} height={"120px"}>*/}
            {/*    <source src="./img/animoji.webm"*/}
            {/*            type="video/webm" />*/}
            {/*    <source src="./img/animoji.mov"*/}
            {/*            type="video/mov" />*/}
            {/*</video>*/}
            <img className={"about-me__face-gif"} src="./img/pkny-animoji-100-optimized3-reversed.gif" alt=""/>
            <p className={"about-me__text"}>
                Привет, меня зовут Глеб, мне 33 года. <br className={"about-me__text-br"} />
                Я живу в Санкт-Петербурге и уже <br className={"about-me__text-br"} />больше 12 лет занимаюсь дизайном.
            </p>
            <ul className={"about-me__links"}>
                <li className={"about-me__element"}>
                    <a className={"about-me__link about-me__link--mail"} href="mailto:mail@pkny.ru">
                        <svg width={"28px"} height={"28px"}  x="0px" y="0px" viewBox="0 0 64 64" >
                            <path d="M0,0v64h64V0H0z M57,7v7.3L32.3,29.4L7,14.3V7H57z M7,57V22.4l25.4,15.2L57,22.5V57H7z"/>
                        </svg>
                    </a>
                </li>
               <li className={"about-me__element"}>
                    <a className={"about-me__link"} href="https://t.me/ep5il0n">
                        <svg width={"28px"} height={"28px"}  x="0px" y="0px" viewBox="0 0 64 64">
                            <path d="M57,7v46.4l-13.5-5.8L42.2,47h-1.4H7V7H57 M64,0H0v54h40.8L64,64V0L64,0z"/>
                            <rect x="21" y="16.5" width="22" height="7"/>
                            <rect x="30" y="30.6" width="13" height="7"/>
                        </svg>
                    </a>
                </li>
                <li className={"about-me__element"}>
                    <a className={"about-me__link"} href="https://instagram.com/pknydesign/">
                        <svg  width={"28px"} height={"28px"}  x="0px" y="0px" viewBox="0 0 64 64" >
                            <g>
                                <g>
                                    <path d="M32,26.8c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.4-5.3-5.3C26.7,29.2,29.1,26.8,32,26.8 M32,19.8
                                        c-6.8,0-12.3,5.5-12.3,12.3S25.2,44.4,32,44.4s12.3-5.5,12.3-12.3S38.8,19.8,32,19.8L32,19.8z"/>
                                </g>
                            </g>
                            <circle cx="46.3" cy="17.8" r="2.7"/>
                            <path d="M57,7v50H7V7H57 M64,0H0v64h64V0L64,0z"/>
                        </svg>
                    </a>
                </li>

            </ul>
            <small className={"about-me__copyright"}>
                <span>2021 © pkny.ru | code by <a href="https://github.com/m1ndgap">mindgap</a></span>
            </small>
        </div>
    )
}

export default AboutMe;
