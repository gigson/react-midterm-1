import React, {useEffect, useState} from "react";
import {get} from "../api/base";
import CategoryItem from "./CategoryItem";

function CategoryList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        get('/categories')
            .then((response) => {
                setList(response.data.categories);
            })
            .catch((err) => console.error('[CategoryList.jsx]', err.message));
    }, []);


    let content = list.map((item) => {
        return (
            <div>
                <CategoryItem
                    item={item}
                />
            </div>
        );
    });


    return (content)

}

export default CategoryList;