import React from "react";

const Ingredient = ({ title, description }) => (
  <div className="ingredient" data-name={title}>
    <p className="p1">{title}</p>
    <p className="p2">{description}</p>
    <p className="p3">See more</p>
  </div>
);

export default function Ingredients() {

  const ingredientData = [
    { title: "Vitamin C", description: "Vitamin C as ascorbic acid" },
    { title: "Vitamin B3", description: "Niacin for healthy gut and skin" },
    { title: "Magnesium", description: "Boost energy and support muscle function"},
    { title: "Hyaluronic Acid", description: "For smooth, supple and soft skin!"},
    { title: "Lactobacillus", description: "Invigorate your gut microbiome" },
  ];

  return (
    <div className="ingredients-container">
      <div className="ingredients-top">
        <div className="ingredient-text">
          <p className="heading">INGREDIENTS</p>
          <p className="subheading">Better Ingredients</p>
          <p className="desc">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </p>
        </div>
        {ingredientData.slice(0, 2).map((ingredient, index) => (
          <Ingredient key={index} {...ingredient} />
        ))}
      </div>

      <div className="ingredients-bottom">
        {ingredientData.slice(2).map((ingredient, index) => (
          <Ingredient key={index} {...ingredient} />
        ))}
        <img src="./img/edge.png" alt="edge" className="edge"/>
      </div>
    </div>
  );
}
