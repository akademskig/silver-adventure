
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import allContactsPage from './pages/allContactsPage';
import myFavoritesPage from './pages/myFavoritesPage';
import EditPage from './pages/editPage';
import ContactsPage from './pages/ContactsPage';

export default class MainRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/contacts/all_contacts"></Redirect>}></Route>
                <Route path="/contacts" component={ContactsPage}></Route>
            </Switch>
        )
    }
}

export class ContactRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/contacts" render={() => <Redirect to="/contacts/all_contacts"></Redirect>}></Route>
                <Route path='/contacts/all_contacts' component={allContactsPage} />
                <Route path='/contacts/my_favorites' component={myFavoritesPage} />
            </Switch>
        )
    }
}

export class EditRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={`/contact/edit/:id`} component={EditPage} />
            </Switch>
        )
    }
}