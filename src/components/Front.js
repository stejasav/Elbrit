import React from "react";

const ProfitItem = ({ image, title, description }) => (
  <div className="profits">
    <img src={image} alt={title} />
    <div>
      <p className="elements">{title}</p>
      <p className="element-info">{description}</p>
    </div>
  </div>
);

export default function Front() {
  const profitItems = [
    { image: "/img/vitamins.png", title: "Vitamins", description: "Increased vitamins and minerals in your diet"},
    { image: "/img/weight.png", title: "Weight Loss", description: "Find scientifically proven solutions"},
    { image: "/img/food.png", title: "Functional Foods", description: "From protein powders to baby formula"}
  ];

  return (
    <div className="blue">
      <h1>Essential Vitamins</h1>
      <img src="./img/probiotics.png" alt="probiotics" className="probiotic"/>
      <div className="info1-container">
        <p className="info1">Online Medical Supplies</p>
        <p className="info2">Get Your Vitamins & Minerals</p>
        <button>Explore</button>
      </div>

      <div className="info2-container">
        {profitItems.map((item, index) => (
          <ProfitItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          />
        ))}
      </div>
      <img src="./img/circle.png" alt="circle" className="circle1"/>
      <img src="./img/circle.png" alt="circle" className="circle2"/>

    </div>
  );
}
