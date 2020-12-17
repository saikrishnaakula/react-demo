import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [userIngre, setUserIngre] = useState([]);

  // useEffect(() => {
  //   fetch("https://react-hooks-demo-4fdb1.firebaseio.com/ingredients.json")
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((resp) => {
  //       const data = [];
  //       for (const k in resp) {
  //         data.push({ id: k, title: resp[k].title, amount: resp[k].amount });
  //       }
  //       setUserIngre(data);
  //     });
  // }, []);

  const addIngre = (i) => {
    fetch("https://react-hooks-demo-4fdb1.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(i),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setUserIngre((prev) => [...prev, { id: resp.name, ...i }]);
      });
  };
  const filteredIngredients = useCallback((i) => {
    setUserIngre(i);
  }, []);
  const rmIngr = iId => {
    fetch(`https://react-hooks-demo-4fdb1.firebaseio.com/ingredients/${iId}.json`, {
      method: "DELETE",
    });
      
  }
  return (
    <div className="App">
      <IngredientForm addIngre={addIngre} />

      <section>
        <Search loadedIngredients={filteredIngredients} />
        <IngredientList ingredients={userIngre} onRemoveItem={rmIngr} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
};

export default Ingredients;
