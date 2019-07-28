
import React from "react"
import { connect } from "react-redux";
import iconEdit from "../assets/icons/icon-edit.svg"
import { Link } from "react-router-dom";

const IconEdit = (props: any) => {
    const { user } = props

    return (
        <Link to={`/contacts/edit/${user.id}`}>
            <img src={iconEdit} alt="Icon edit"></img>
        </Link>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.users.user
})

export default connect(mapStateToProps)(IconEdit)