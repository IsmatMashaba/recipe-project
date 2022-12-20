import React from "react";
import {Recipe} from "../App";
import FavouriteItem from "../Components/FavouriteItem";

type Prop={
    favRecipe:Recipe[]
}

export default function FavoriteRecipes({ favRecipe }: Prop) {
    if (favRecipe.length === 0)
        return <div> You do not have favorite recipe yet !</div>;
    return (
        <div>
            <h1> Favorite Recipe List</h1>
            {favRecipe.map((item) => (
                <FavouriteItem item={item} />
            ))}
        </div>
    );
}
