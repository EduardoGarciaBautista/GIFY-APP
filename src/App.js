import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";


export const GifExpertApp = ({ defaultCategories = [] }) => {


    const [categories, setcategories] = useState(defaultCategories);

    return (
        <div className="principal-container">
            <div className="header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                <h2>GIPHY FINDER</h2>
                <AddCategory setcategories={setcategories} />
            
            </div>
            <div className="space"/>

            <div className="body-card">
            <ol>
                {categories && categories.map(item => {
                    return (
                        <GifGrid
                            key={item}
                            category={item}
                        />
                    )
                })
                }
            </ol>
            </div>
        </div>
    )
}
