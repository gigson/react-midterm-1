import React, {useEffect, useState} from "react";
import {get} from "../api/base";

function Info(props) {
    const [jokeCount, setJokeCount] = useState(null);

    useEffect(() => {
        get('/info')
            .then((response) => {
                setJokeCount(response.data.jokes.totalCount)
            })
            .catch((err) => console.error('[CategoryList.jsx]', err.message));
    }, []);


    return(
        <div>
            total jokes: {jokeCount}
        </div>
    )

}

export default Info;