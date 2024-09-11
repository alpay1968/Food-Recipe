import React from "react";
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,totalTime,cuisineType}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            
<p>Calories : {calories}</p>
<p>Time : {totalTime}</p>
<p>tip : {cuisineType}</p>
            <img className={style.image} src={image} alt=""/>

        </div>
    );

}
export default Recipe;