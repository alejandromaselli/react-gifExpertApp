import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    return (
        <div>
            <h2 id='title'>GifExpertApp</h2>
            <AddCategory
                setCategoris={setCategories}
                categoris={categories}
            />
            <hr />
            {
                <ol>{
                    categories.map((element, index) => {
                        return (
                            <GifGrid
                                key={element}
                                category={element}
                            />
                        )
                    })
                }</ol>
            }
        </div>
    );
}

export default GifExpertApp;