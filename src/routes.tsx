
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import allContactsPage from './pages/allContactsPage';
import myFavoritesPage from './pages/myFavoritesPage';

export default class NavigationRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/all_contacts"></Redirect>}></Route>
                <Route path='/all_contacts' component={allContactsPage} />
                <Route path='/my_favorites' component={myFavoritesPage} />
            </Switch>
        )
    }
}