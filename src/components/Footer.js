import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
                <div>
                    <h1 className="footer__title">Brittany</h1>
                    <span className="footer__subtitle">Frontend Developer</span>
                </div>

                <ul className="footer__links">
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social">
                        <i className="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="footer__social">
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer" className="footer__social">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>

            <p className="footer__copy">Mapped <div dangerouslySetInnerHTML={{ __html: "&" }}></div> Developed by Brittany Young.</p>
        </div>
    </footer>
    )
}

export default Footer;