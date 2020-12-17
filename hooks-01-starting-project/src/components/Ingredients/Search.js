import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [filter, setFilter] = useState("");
  const { loadedIngredients } = props;
  const inputRef = useRef();
  useEffect(() => {
    const tmmer = setTimeout(() => {
      if (filter === inputRef.current.value) {
        const q =
          filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;
        fetch(
          "https://react-hooks-demo-4fdb1.firebaseio.com/ingredients.json" + q
        )
          .then((resp) => {
            return resp.json();
          })
          .then((resp) => {
            const data = [];
            for (const k in resp) {
              data.push({
                id: k,
                title: resp[k].title,
                amount: resp[k].amount,
              });
            }
            loadedIngredients(data);
          });
      }
      return () => {
        clearTimeout(tmmer);  
      }
    }, 800);
  }, [filter, loadedIngredients,inputRef]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
