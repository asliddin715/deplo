import React from 'react';
import { useEffect, useState } from 'react';

const Chair = () => {
    const [furniture, setFurniture] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchFurniture() {
            try {
                const response = await fetch(`http://localhost:3000/furniture`, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setFurniture(data);
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
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {furniture ? (
                <ul>
                    {furniture.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Chair;
