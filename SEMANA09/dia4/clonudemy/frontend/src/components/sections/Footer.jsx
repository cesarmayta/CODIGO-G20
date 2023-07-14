import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Curve from "../shared/Curve";

const Footer = () => {
  return (
    <footer className="footer">
      <Curve rotate color="#e2e8f0" />
      <nav className="nav nav--footer">
        <div className="container nav-container nav-container--footer">
          <p className="nav__about">
            <span className="nav__about nav__about--courses">Courster</span> is
            a unique and beautiful collection of UI elements that are all
            flexible and modular. A complete and customizable solution to
            building the website of your dreams.
          </p>

          <ul className="menu menu--footer" aria-label="Company">
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Profile
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Settings
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Billing
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Notifications
              </Link>
            </li>
          </ul>
          <ul className="menu menu--footer" aria-label="About">
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Services
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Contact
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Careers
              </Link>
            </li>
          </ul>
          <ul className="menu menu--footer" aria-label="Company">
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Terms
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Privacy
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__item__link menu__item__link--footer"
                href="#"
              >
                Support
              </Link>
            </li>
          </ul>

          <section className="nav__contact">
            <div className="nav__contact-container">
              <h3 className="nav__contact__copyright">
                © 2023 Courster. All rights reserved.
              </h3>
              <ul className="menu menu--footer menu--footer-socials-networks">
                <li className="menu__item">
                  <Link
                    className="menu__item__link menu__item__link--footer"
                    href="#"
                  >
                    <FaFacebookF size={20} color="#a0aec0ff" />
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    className="menu__item__link menu__item__link--footer"
                    href="#"
                  >
                    <BsTwitter size={20} color="#a0aec0ff" />
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    className="menu__item__link menu__item__link--footer"
                    href="#"
                  >
                    <AiOutlineGoogle size={20} color="#a0aec0ff" />
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
