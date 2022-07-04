import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__title">Brittany</h1>
                    <span class="footer__subtitle">Frontend Developer</span>
                </div>

                <ul class="footer__links">
                    <li>
                        <a href="#services" class="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer__link">Contact</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" class="footer__social">
                        <i class="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" class="footer__social">
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer" class="footer__social">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>

            <p class="footer__copy">Mapped  Developed by Brittany Young.</p>
        </div>
    </footer>
    )
}

export default Footer;