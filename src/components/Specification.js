import React from "react";

const specifications = [
  {
    imgSrc: "./img/clinical.png",
    altText: "clinically studied",
    title: "Clinically Studied",
    description: "All products that we offer have undergone lab and safety tests",
  },
  {
    imgSrc: "./img/veg.png",
    altText: "veg",
    title: "Vegetarian Friendly",
    description: "We have a wide selection of vegetarian products to meet your needs",
  },
  {
    imgSrc: "./img/india.png",
    altText: "india",
    title: "Made in India",
    description: "Shop local and explore health products made right here in India",
  },
  {
    imgSrc: "./img/ship.png",
    altText: "ship",
    title: "Free Shipping",
    description: "We deliver to your door with no shipping costs on your orders",
  },
  {
    imgSrc: "./img/risk.png",
    altText: "risk",
    title: "No Risk",
    description: "We ensure that all products are safe and within their use-by date",
  },
  {
    imgSrc: "./img/gmo.png",
    altText: "gmo",
    title: "GMO Free",
    description: "Natural, no modified products and derivatives for those who need it",
  },
];

const SpecificationItem = ({ imgSrc, altText, title, description }) => (
  <div className="specify">
    <img src={imgSrc} alt={altText} />
    <p className="s1">{title}</p>
    <p className="s2">{description}</p>
  </div>
);

export default function Specification() {
  return (
    <div className="specification-container">
      <div className="specification-top">
        {specifications.slice(0, 3).map((spec, index) => (
          <SpecificationItem key={index} {...spec} />
        ))}
      </div>
      <div className="specification-bottom">
        {specifications.slice(3).map((spec, index) => (
          <SpecificationItem key={index} {...spec} />
        ))}
      </div>
    </div>
  );
}
