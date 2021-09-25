import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee} from "@fortawesome/free-solid-svg-icons";
const Meal = (props) => {
    // console.log(props);
    const { strMealThumb, strCategory, strInstructions, strMeal } = props.meal;
    return (
      <div className="">
        <img src={strMealThumb} alt="food img" />
        <div>
          <h2>Name: {strMeal}</h2>
          <h5>Category: {strCategory}</h5>
          <p>Instructions: {strInstructions.slice(0, 80)}</p>
        </div>
        <button
          className="btn btn-warning"
          onClick={() => props.handelMealName(props.meal)}
        >
          <FontAwesomeIcon icon={faCoffee} />
          <span className="ms-2">Meal Name</span>
        </button>
      </div>
    );
};

export default Meal;