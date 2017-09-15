import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from "./Main/Main";
import HomeContainer from "../containers/HomeContainer";

export default class App extends Component {
    render() {
        return (
            <Main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                    </Switch>
                </BrowserRouter>
            </Main>
        );
    }
}
