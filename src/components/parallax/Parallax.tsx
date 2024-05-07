import React, {useEffect} from "react";
import gsap from "gsap";
import {Observer} from "gsap/all";
import "./styles/styles.css";
import rv from "./assets/background/12.jpg";
import mountains from "./assets/background/copy.jpeg";
import bg1 from "./assets/gradient/9.png";
import bg2 from "./assets/gradient/8.png";
import me from "./assets/hi_its_me.jpg";
import Menu from "../menu/Menu";
import Section, {ISection} from "../section/Section";
import {FaJava, FaReact} from "react-icons/fa";
import {BiLogoTypescript} from "react-icons/bi";
import {SiNestjs, SiRedux} from "react-icons/si";
import {DiNodejs} from "react-icons/di";
import {RiJavascriptFill} from "react-icons/ri";
import Card from "../card/Card";
import i18n from "../../i18n";

const sections: ISection[] = [
    {title: "hello", image: mountains},
    {title: "experience", image: bg2, additional: <img src={me} alt={'me'} className="me-img"/>},
    {title: "meet", image: bg1},
    {
        title: "techStack",
        image: bg2,
        additional: <div className="icons-space"><FaReact/><BiLogoTypescript/> <SiRedux/> <FaJava/> <RiJavascriptFill/>
        </div>
    },
    {title: "inProgress", image: bg1, additional: <div className="icons-space"><DiNodejs/> <SiNestjs/></div>},
    {
        title: "projects", image: bg1, additional:
            <div className={"card-row"}>
                <Card header={i18n.t("ebookRowerowy")} subHeader={i18n.t("ebookRowerowyDescription")}
                      linkTo={'https://ebook-rowerowy.pl'} linkLabel={i18n.t("checkIt")}/>
                <Card header={i18n.t("ebookRowerowyShop")} subHeader={i18n.t("ebookRowerowyShopDescription")}
                      linkTo={'https://sklep.ebook-rowerowy.pl'} linkLabel={i18n.t("checkIt")}/>
                <Card header={i18n.t("manianaa")} subHeader={i18n.t("manianaaDescription")}
                      linkTo={'https://manianaa.com'}
                      linkLabel={i18n.t("checkIt")}/>
                <Card header={i18n.t("calculator")} subHeader={i18n.t("calculatorDescription")}
                      linkTo={'https://kalkulator.manianaa.com'} linkLabel={i18n.t("checkIt")}/>
            </div>
    },
    {title: "hobby", image: rv},
];


const Parallax = () => {

    useEffect(() => {
        gsapInit();
    }, []);

    const gsapInit = () => {
        gsap.registerPlugin(Observer);

        const sections = document.querySelectorAll<HTMLDivElement>("section");
        const images = document.querySelectorAll<HTMLDivElement>(".bg");
        const outerWrappers = gsap.utils.toArray<HTMLDivElement>(".outer");
        const innerWrappers = gsap.utils.toArray<HTMLDivElement>(".inner");
        let currentIndex = -1;
        const wrap = gsap.utils.wrap(0, sections.length);
        let animating: boolean = false;

        gsap.set(outerWrappers, {yPercent: 100});
        gsap.set(innerWrappers, {yPercent: -100});

        const gotoSection = (index: number, direction: number) => {
            index = wrap(index);
            animating = true;
            const fromTop = direction === -1;
            const dFactor = fromTop ? -1 : 1;
            const tl = gsap.timeline({
                defaults: {duration: 1.25, ease: "power1.inOut"},
                onComplete: () => {
                    animating = false;
                },
            });

            if (currentIndex >= 0) {
                gsap.set(sections[currentIndex], {zIndex: 0});
                tl.to(images[currentIndex], {yPercent: -15 * dFactor}).set(
                    sections[currentIndex],
                    {autoAlpha: 0}
                );
            }
            gsap.set(sections[index], {autoAlpha: 1, zIndex: 1});
            tl.fromTo(
                [outerWrappers[index], innerWrappers[index]],
                {yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor)},
                {yPercent: 0},
                0
            ).fromTo(images[index], {yPercent: 15 * dFactor}, {yPercent: 0}, 0);

            currentIndex = index;
        };

        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1),
            onUp: () => !animating && gotoSection(currentIndex + 1, 1),
            tolerance: 10,
            preventDefault: true,
        });

        gotoSection(0, 1);
    };

    return (
        <>
            <Menu/>
            {sections.map((section) => (
                <Section key={section.title} {...section} />
            ))}
        </>
    );
};

export default Parallax;
