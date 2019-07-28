import React from "react"
import { ContactRoutes, ContactSubroutes } from '../routes';
import { connect } from "react-redux";
import { fetchUsers } from "../services/usersService";

class Contacts extends React.Component<any> {
    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }
    render() {
        return (
            <React.Fragment>
                <ContactRoutes></ContactRoutes>
                <ContactSubroutes ></ContactSubroutes>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch,
    }
}


export default connect(null, mapDispatchToProps)(Contacts)