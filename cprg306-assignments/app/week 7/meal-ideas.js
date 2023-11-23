import React, { useState, useEffect } from 'react';

// Define the MealIdeas component
const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
        const cleanedIngredient = ingredient.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]).*$/g,
            ''
        );
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(cleanedIngredient)}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error('Error fetching meal ideas:', error);
        return [];
    }
};

    // Define the function to load meal ideas
    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
      };

  // Use the useEffect hook to load meal ideas whenever the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the component
  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      {meals && meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas available.</p>
            )}
        </div>
    );
};

export default MealIdeas;
