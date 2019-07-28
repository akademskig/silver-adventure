
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import allContactsPage from './pages/allContactsPage';
import myFavoritesPage from './pages/myFavoritesPage';
import Contacts from './containers/Contacts';
import ContactEditPage from './pages/ContactEditPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactNewPage from './pages/ContactNewPage';

export default class MainRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/contacts/all_contacts"></Redirect>}></Route>
                <Route path="/contacts" component={Contacts}></Route>
                <Route render={() => <Redirect to="/contacts/all_contacts"></Redirect>}></Route>
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

export class ContactSubroutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/contacts/edit/:id`} component={ContactEditPage} />
                <Route path={`/contacts/view/:id`} component={ContactDetailsPage} />
                <Route path={`/contacts/new`} component={ContactNewPage} />
                <Route render={() => <Redirect to="/contacts/all_contacts"></Redirect>}></Route>
            </Switch>
        )
    }
}