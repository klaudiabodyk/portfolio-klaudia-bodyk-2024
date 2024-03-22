import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useTranslation } from 'react-i18next';
import { navs } from "./config/menuConfig";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/styles.css";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const openClass = isOpen ? "open" : "";
    const { t } = useTranslation();

    return (
        <>
            <div className={`background ${openClass}`}></div>
            <button className={`burger ${openClass}`} onClick={toggleMenu}></button>
            <div className={`menu ${openClass}`}>
                <Swiper speed={750} modules={[Navigation]} navigation>
                    {navs.map((nav) => (
                        <SwiperSlide key={nav.title}>
                            <h2>{t(nav.title)}</h2>
                            <nav>
                                {nav.links.map((link) => (
                                    <a key={link.name} href={t(link.url)} style={{ animationDelay: `${0.7 + nav.links.indexOf(link) * 0.1}s` }}>
                                        {t(link.name)}
                                    </a>
                                ))}
                            </nav>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Menu;