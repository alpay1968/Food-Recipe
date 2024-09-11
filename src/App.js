import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';
import Home from './Home'; // Yeni bir sayfa
import About from './About'; // Başka bir sayfa
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => {
  const APP_ID = "fb5eaa52";
  const APP_KEY = "e2a0664cd10f610688ea594bc405d189";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("burger");
  useEffect(() => {
    getRecipes();
  }, [query])
  const getRecipes = async () => {
    const response = await fetch
          (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data);

  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    console.log("e", e)
    setQuery(search);
    //setSearch("");
  }

  return (
    
    <div className="App">
          
      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search}
             onChange={updateSearch} />
        <button className="search-button" type="submit">
             yemek arat 
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            totalTime={recipe.recipe.totalTime}
            cuisineType={recipe.recipe.cuisineType}
          />

        ))}
      </div>

    </div>
  );
}



export default App;