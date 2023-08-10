import React from "react";
import CategoryCard from "./CategoryCard";
import {Link} from "react-router-dom";

const CategoryList = ({categories}) => {
    return (
        <div className = "category-list">
            {categories.slice(0, 2).map(category => (
                <Link to = {"/wiki/" + category.routeLink}><CategoryCard id = {category.id} categoryData = {category}/></Link>
            ))}
            {categories.slice(2).map(category => (
                <CategoryCard id = {category.routeLink} categoryData = {category}/>
            ))}
        </div>
    );
};

export default CategoryList;