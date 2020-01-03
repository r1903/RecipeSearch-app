import React from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";



class App extends React.Component{

  state = { 
      recipes:[],
      err :"" 
  };
 
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipe.value;
    e.preventDefault();
      if(recipeName){
          const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=10`)
          const data = await api_call.json();
          console.log(data)
          if(data.hits.length>1) {
            this.setState({recipes:data.hits, err:""}) 
          }
          else{
            this.setState({recipes:[], err:"Recepies with this name does not exist"})
          }
      }else {
          this.setState({recipes:[],err:"Please enter the Recipe name"})  
            }
      }

  componentDidMount = () => {
    const item = localStorage.getItem("recipes");
    const recipes = JSON.parse(item);
    this.setState({recipes:recipes || [] });
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem ("recipes",recipes);
  }


  render() {
    return(
      <div className="wrapper">
        <h1 className="header">Recipe search</h1>
        <Form getRecipe={this.getRecipe} />
        <Recipes state={this.state} />
      </div>
    )
  }

}

export default App;
