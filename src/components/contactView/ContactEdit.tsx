import { History } from "history";
import React from "react";
import IconsBarMobile from "./IconsBarMobile";
import NameBar from "./NameBar";
import ProfilePhoto from "./ProfilePhoto";
import ContactForm from "./ContactForm";
import { addInitialValues } from "../../redux/actions/contactForm";

const ContactEdit = (props: any) => {
    const { user, history, dispatch } = props
    dispatch(addInitialValues(user))
    return (
        <React.Fragment>
            <IconsBarMobile {...history}></IconsBarMobile>
            <div className="contact-details">
                <ProfilePhoto {...props} imgType="edit"></ProfilePhoto>
                <div className="contact-details__info">
                    <NameBar mode="edit"{...props}></NameBar>
                    <ContactForm {...props} ></ContactForm>
                </div>
            </div>
        </React.Fragment>

    )

}






export default ContactEdit