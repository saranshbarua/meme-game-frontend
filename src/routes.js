import React from 'react'
import { Switch, Route } from 'react-router-dom';

//Components

import Home from './components/Home/home';
import JoinRoom from './components/JoinRoom/joinRoom';
import PlayRoom from './components/PlayRoom/playRoom';

const Routes = () => {
    return (
        <Switch>
            <Route path="/joinroom" exact component={JoinRoom} />
            <Route path="/play/:user" exact component={PlayRoom} />
            <Route path="/" exact component={Home} />
        </Switch>
    )
}

export default Routes;
