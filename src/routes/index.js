import React from 'react'
import {Route, IndexRoute} from 'react-router'

import  Template from '../containers/template'

//import Home from '../containers/home'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/profile'

const createRoutes = () => {
    return (
        <Route
        path="/"
        component={Template}
        >

        <IndexRoute component={TicTacToe}/>
        <Route path={'/profile'} component={Profile}/>

        </Route>
    )
}


const Routes = createRoutes();


export default Routes