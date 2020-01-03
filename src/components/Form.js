import React from "react";


const Form = (props) => {
    return(
      <form onSubmit={props.getRecipe} className="form">
          <input type="text" name="recipe" placeholder="Recipe Name..."></input>
          <button>Submit</button>
      </form>

    )
}


export default Form;