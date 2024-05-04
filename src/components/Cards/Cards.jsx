/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [foodItems, setFoodItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/food-items', {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }).then(res=>res.json()).then(data=> setFoodItems(data))
    },[])
    return (
        <div className="flex justify-center items-center flex-wrap gap-5">
            {foodItems.map((foodItem) => (
                <Card key={foodItem.foodId} foodItem={foodItem}></Card>
            ))}
        </div>
    );
};

export default Cards;