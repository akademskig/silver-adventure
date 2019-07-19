
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import allContactsPage from './pages/allContactsPage';
import myFavoritesPage from './pages/myFavoritesPage';
import ContactsPage from './pages/ContactsPage';
import ContactEditPage from './pages/ContactEditPage';
import ContactDetailsPage from './pages/ContactDetailsPage';

export default class MainRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/contacts/all_contacts"></Redirect>}></Route>
                <Route path="/contacts" component={ContactsPage}></Route>
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
                <Route exact path={`/contacts/edit/:id`} render={() => <ContactEditPage {...this.props}></ContactEditPage>} />
                <Route path={`/contacts/view/:id`} render={() => <ContactDetailsPage {...this.props}></ContactDetailsPage>} />
                <Route render={() => <Redirect to="/contacts/all_contacts"></Redirect>}></Route>
            </Switch>
        )
    }
}