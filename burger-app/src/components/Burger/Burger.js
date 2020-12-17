import React from "react";
import "./burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  const transformaedIn = Object.keys(props.ingredients).map((k) => {
    return [...Array(props.ingredients[k])].map((_, i) => {
      return <BurgerIngredient key={k + i} type={k} />;
    });
  }).reduce((arr,el)=>{
      return arr.concat(el);
  },[]);
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformaedIn.length ? transformaedIn: <p>Add some ingredients</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
