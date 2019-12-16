import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Component/Home/Home';
import AboutUs from './Component/AboutUs/AboutUs';
import Contacts from './Component/Contacts/Contacts'
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/checkout" exact component={AboutUs}/>
                    <Route path="/checkout/contact" component={Contacts}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;