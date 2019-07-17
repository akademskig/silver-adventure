import React from 'react'
import { Field, reduxForm, ConfigProps, FieldArray } from 'redux-form'
import iconAdd from "../../assets/icons/add.svg"
import iconRemove from "../../assets/icons/remove.svg"
import { connect } from 'react-redux';
import { addPhoneNumber } from '../../redux/actions/contactForm';
import { render } from 'react-dom';
import validate from './contactFormValidate';
let ContactForm = (props: any) => {
    const { handleSubmit, submitting, reset, invalid, onCancel } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact-form__form-section">
                <label htmlFor="full_name">Full Name</label>
                <Field name="full_name" component="input" type="text" />
            </div>

            <div className="contact-form__form-section">
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div className="contact-form__form-section">
                <label htmlFor="phones">Numbers</label>
                <FieldArray name="phones" component={renderNumberFields}>
                </FieldArray>
            </div>

            <div className="form-btns">
                <button className="btn btn-cancel" type="reset" onClick={onCancel}>Cancel</button>
                <button className="btn btn-save" disabled={invalid || submitting} type="submit">Save</button>
            </div>
        </form>)
}

const renderNumberFields = (props: any) => {
    const { fields, meta: { errors } } = props
    return (
        <div className="numbers-list">
            <ul>
                {fields && fields.map((phone: any, i: number) => {
                    return (

                        <li key={i} className="numbers-list__number">
                            <Field name={`${phone}.name`} component="input" type="text" />
                            <Field component="input" type="text" name={`${phone}.number`} />
                            <button type="button" onClick={() => fields.remove(i)} value={i}>
                                <img src={iconRemove} alt="Remove icon"></img>
                            </button>
                        </li>
                    )
                })}
                {errors && <li className="error">{errors}</li>}
            </ul>
            <div>
                <button type="button" onClick={() => fields.push()} className="btn btn-add-number round" name="add-number">
                    <img className="icon small icon-add" src={iconAdd} alt="Add icon"></img>
                </button>
                <label htmlFor="add-number">Add numbers</label>
            </div>
        </div>

    )
}

const ContactReduxForm = reduxForm({
    form: 'contact',
    validate
})(ContactForm)

export default connect(
    (state: any) => {
        return ({
            initialValues: state.contactFormReducer.userToEdit,
            userToEdit: state.contactFormReducer.userToEdit
        })
    }
)(ContactReduxForm)