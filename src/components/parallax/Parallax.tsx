// Import necessary React hooks and GSAP library
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";

// Import CSS styles and images
import "./styles/styles.css";
import rv from "./assets/background/12.jpg";
import mountains2 from "./assets/background/IMG_4671.jpeg";
import image3 from "./assets/gradient/9.png";
import image4 from "./assets/gradient/8.png";
import Menu from "../menu/Menu";

// Define a type for the sections to ensure type safety
type Section = {
    title: string;
    image: string;
};

// Define the sections with their titles and corresponding images
const sections: Section[] = [
    { title: "Hi, my name is Klaudia", image: mountains2 },
    { title: "and is nice to meet you", image: image4 },
    { title: "Welcome on my portfolio", image: image3 },
    { title: "My tech stack", image: image4 },
    { title: "My hobby", image: rv },
];

// Define the Parallax component
const Parallax = () => {
    // Use the useEffect hook to initialize GSAP when the component mounts
    useEffect(() => {
        gsapInit();
    }, []);

    // Initialize GSAP and set up the parallax effect
    const gsapInit = () => {
        // Register the Observer plugin with GSAP
        gsap.registerPlugin(Observer);

        // Select all sections and images in the DOM
        const sections = document.querySelectorAll<HTMLDivElement>("section");
        const images = document.querySelectorAll<HTMLDivElement>(".bg");
        const outerWrappers = gsap.utils.toArray<HTMLDivElement>(".outer");
        const innerWrappers = gsap.utils.toArray<HTMLDivElement>(".inner");
        let currentIndex = -1;
        const wrap = gsap.utils.wrap(0, sections.length);
        let animating: boolean = false;

        // Set initial styles for the outer and inner wrappers
        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        // Define a function to navigate to a specific section
        const gotoSection = (index: number, direction: number) => {
            index = wrap(index);
            animating = true;
            const fromTop = direction === -1;
            const dFactor = fromTop ? -1 : 1;
            const tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => {
                    animating = false;
                },
            });

            // Animate the current section out and the new section in
            if (currentIndex >= 0) {
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
                    sections[currentIndex],
                    { autoAlpha: 0 }
                );
            }
            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo(
                [outerWrappers[index], innerWrappers[index]],
                { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
                { yPercent: 0 },
                0
            ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

            currentIndex = index;
        };

        // Set up the Observer to handle user interactions
        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1),
            onUp: () => !animating && gotoSection(currentIndex + 1, 1),
            tolerance: 10,
            preventDefault: true,
        });

        // Start at the first section
        gotoSection(0, 1);
    };

    // Render the sections with their titles and images
    return (
        <>
            <Menu />
            {sections.map((section) => (
                <section key={section.title}>
                    <div className="outer">
                        <div className="inner">
                            <div
                                className="bg one"
                                style={{ backgroundImage: `url(${section.image})` }}
                            >
                                <h2>{section.title}</h2>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

// Export the Parallax component
export default Parallax;
