// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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