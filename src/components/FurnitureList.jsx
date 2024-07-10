import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FurnitureList = () => {
  const { category } = useParams();
  const [furniture, setFurniture] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchFurniture() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/furniture?category=${category}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (!signal.aborted) {
          setFurniture(data);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error.message);
          console.log("Fetch error:", error);
        }
      }
    }

    fetchFurniture();

    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {furniture.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FurnitureList;
