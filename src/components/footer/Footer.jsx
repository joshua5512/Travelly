import React from "react";
import "./Footer.css";
import video2 from "../../assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter email address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv className="icon" />
                Travelly
              </a>
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <RxTwitterLogo className="icon" />
              <FiYoutube className="icon" />
              <FaInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group1 */}
            <div
              data-aos="fade-up"
              data-aop-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* group2 */}
            <div
              data-aos="fade-up"
              data-aop-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* group3 */}
            <div
              data-aos="fade-up"
              data-aop-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">Last Minute Deals</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Australia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                North & South American
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Asia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Africa
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Travelly Australia</small>
            <small>Copy right @2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
