import React from 'react';
import classes from './Sections.module.css';
import sectionImg from './../assets/bilder/sectionImg.jpg';
import { Submit } from './Submit';
const sections = [

    {
        id: 1,
        h2: "Erhalten Sie ganz einfach bis zu 380 € Prämie für Ihr Elektroauto",
        bild: {
            id: 1,
            alt: "eAuto-Taschengeld – Jetzt schnell beantragen."
        },

        content: [
            {
                id: 2,
                h3: "Zusätzliches Geld, dank Ihrem Elektroauto",
                text: "Die Elektromobilität ist weiterhin auf dem Vormarsch, dies auch aus gutem Grund - z.B. um gegenüber herkömmlichen Verbrennungsmotoren die Treibhausgase einzusparen. Dafür gibt es die Treibhausgasminderungsquote, kurz THG-Quote. Das ist nicht nur für unsere Umwelt gut, sondern auch für Ihren Geldbeutel. So erhalten Sie vollkommen kostenlos und die Möglichkeit, garantiert die Quote zu erhalten - bis zu 380 € für Ihr Elektrofahrzeug. Diese Prämie kann jährlich wieder beantragt werden."
            },
            {
                id: 3,
                h3: "Was müssen Sie tun?",
                text: "Sobald Sie ein eAuto besitzen, können Sie in drei einfachen Schritten Ihre THG-Prämie beantragen - unkompliziert und kostenlos! Laden Sie dazu einfach Ihren Fahrzeugschein hoch, füllen Sie das Formular aus und schon erhalten Sie Ihre Prämie über das Portal 'Geld für eAuto'."
            },
        ]
    },
    {
        id: 2,
        h2: "'Sehr Gut' - Auszeichnung für den THG-Partner 'Geld für eAuto'",

        content: [
            {
                h3: "Die Plattform für eAuto und die innovative Vision",
                text: "Das Unternehmen mit den Hamburger Wurzeln hat es sich zur Aufgabe gemacht, die eMobilität voranzutreiben und den emissionsfreien Verkehr zu fördern. Aus diesem Grund setzt sich das Team von Geld für eAuto aktiv dafür ein, die THG Prämie für seine Nutzer zugänglich zu machen. Im Kern stellt die Plattform intelligente, digitale Lösungen zur Verfügung, die es Haltern von Elektrofahrzeugen ermöglichen, mit minimalem Aufwand vom THG-Quotenhandel mit Strom zu profitieren.",
            },
            {
                text: "Nicht nur die Nutzer sind von der Geld für eAuto Plattform überzeugt. Auch das Fachmagazin 'electricar' zeichnete die Plattform im ersten Quartal 2023 mit 'Sehr gut' aus."
            }
        ]
    }
];

const Sections = () => {
    const filteredSection1 = sections.filter((section) => section.id === 1);
    const filteredSection2 = sections.filter((section) => section.id === 2);
    return (
        <>
            {filteredSection1.map((section) => (
                <section key={section.id} className={classes.top}>
                    <h2>{section.h2}</h2>
                    <div className={classes.left}>
                        <div className={classes.contentWrapper}>
                        <div className={classes.leftTop}>
                            <h3>{section.content[0].h3}</h3>
                            <p>{section.content[0].text}</p>
                        </div>
                        <div className={classes.leftBottom}>
                            <h3>{section.content[1].h3}</h3>
                            <p>{section.content[1].text}</p>
                        </div>
                        </div>
                        <Submit />
                    </div>
                    
                </section>
            ))}
            <>
                {filteredSection2.map((section) => (
                    <section key={section.id} className={classes.bottom}>
                        <h2>{section.h2}</h2>
                        <div className={classes.contentLeft}>
                            <h3>{section.content[0].h3}</h3>
                            <p>{section.content[0].text}</p>
                            <br />
                            <p>{section.content[1].text}</p>
                        </div>
                        <img src={sectionImg} alt="Auszeichnung Sehr gut von electricar" />
                    </section>
                ))}
            </>
        </>
    );
};

export default Sections;
