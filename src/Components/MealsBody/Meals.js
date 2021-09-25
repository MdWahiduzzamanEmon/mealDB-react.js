import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState([])
    const [displayMeals,setDispalyMeals]=useState([])
    // console.log(meals);
     /*  useEffect(() => {
        fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
        )
          .then((res) => res.json())
            .then((data) => {
                setMeals(data.meals);
            });
      }, []); */
    
    const handleMealName = (meal) => {
        setMealName(meal);
    }
    const searchByName = (event) => {
        if (event.key === "Enter") {
            const searchText = event.target.value;
            setDispalyMeals(searchText);
        }
        
    }
    useEffect(() => {
        fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + displayMeals
        )
            .then((res) => res.json())
            .then((data) => {
                setMeals(data.meals);
                if (data.meals == null) {
                    return;
                }
            });
        
    }, [displayMeals]);

    return (
      <div>
        <section>
          <div>
            <div className="input-field py-3">
              <h2>Get-Meal</h2>
              <input
                type="text"
                placeholder="Search meal..."
                onKeyPress={searchByName}
                // value={displayMeals}
              />
            </div>
          </div>
          <div className="meals-body">
            <div className="meals">
              {meals.map((meal) => (
                <Meal
                  key={meal.idMeal}
                  meal={meal}
                  handelMealName={handleMealName}
                ></Meal>
              ))}
            </div>

            <div className="name-section fw-bold">
              <h2>Meal Name: {mealName.strMeal}</h2>
              <h3>Instructions: {mealName.strInstructions}</h3>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Meals;