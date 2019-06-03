import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UtilitiesLayout from './utilities/utilitiespage'
import MainPage from './mainpage'

const App = () => {
    return (
            <MainPage />
    )
}

const Utilities = () =>
{
    return (
        <UtilitiesLayout />
    )
}


ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/utilities" component={Utilities} />
    </Router>,
    document.getElementById('root')
  );