import React from "react";
import {Link} from 'react-router-dom';


class Recipe extends React.Component{

  state = { 
    activeRecipe:[] 
  }
 
  componentDidMount = async() => {
    const recipeToFind = this.props.match.params.id;
    console.log(recipeToFind);
    const request = await fetch(`https://api.edamam.com/search?q=${recipeToFind}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    const result = await request.json();
  
    this.setState({activeRecipe:result.hits[0]})   
   console.log(this.state.activeRecipe.recipe.image)
  }
  
  render() {
    console.log(this.state.activeRecipe)
    return(
      
      <div>
        { this.state.activeRecipe.length!==0 && 
        <div className="recipePage">
          <img src = {this.state.activeRecipe.recipe.image} alt = {this.state.activeRecipe.recipe.label}/>
          <h3>{this.state.activeRecipe.recipe.label}</h3>
          <p><span className="textdecoration">Website: </span> <a href={this.state.activeRecipe.recipe.url} target={"_blank"}>{this.state.activeRecipe.recipe.url}</a></p>
          <button><Link to="/">Go To Homepage</Link></button>
        </div>
          }  
      </div> 
    )
  }

}


export default Recipe;