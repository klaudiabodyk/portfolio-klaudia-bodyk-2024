import "swiper/css";
import "swiper/css/navigation";
import "./styles/styles.css";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {navs} from "./config/menuConfig";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const openClass = isOpen ? "open" : "";

    return (
        <>
            <div className={`background ${openClass}`}></div>
            <button className={`burger ${openClass}`} onClick={toggleMenu}></button>
            <div className={`menu ${openClass}`}>
                <Swiper speed={750} modules={[Navigation]} navigation>
                    {navs.map((nav) => (
                        <SwiperSlide>{nav}</SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
export default Menu;