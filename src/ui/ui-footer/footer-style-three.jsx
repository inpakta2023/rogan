import Link from 'next/link';
import React from 'react';
import { SocialLinks } from '../../components/social-links';

const FooterStyleThree = () => {
  return (
    <footer className="theme-footer-three" data-aos="fade-up">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/assets/images/logo/logo3.svg" alt="" />
            </a>
          </Link>
        </div>
        <p><a href="#" className="email">boga.inc@company.com</a></p>
        <p><a href="#" className="phone">720.661.2231</a></p>
        <ul className="social-icon">
          <SocialLinks />
        </ul>
        <p>&copy; {new Date().getFullYear()} copyright all right reserved <a href="https://www.inpakta.com/">by INPAKTA</a></p>
      </div>
    </footer>
  );
};

export default FooterStyleThree;