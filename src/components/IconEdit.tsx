
import React from "react"
import { connect } from "react-redux";
import iconEdit from "../assets/icons/icon-edit.svg"
import { Link } from "react-router-dom";

const IconEdit = (props: any) => {
    const { user } = props
    return (
        <Link to={`/contacts/edit/${user.id}`}>
            <img src={iconEdit} alt="Icon edit" className="icon icon-edit icon-desktop"></img>
        </Link>
    )
}

const mapStateToProps = (state: any, props: any) => ({
    user: props.user ? props.user : state.users.user
})

export default connect(mapStateToProps)(IconEdit)