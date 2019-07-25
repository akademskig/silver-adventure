import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import { addInitialValues } from "../redux/actions/contactForm";
import { User } from "../types/user";
import { saveUsers } from "../services/usersService";
import IconsBarMobile from "../components/IconsBarMobile";
import ProfilePhoto from "../components/ProfilePhoto";
import NameBar from "../components/NameBar";

const ContactEdit = (props: any) => {
    const { user, users, history, dispatch } = props
    dispatch(addInitialValues(user))
    const onSubmit = (values: any) => {
        const newUsers = users.map((u: User) => values.id === u.id ? values : u)
        dispatch(saveUsers(newUsers))
        history.goBack()
    }
    const onCancel = () => {
        history.goBack()
    }
    return (
        <React.Fragment>
            <IconsBarMobile {...history}></IconsBarMobile>
            <div className="contact-details">
                <ProfilePhoto {...props} imgType="edit"></ProfilePhoto>
                <div className="contact-details__info">
                    <NameBar mode="edit"{...props}></NameBar>
                    <ContactForm onCancel={onCancel} onSubmit={onSubmit}{...props} ></ContactForm>
                </div>
            </div>
        </React.Fragment>

    )

}






export default ContactEdit