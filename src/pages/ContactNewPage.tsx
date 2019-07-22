import React from "react";
import { withRouter } from "react-router";
import IconsBarMobile from "../components/contactView/IconsBarMobile";
import ProfilePhoto from "../components/contactView/ProfilePhoto";
import NameBar from "../components/contactView/NameBar";
import ContactForm from "../components/contactView/ContactForm";
import { addNewUser } from "../services/usersService";
import { addInitialValues } from "../redux/actions/contactForm";

const ContactNewPage = (props: any) => {
    const { history, dispatch } = props
    dispatch(addInitialValues(null))
    const onSubmit = (values: any) => {
        dispatch(addNewUser(values))
        history.goBack()
    }
    const onCancel = () => {
        history.goBack()
    }
    return (
        <React.Fragment>
            <IconsBarMobile {...history}></IconsBarMobile>
            <div className="contact-details">
                <ProfilePhoto {...props} imgType="new"></ProfilePhoto>
                <div className="contact-details__info">
                    <NameBar mode="new"{...props}></NameBar>
                    <ContactForm onCancel={onCancel} onSubmit={onSubmit}{...props} ></ContactForm>
                </div>
            </div>
        </React.Fragment>
    )
}



export default withRouter(ContactNewPage)



