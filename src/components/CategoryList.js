import React, {useEffect, useState} from "react";
import {get} from "../api/base";
import CategoryItem from "./CategoryItem";

function CategoryView(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        get('/categories')
            .then((response) => {
                setList(response.data.categories);
            })
            .catch((err) => console.error('[CategoryList.jsx]', err.message));
    }, []);

    const handleItemClick = (item) => {
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


    return (content)

}

export default CategoryView;