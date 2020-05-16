import React, {useEffect, useState} from 'react';
import {get} from "../api/base";

function Joke({selectedCategory}) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        get('/joke/' + selectedCategory + '?type=single')
            .then((response) => {
                setItem(response.data)
                console.log(response)
            })
            .catch((err) => console.error('[CategoryList.jsx]', err.message))
    }, [selectedCategory]);


    if (item != null) {
        return (
            <div>
                {item.joke}
            </div>
        );
    } else {
        return null;
    }

}

export default Joke;