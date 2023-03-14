import React from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";

import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { useEffect } from "react";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Sydney",
    location: "Australia",
    grade: "Metropolitan relax",
    fees: "$500",
    description:
      "Sydney is the largest city in Australia and best known for its harbour bridge and opera house.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "Cultural relax",
    fees: "$600",
    description:
      "Machu Picchu is called the lost city if Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "Cultural relax",
    fees: "$700",
    description:
      "This is one of the remarkable Australian natural gifts and is absolutely beautiful. Always one of the top placers to go among tourists",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "Cultural relax",
    fees: "$400",
    description:
      "Locating in the center of Europe and Asia, it is always a popular place to visit and according to report, there are about 2 million tourists visit it every year.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "The forbidden city",
    location: "China",
    grade: "Historical relax",
    fees: "$300",
    description:
      "THis used to be the living are for the emperiors for nearly 600 years in China, and the buildings are spectecular when viewing from the mountain.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinqu Terre",
    location: "Italy",
    grade: "Cultural relax",
    fees: "$500",
    description:
      "The vibrant hues of the house are its benchamrk and explain the beauty of this place.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Kuala Lumpur",
    location: "Malaysia",
    grade: "Cultural relax",
    fees: "$300",
    descrpition:
      "Kuala Lumpur is one the biggest cities in southeast asia, there are lots of things you can do in the capital city.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Havana",
    location: "Cuba",
    grade: "Cultural relax",
    fees: "$300",
    description: "Havana is one of the most popular destinations in the world.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali island",
    location: "Indonesia",
    grade: "Cultural relax",
    fees: "$400",
    description:
      "Bali is an island in Indonesia and one the best holiday destination in the world.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
