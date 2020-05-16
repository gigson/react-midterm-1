import {get} from '../api/base';
import React, {useEffect, useState} from 'react';
import CategoryItem from "./CategoryItem";
import Joke from "./Joke";

function JokeList(props) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [list, setList] = useState([]);

    useEffect(() => {
        get('/categories')
            .then((response) => {
                setList(response.data.categories);
                setSelectedCategory(response.data.categories[0])
            })
            .catch((err) => console.error('[CategoryList.jsx]', err.message));
    }, []);

    const handleItemClick = (item) => {
        setSelectedCategory(item);
    };


    let content = list.map((item) => {
        return (
            <CategoryItem
                item={item}
                handleItemClick={() => {
                    handleItemClick(item);
                }}
            />
        );
    });

    let joke = <div>
        {selectedCategory && <Joke selectedCategory={selectedCategory}/>}
    </div>;

    return [
        content,
        joke
    ];

}

export default JokeList;