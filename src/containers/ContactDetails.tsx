import { History } from "history";
import React from "react";
import iconEmail from "../assets/icons/email.svg";
import iconPhone from "../assets/icons/phone.svg";
import { User } from "../types/user";
import IconsBarMobile from "../components/IconsBarMobile";
import NameBarMobile from "../components/NameBarMobile";
import NameBar from "../components/NameBar";
import ProfilePhoto from "../components/ProfilePhoto";

const ContactDetails = (props: any) => {
    const { user, history }: { user: User, history: History } = props
    return (
        <React.Fragment>
            <IconsBarMobile {...history}></IconsBarMobile>
            <div className="contact-details">
                <div className="profile-mobile">
                    <ProfilePhoto imgType="view"{...props}></ProfilePhoto>
                </div>
                <NameBarMobile imgType="view"{...props}></NameBarMobile>
                <div className="contact-details__info">
                    <NameBar mode="view"{...props}></NameBar>
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
                </div>
            </div>
        </React.Fragment>
    )
}




export default ContactDetails

