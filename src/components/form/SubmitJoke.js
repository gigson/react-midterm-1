import React, {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {get, put} from "../../api/base";

function SubmitJoke(props) {
    const {errors, handleSubmit, register, watch} = useForm();
    const [list, setList] = useState([]);

    useEffect(() => {
        get('/categories')
            .then((response) => {
                setList(response.data.categories.slice(1));
            })
            .catch((err) => console.error('[CategoryList.jsx]', err.message));
    }, []);

    const onSubmit = (data) => {
        console.log(data);

        let params = {
            "formatVersion": 2,
            "category": data.category,
            "type": "single",
            "joke": data.joke,
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false
            }
        }

        put('/submit', params)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => console.error('[CategoryList.jsx]', err.message));
    };

    const formRef = useRef(null);

    let categorySelect = list.map((item) => {
        return (
            <option value={item}>{item}</option>
        );
    });

    return (
        <div>
            <h3>Submit a new joke:</h3>
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <div>
                    <label htmlFor="category">category</label>
                    <select id="category" name="category" ref={register({required: true})}>
                        {categorySelect}
                    </select>
                </div>
                <div>
                    <label htmlFor="joke">joke</label>
                    <input
                        type="text"
                        className="form-control"
                        id="joke"
                        aria-describedby="emailHelp"
                        name="joke"
                        ref={register({required: true})}
                    />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SubmitJoke;