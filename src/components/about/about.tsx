import { useLocation } from 'react-router';
import cv from '../../images/Kseniia-Kurishchenko-cv.pdf';

function About(): JSX.Element {
    const location = useLocation();

    const socialList = [
        {
            name: 'twitter',
            link: 'https://twitter.com/kkurishchenko',
            img: 'img/twitter.svg',
        },
        {
            name: 'in',
            link: 'https://www.linkedin.com/in/kseniia-kurishchenko-863425205',
            img: 'img/in.svg',
        },
        {
            name: 'researchGate',
            link: 'https://www.researchgate.net/profile/Kseniia-Kurishchenko',
            img: 'img/researchGate.svg',
        },
        {
            name: 'email',
            link: 'mailto:kk.eco@cbs.dk',
            img: 'img/mail.svg',
        }
    ]

    if (location.pathname !== "/" && window.innerWidth < 490) {
        return (
            <>
            </>
        )
    }
    else {
        return (
            <div className="about">
                <img className="about-img" src="img/portrait.webp" alt="Kseniia Kurishchenko" />
                <h1 className="about-title">Kseniia Kurishchenko</h1>
                <p className="about-text">Job Market candidate 2023/2024 at the Department of Economics, Copenhagen Business School</p>
                <ul className="social-list">
                    <li className="social-item">
                        <a className="social-link" href={cv} download="Kseniia-Kurishchenko-cv">
                            <object
                                className="src"
                                type="image/svg+xml"
                                data="img/cv.svg"
                                width="35">
                                <img
                                    src="img/cv.svg" alt="cv icon" />
                            </object>
                        </a>
                    </li>
                    {socialList.map(item => (
                        <li className="social-item" key={item.name}>
                            <a className="social-link" href={item.link} target="_blank" rel="noreferrer">
                                <object
                                    className="src"
                                    type="image/svg+xml"
                                    data={item.img}
                                    width="35">
                                    <img
                                        src={item.img} alt={item.name} />
                                </object>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default About;