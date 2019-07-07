import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router";

class ContactEditPage extends React.Component<any>{

    render(){
        return(
            <div className="">Edit</div>
        )
    }
}


const mapStateToProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        loading: state.usersReducer.loading,
        error: state.usersReducer.error,
        user: state.usersReducer.user
    }
}



export default connect(mapStateToProps)(withRouter(ContactEditPage))