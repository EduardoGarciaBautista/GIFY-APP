import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";


export const GifExpertApp = () => {


    const [categories, setcategories] = useState(['GOKU']);

    return (
        <>
            <h2>Gif Expert</h2>
            <AddCategory setcategories={setcategories} />
            <hr />

            <ol>
                {categories.map(item => {
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
