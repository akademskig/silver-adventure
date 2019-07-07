import React from "react"
import { connect } from "react-redux"
import { fetchUser } from "../redux/users/actions";
import { User } from "../redux/users/types";
import { withRouter } from "react-router";
import iconPhone from "../assets/icons/phone.svg"
import iconEmail from "../assets/icons/email.svg"
import iconBack from "../assets/icons/arrow-back.svg"
import iconHearthEmpty from "../assets/icons/icon-hearth-empty.svg"
import iconEdit from "../assets/icons/icon-edit.svg"

class ContactDetailsPage extends React.Component<any> {
    componentWillReceiveProps(props: any) {
        const { users, dispatch, match } = props
        if (props.users.length > 0) {
            const user = users.find((u: User) => u.id == match.params.id)
            dispatch(fetchUser(user))
        }
    }

    render() {
        const { user } = this.props
        return (
            user ? (
                <div className="contact-details">
                    <div className="contact-details__img">
                        <img src={user.profile_photo}></img>
                    </div>
                    <div className="contact-details__info">
                        <div className="name">
                            <img src={iconBack}></img>

                            <h2>{user.first_name} {user.last_name}</h2>
                            <img src={iconHearthEmpty}></img>
                            <img src={iconEdit}></img>
                        </div>
                        <div className="email">
                            <img src={iconEmail}></img>
                            <span>email</span>
                            <p>{user.email}</p>
                        </div>
                        <div className="numbers">
                            <img src={iconPhone}></img>
                            <span>numbers</span>
                            <ul>
                                {user.phones && user.phones.map((p: any) => {
                                    return (
                                        <li className="phone-list">
                                            <span>
                                                {p.name.toUpperCase()}
                                            </span>
                                            <span>
                                                {p.number}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            ) : <div></div>
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

export default connect(mapStateToProps)(withRouter(ContactDetailsPage))
