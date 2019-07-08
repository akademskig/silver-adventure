import React from "react"
import iconPhone from "../assets/icons/phone.svg"
import iconEmail from "../assets/icons/email.svg"
import iconBack from "../assets/icons/arrow-back.svg"
import iconHearthEmpty from "../assets/icons/icon-hearth-empty.svg"
import iconEdit from "../assets/icons/icon-edit.svg"
import { capitalize } from "../utils";
import { User } from "../redux/users/types";
import { History } from "history";

const ContactDetails = (props: any) => {
    const { user, history }: { user: User, history:History } = props
    return (
        <React.Fragment>
        <IconsBarMobile {...history}></IconsBarMobile>

        <div className="contact-details">
            <div className="contact-details__img">
                <img src={user.profile_photo}></img>
            </div>
            <NameBarMobile {...user}></NameBarMobile>
            <div className="contact-details__info">
                <NameBar {...props}></NameBar>
                <div className="contact-info">
                    <div className="contact-info__email">
                        <div className="email__label label">
                            <img src={iconEmail}></img>
                            <label>email</label>
                        </div>
                        <div className="email__info info">{user.email}</div>
                    </div>
                    <div className="contact-info__phones">
                        <div className="phones__label label">
                            <div className="label__holder">

                                <img src={iconPhone}></img>
                                <label>numbers</label>
                            </div>

                        </div>
                        <ul className="phones-list__info info">
                            {user.phones && user.phones.map((p: any) => {
                                return (
                                    <li className="phone-item">
                                        <span className="phone-item__label">
                                            {p.name.toUpperCase()}
                                        </span>
                                        <span className="phone-item__info">
                                            {p.number}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="contact-info__item phones">

                </div>
            </div>
        </div>
        </React.Fragment>

    )

}

const NameBar = (props: any) => {
    const { user, history } = props
    const onClickBack = (_: React.MouseEvent) => {
        history.goBack()
    }
    return (
        <div className="contact-name">
            <span className="contact-name__left">
                <img src={iconBack} onClick={onClickBack}></img>
                <h2>{capitalize(user.first_name)} {capitalize(user.last_name)}</h2>
            </span>
            <span className="contact-name__right">
                <img src={iconHearthEmpty}></img>
                <img src={iconEdit}></img>
            </span>
        </div>
    )
}

const NameBarMobile = (user:User) => {
    return (
        <div className="contact-name--mobile">
            <span className="contact-name__img">
            <img src={user.profile_photo}></img>
            </span>
            <span className="contact-name__left">
                <h2>{capitalize(user.first_name)} {capitalize(user.last_name)}</h2>
            </span>

        </div>
    )
}

const IconsBarMobile = (history: History) => {
    const onClickBack = (_: React.MouseEvent) => {
        history.goBack()
    }
    return (
        <div className="icons-bar--mobile">
            <div className="icons-bar__left">
            <img src={iconBack} onClick={onClickBack}></img>
            </div>
            <span className="icons-bar__right">
                <img src={iconHearthEmpty}></img>
                <img src={iconEdit}></img>
            </span>
        </div>
    )
}
export default ContactDetails