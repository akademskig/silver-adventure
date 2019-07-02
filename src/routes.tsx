
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import allContactsPage from './pages/allContactsPage';
import myFavouritesPage from './pages/myFavouritesPage';

export const NavigationRoutes = () => (
    <Switch>
        <Route path='/all_contacts' component={allContactsPage} />
        <Route path='/my_favourites' component={myFavouritesPage} />
    </Switch>
)