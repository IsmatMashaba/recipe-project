import React from "react";

import {Recipe} from "../App";
import RecipeItem from "./RecipeItem";

type Prop={
    recipes:Recipe[]
    setFavRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
    favRecipe:Recipe[]
}
export default function Recipes({recipes,setFavRecipes,favRecipe}:Prop){
    if(!recipes){
        return <div>
            Sorry we have not got this recipe yet!
        </div>
    }
    return (
        <div className='meals'>

            {recipes.map((item)=>
              <RecipeItem
                  recipeItem={item}
                  setFavRecipes={setFavRecipes}
                  favRecipe={favRecipe}
              />
            )}
        </div>
    )
}
