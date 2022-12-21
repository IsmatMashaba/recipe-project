import React, {useState,useEffect} from "react";
import "./App.css";



import {Routes,Route} from "react-router-dom";
import {NavBar} from './Components/NavBar';
import Home from './Pages/Home'
import {RecipePage} from "./Pages/RecipePage";
import FavoriteRecipes from "./Pages/FavouriteRecipes";
import Contact from "./Pages/Contact";


//step1 : define the states:2
//fetch data : {meals : [{Recipe}]}
//type of the data

export type Recipe = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strInstructions: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string
}


function App() {
  const [userInput,setUserInput]= useState('')
  const [recipes,setRecipes] = useState<Recipe[]>([])
  const [favRecipe,setFavRecipes]=useState<Recipe[]>([])

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.meals);
        });
  }, [url]);
console.log(userInput)

  return <div className="App">

    <NavBar favRecipe={favRecipe}/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/recipe' element={
        <RecipePage
            recipes ={recipes}
            setUserInput = {setUserInput}
            setFavRecipes={setFavRecipes}
            favRecipe={favRecipe}
        />
      }/>
      <Route path='/favorite' element={
        <FavoriteRecipes
            favRecipe={favRecipe}
        />}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

  </div>;
}

export default App;
