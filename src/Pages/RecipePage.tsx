import React from "react";

import {Recipe} from "../App";
import Recipes from "../Components/Recipes";
import SearchForm from "../Components/SearchForm";

type Prop = {
recipes:Recipe[]
    setUserInput: React.Dispatch<React.SetStateAction<string>>
    setFavRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
    favRecipe:Recipe[]
}
export function RecipePage({recipes, setUserInput, setFavRecipes,favRecipe}:Prop){
    return (
        <div>
            <SearchForm setUserInput={setUserInput} />
            <Recipes
                recipes={recipes}
                setFavRecipes={setFavRecipes}
                favRecipe={favRecipe}
            />

        </div>
    )
}
