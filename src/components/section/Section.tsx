import React from 'react';
import { useTranslation } from 'react-i18next';

export type ISection = {
    title: string;
    image: string;
    additional?: any;
};
const Section = ({ title, image, additional }: ISection) => {
    const { t } = useTranslation();
    return (
        <section data-testid={`section-${title}`}>
            <div className="outer">
                <div className="inner">
                    <div
                        className="bg one"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <h2>{t(title)}</h2>
                        <div className={"icons"}>{additional}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
