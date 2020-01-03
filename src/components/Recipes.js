import React from "react";
import {Link} from 'react-router-dom';

const Recipes = (props) => {
  return( 
    <div className="recipe">
        {props.state.recipes.length <= 0 && <p>{props.state.err}</p>}
        { props.state.recipes.map((recipe)=> {
          return(
            <div key = {recipe.recipe.url}>
              <img src = {recipe.recipe.image} alt = {recipe.recipe.label}/>
              <p>{recipe.recipe.label.length>20? `${recipe.recipe.label.substring(0,25)}...`:recipe.recipe.label}</p>
              <button> 
                 <Link to = {{pathname:`/recipe/${recipe.recipe.label}`}}>View Recipe</Link>
              </button>
            </div>
          );
           
          })
        }
    </div>
  )
};


export default Recipes;