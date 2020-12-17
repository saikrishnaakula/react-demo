import React from 'react';
import './BurgerIngredient.css'

const BurgerIngredient = (props) => {
    let ingre = null;
    switch(props.type) {
        case ('bread-bottom'):
            ingre =<div className="BreadBottom"></div>;
            break;
        case ('bread-top'):
            ingre =(<div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>);
            break;
        case ('meat'):
            ingre =<div className="Meat"></div>;
            break;
        case ('cheese'):
            ingre =<div className="Cheese"></div>;
            break;
        case ('salad'):
            ingre =<div className="Salad"></div>;
            break;
        case ('bacon'):
            ingre =<div className="Bacon"></div>;
            break;
        default:
            ingre =null;
            break;

    }
    return ingre;
};


export default BurgerIngredient;