import React, { Dispatch } from "react";
import { withRouter } from "react-router";
import { addInitialValues } from "../redux/actions/contactForm";
import { addNewUser } from "../services/usersService";
import ContactForm from "../components/contactForm/ContactForm";
import IconsBarMobile from "../components/IconsBarMobile";
import ProfilePhoto from "../components/ProfilePhoto";
import NameBar from "../components/NameBar";
import { connect } from "react-redux";
import { ViewMode } from "../components/types";


const ContactNew = (props: any) => {
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
            <IconsBarMobile mode={ViewMode.NEW} history={history}></IconsBarMobile>
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return ({
        dispatch
    })
}

export default connect(null, mapDispatchToProps)(withRouter(ContactNew))



