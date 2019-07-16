import React from 'react'
import { Field, reduxForm, ConfigProps } from 'redux-form'
import iconAdd from "../../assets/icons/add.svg"
let ContactForm = (props: any) => {
    const { user } = props
    const handleSubmit = (values: any) => {

    }
    const handleAddNumber = () => {

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="contact-form__form-section">
                <label htmlFor="firstName">Full Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>

            <div className="contact-form__form-section">
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div className="contact-form__form-section">
                {
                    user.phones && user.phones.map((un: string) => (
                        <React.Fragment>
                            <label htmlFor="numbers">Numbers</label>
                            <Field name="numbers" component="input" type="text" />
                        </React.Fragment>
                    ))
                }

            </div>
            <div>
                <button onClick={handleAddNumber} className="btn btn-add-number round" name="add-number">
                    <img className="icon small icon-add" src={iconAdd} alt="Add icon"></img>
                </button>
                <label htmlFor="add-number">Add numbers</label>
            </div>
            <div className="form-btns">
                <button className="btn btn-cancel" type="reset">Cancel</button>
                <button className="btn btn-save" type="submit">Save</button>
            </div>
        </form>)
}

export default reduxForm({
    form: 'contact'
})(ContactForm)