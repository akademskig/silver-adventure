import { History } from "history";
import React from "react";
import IconsBarMobile from "./IconsBarMobile";
import NameBar from "./NameBar";
import ProfilePhoto from "./ProfilePhoto";
import ContactForm from "./ContactForm";
import { addInitialValues } from "../../redux/actions/contactForm";
import { User } from "../../types/user";
import { saveUsers } from "../../assets/services/usersService";

const ContactEdit = (props: any) => {
    const { user, users, history, dispatch } = props
    dispatch(addInitialValues(user))
    const onSubmit = (values: any) => {
        const newUsers = users.map((u: User) => values.id === u.id ? values : u)
        dispatch(saveUsers(newUsers))
    }
    return (
        <React.Fragment>
            <IconsBarMobile {...history}></IconsBarMobile>
            <div className="contact-details">
                <ProfilePhoto {...props} imgType="edit"></ProfilePhoto>
                <div className="contact-details__info">
                    <NameBar mode="edit"{...props}></NameBar>
                    <ContactForm onSubmit={onSubmit}{...props} ></ContactForm>
                </div>
            </div>
        </React.Fragment>

    )

}






export default ContactEdit