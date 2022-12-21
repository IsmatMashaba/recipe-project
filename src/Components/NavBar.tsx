import React from "react";

import {Link} from "react-router-dom";
import logo from '../assets/chef.png';
import {Recipe} from "../App";

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';





type Prop={
    favRecipe:Recipe[]
}
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -8,
        top: 1,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

export function NavBar({favRecipe}:Prop){
    const favCount=favRecipe.length
    return (

        <div>

            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" height="50px" width="50px" />
                    <h1 className="logoTitle">Yummy</h1>
                </div>
                <div className="subNav">
                    <Link className="link" to="">
                        Home
                    </Link>
                    <Link className="link" to="/recipe">
                        Recipe
                    </Link>
                    <StyledBadge badgeContent={favCount}>
                        <Link className="link" to="/favorite">
                            FavoriteRecipes
                        </Link>
                    </StyledBadge>

                    <Link className="link" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>


        </div>

    )
}
