import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "hello": "Hello, I'm Klaudia",
                    "experience": "Software developer with over 3 years of experience",
                    "meet": "It's nice to meet you",
                    "techStack": "My tech stack",
                    "inProgress": "In progress",
                    "projects": "My projects",
                    "hobby": "My hobby",
                    "contact": "Contact",
                    "github": "GitHub",
                    "email": "Email",
                    "instagram": "Instagram",
                    "linkedin": "LinkedIn",
                    "githubLink": "https://github.com/klaudiabodyk",
                    "emailLink": "mailto:klaudia.bodyk@icloud.com",
                    "instagramLink": "https://www.instagram.com/kidianna/",
                    "linkedinLink": "https://www.linkedin.com/in/klaudia-bodyk/",
                    "ebookRowerowy": "E-book rowerowy",
                    "ebookRowerowyDescription": "The homepage of our ebook store. Dive into a plethora of ebooks covering everything from bike maintenance",
                    "ebookRowerowyShop": "E-book rowerowy - Shop",
                    "ebookRowerowyShopDescription": "Pedal into a world of cycling knowledge with the online ebook store. Enhance your riding experience!",
                    "manianaa": "Manianaa.com",
                    "manianaaDescription": "Embark on a dietary journey with me! Explore the flexible approach to nutrition through our ebook store.",
                    "calculator": "Calorie Needs Calculator",
                    "calculatorDescription": "Calculate your calorie needs to determine the appropriate calorie intake for yourself.",
                    "checkIt": "Check it"
                }
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        }
    }).then(r => console.log("i18n initialized"));

export default i18n;