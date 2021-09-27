import React, { createRef, useState, useEffect } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    NavLink
} from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe.jsx"
import data from "../../mocks/content.js";


const Nav = () => {
    const gradientContainer = createRef();
    const [ prevColor, setPrevColor ] = useState(null);
    const [ mobMenu, setMobMenu ] = useState(false);
    const [ showMain, setShowMain] = useState(false);

    // (window.matchMedia("(max-width: 767px)").matches)

    const location = useLocation();

    useEffect(() => {
        const navWrap = document.querySelector('.nav-wrap')
        const linkEls = Array.from(document.querySelectorAll('.nav__link'));
        const currentLink = linkEls.filter(link => link.classList.contains('active') === true);
        if (currentLink.length > 0) {
            const color = currentLink[0].dataset.color;
            navWrap.style.backgroundColor = color;
            gradientContainer.current.style.backgroundColor = color;
            setPrevColor(color);
        } else {
            gradientContainer.current.style.backgroundColor = '#1BBD5C';
            setPrevColor('#1BBD5C')
        }
    })

    useEffect(() => {
        if (window.matchMedia("(max-width: 719px)").matches) {
            const navItems = document.querySelectorAll('.nav__el');
            const mainWrap = document.querySelector('.main');
            mainWrap.classList.add('main--mobShow')
            navItems.forEach((item) => {
                item.addEventListener('click', () => {
                    mainWrap.classList.add('main--mobShow')
                })
            })
        }
    },[])

    const toggleMobMenu = () => {
        setMobMenu(!mobMenu)
    }


    const changeColor = (e) => {
        const rect = e.target.closest(`.nav-wrap`).getBoundingClientRect();
        const newBgc = e.currentTarget.dataset['color'];
        const gradientContEl = gradientContainer.current
        const gradientEl = document.createElement("div");
        gradientEl.style.top = `${e.clientY - rect.top - 150}px`
        gradientEl.style.left = `${e.clientX - rect.left - 150}px`

        if (prevColor === newBgc) {
            gradientEl.style.backgroundImage = `radial-gradient(circle at center, ${newBgc} 30%, rgba(255,255,255,0.2) 50%, rgba(0,0,0,0.01) 71%)`
        } else {
            gradientEl.style.backgroundImage = `radial-gradient(circle at center, ${newBgc} 43%, ${prevColor} 71%)`
        }
        gradientEl.classList.add("nav-bg-gradient")
        gradientEl.addEventListener("animationend", () => {
            gradientContEl.style.backgroundColor = newBgc
            gradientEl.remove();
        });
        gradientContEl.append(gradientEl);

        setPrevColor(newBgc);
    }


    return (
        <div className={"nav-wrap"}>
            <button className={`nav__mobileBtn `} onClick={toggleMobMenu}>
                <div id={`nav__mob-icon`} className={`${ mobMenu ? 'open' : ' '}`}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </button>
            <div ref={gradientContainer} className="gradient-container" > </div>
            <h2 className={"logo nav__logo"}>
                    <svg width="100" height="37" viewBox="0 0 100 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4922 8.36154C20.7382 7.4959 19.7848 6.82942 18.7156 6.42041C17.5684 5.9985 16.3549 5.78894 15.1336 5.80183C11.8518 5.80183 9.4779 6.85415 8.01188 8.95881H7.84232L7.20648 6.3991H0V11.0919H3.17932V36.2625H8.64776V27.5168C9.31843 27.8315 10.0334 28.0402 10.7673 28.1354C11.6233 28.2639 12.4877 28.3281 13.3532 28.3274C14.8753 28.3539 16.3878 28.0784 17.8042 27.5168C19.0704 26.9999 20.2017 26.1971 21.1107 25.1704C22.0511 24.0832 22.7582 22.8124 23.1878 21.4374C23.6881 19.8443 23.9314 18.1807 23.9085 16.51C23.9397 14.887 23.7253 13.2686 23.2726 11.7105C22.9208 10.4802 22.314 9.33882 21.4922 8.36154ZM17.8254 19.667C17.588 20.4946 17.184 21.2642 16.6385 21.9281C16.1601 22.5023 15.5486 22.9492 14.858 23.2292C14.1557 23.5046 13.4074 23.6422 12.6537 23.6345C11.8893 23.6353 11.1277 23.5422 10.3858 23.3572C9.76839 23.2305 9.18377 22.9763 8.66894 22.6106V13.7369C8.95679 12.7213 9.6155 11.8527 10.513 11.3052C11.4016 10.7658 12.4215 10.4852 13.4591 10.4946C14.1087 10.4795 14.7534 10.6094 15.3471 10.8749C15.9408 11.1405 16.4687 11.5351 16.8928 12.0305C17.8007 13.0544 18.2528 14.5049 18.2493 16.382C18.2711 17.4921 18.1283 18.5993 17.8254 19.667Z" fill="white"/>
                        <path d="M39.4871 16.1262L48.0501 6.3993H41.5643L34.6121 14.889H33.3404V0H27.8296V11.0921V27.7303H33.3404V18.8993H34.8241L42.1153 27.7303H48.9827V23.0375H45.0403L39.4871 16.1262Z" fill="white"/>
                        <path d="M70.9832 7.63626C70.3271 6.97785 69.5186 6.49405 68.6305 6.22843C67.6749 5.9401 66.682 5.79633 65.6843 5.80181C64.1656 5.75905 62.6616 6.11173 61.3181 6.82569C60.2215 7.4042 59.266 8.22013 58.5202 9.21477H58.3507L57.7148 6.39908H50.2964V11.0919H53.3485V27.7301H58.8594V13.9076C59.1845 12.975 59.8019 12.174 60.6186 11.6252C61.4512 11.021 62.4535 10.6997 63.48 10.7079C64.0193 10.6935 64.5559 10.7881 65.0583 10.9859C65.5607 11.1838 66.0186 11.4809 66.405 11.8598C67.1786 12.6277 67.5707 13.8809 67.5707 15.5927V27.7087H73.0815V14.4622C73.116 13.0536 72.9227 11.6488 72.5093 10.3026C72.2077 9.30906 71.6858 8.39736 70.9832 7.63626Z" fill="white"/>
                        <path d="M92.6454 6.39941L88.5335 21.7151H86.9438L80.7971 6.39941H74.7988L83.6161 27.7304H86.6259C86.325 28.7868 85.8445 29.7828 85.2058 30.6741C84.9672 30.9607 84.6676 31.1896 84.3291 31.3438C83.9906 31.498 83.6219 31.5735 83.2505 31.5647H77.9834V36.4708H83.2505C84.4032 36.5019 85.5442 36.2318 86.5623 35.6869C87.5146 35.1267 88.3325 34.3619 88.9574 33.4471C89.6873 32.3794 90.2852 31.2261 90.7378 30.0128C91.2677 28.6903 91.7658 27.2345 92.3275 25.64L96.8792 11.0922H100V6.39941H92.6454Z" fill="white"/>
                    </svg>
            </h2>
            <nav className={"nav"}>
                <ul className={`nav__list ${ mobMenu ? 'nav__list--show' : ' '}`}>
                    <li className={"nav__el"}>
                        <NavLink
                            className={"nav__link"}
                            data-color={data.webdesign.color}
                            onClick={changeColor}
                            exact={true}
                            to="/">{data.webdesign.title}</NavLink>
                    </li>
                    <li className={"nav__el"}>
                        <NavLink
                            className={"nav__link"}
                            data-color={data.graphd.color}
                            onClick={changeColor}
                            to="/design">{data.graphd.title}</NavLink>
                    </li>
                    <li className={"nav__el"}>
                        <NavLink
                            className={"nav__link"}
                            data-color={data.print.color}
                            onClick={changeColor}
                            to="/print">{data.print.title}</NavLink>
                    </li>
                    <li className={"nav__el"}>
                        <NavLink
                            className={"nav__link"}
                            data-color={data.branding.color}
                            onClick={changeColor}
                            to="/branding">{data.branding.title}</NavLink>
                    </li>
                    <li className={"nav__el"}>
                        <NavLink
                            className={"nav__link"}
                            data-color={data.ui.color}
                            onClick={changeColor}
                            to="/ui">{data.ui.title}</NavLink>
                    </li>
                </ul>
            </nav>
            <AboutMe show={mobMenu} />
        </div>
    )
};

export default Nav;
