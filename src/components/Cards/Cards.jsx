import Card from './Card';
import foodItems from './FoodItems';

const Cards = () => {
    return (
        <div className="flex justify-center items-center flex-wrap gap-5">
            {foodItems.map((foodItem) => (
                <Card key={foodItem.foodId} foodItem={foodItem}></Card>
            ))}
        </div>
    );
};

export default Cards;