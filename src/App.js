import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import  GifGrid  from "./Components/GifGrid";


export const GifExpertApp = ({defaultCategories = []}) => {


    const [categories, setcategories] = useState(defaultCategories);

    return (
        <>
            <h2>Gif Expert</h2>
            <AddCategory setcategories={setcategories} />
            <hr />

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

        </>
    )
}
