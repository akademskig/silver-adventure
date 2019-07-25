import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import iconAdd from "../../assets/icons/add.svg"
import iconRemove from "../../assets/icons/remove-gray.svg"
import { connect } from 'react-redux';
import validate from './contactFormValidate';
import iconPerson from "../../assets/icons/person.svg"
import iconPhone from "../../assets/icons/phone.svg"
import iconEmail from "../../assets/icons/email.svg"
import iconInfo from "../../assets/icons/info.svg"

let ContactForm = (props: any) => {
    const { handleSubmit, submitting, invalid, reset, onCancel } = props
    return (
        <form className="contact-form" onSubmit={handleSubmit} >
            <div className="contact-form__form-section">
                <Field className="form-input name" name="full_name" component={renderField} type="text" />
            </div>
            <div className="contact-form__form-section">
                <Field className="form-input email" name="email" component={renderField} type="email" />
            </div>
            <div className="contact-form__form-section">
                <label className="field-label" htmlFor="phones">
                    <img src={iconPhone} alt="Phone icon"></img>
                    numbers</label>
                <FieldArray name="phones" component={renderNumberFields}>
                </FieldArray>
            </div>

            <div className="form-btns">
                <button className="btn btn-cancel" type="reset" onClick={() => { reset(); onCancel() }}>Cancel</button>
                <button className="btn btn-save" disabled={invalid || submitting} type="submit">Save</button>
            </div>
        </form>)
}


const renderField = (props: any) => {
    const { input, label, type, htmlFor, className, meta: { touched, error } } = props
    const inputClassName = touched && error ? `${className} error` : className
    return (
        <span className={className}>
            {input.name === "email" &&
                <label className="field-label" htmlFor={htmlFor}>
                    <img src={iconEmail} alt="Email icon"></img>
                    email
                    </label>
            }
            {input.name === "full_name" &&
                <label className="field-label" htmlFor={htmlFor}>
                    <img src={iconPerson} alt="User icon"></img>
                    full name
                    </label>
            }
            <input {...input} placeholder={label} type={type} className={inputClassName} name={input.name} />
            {touched && ((error && <div className="error-message"><img src={iconInfo}></img><p>{error}</p></div>))}
        </span>
    )

}
const renderNumberFields = (props: any) => {
    const { fields, meta: { error } } = props
    return (
        <React.Fragment>
            <ul className="numbers-list">
                {fields && fields.map((phone: any, i: number) => {
                    return (

                        <li key={i} className="numbers-list__number">
                            <Field className="form-input number__number" component={renderField} type="text" name={`${phone}.number`} />
                            <Field className="form-input number__name" name={`${phone}.name`} component={renderField} type="text" />
                            <button type="button" onClick={() => fields.remove(i)} value={i}>
                                <img src={iconRemove} alt="Remove icon"></img>
                            </button>
                        </li>
                    )
                })}
                {error && <li className="error">{error}</li>}
            </ul>
            <div className="add-numbers btn">
                <button type="button" onClick={() => fields.push()} className="btn btn-add-number round" name="add-number">
                    <img className="icon small icon-add" src={iconAdd} alt="Add icon"></img>
                </button>
                <label htmlFor="add-number">Add numbers</label>
            </div>
        </React.Fragment>

    )
}

const ContactReduxForm = reduxForm({
    form: 'contact',
    validate: validate
})(ContactForm)

export default connect(
    (state: any) => {
        return ({
            initialValues: state.contactFormReducer.userToEdit,
        })
    }
)(ContactReduxForm)