import React, {useContext} from 'react';
import {AuthContext} from './context/authContext';

import './App.css';
import Login from "./components/form/login";
import JokeList from "./components/JokeList";
import Info from "./components/Info";
import SubmitJoke from "./components/form/SubmitJoke";
import CategoryList from "./components/CategoryList";

function App() {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <div className="container">
            <Info/>
            {!isAuthenticated && <Login/>}
            {!isAuthenticated && <CategoryList/>}
            {isAuthenticated && <JokeList/>}
            {isAuthenticated && <SubmitJoke/>}
        </div>
    );
}

export default App;
