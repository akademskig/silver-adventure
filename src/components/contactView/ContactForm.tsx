import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import iconAdd from "../../assets/icons/add.svg"
import iconRemove from "../../assets/icons/remove-gray.svg"
import { connect } from 'react-redux';
import validate from './contactFormValidate';

let ContactForm = (props: any) => {
    const { handleSubmit, submitting, reset, invalid, onCancel } = props

    return (
        <form className="contact-form"onSubmit={handleSubmit}>
            <div className="contact-form__form-section">
                <label className="field-label" htmlFor="full_name">full name</label>
                <Field className="form-input name"name="full_name" component="input" type="text" />
            </div>

            <div className="contact-form__form-section">
                <label className="field-label"htmlFor="email">email</label>
                <Field className="form-input name"name="email" component="input" type="email" />
            </div>
            <div className="contact-form__form-section">
                <label className="field-label"htmlFor="phones">numbers</label>
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
        <div >
            <ul className="numbers-list">
                {fields && fields.map((phone: any, i: number) => {
                    return (

                        <li key={i} className="numbers-list__number">
                            <Field className="form-input number__number"component="input" type="text" name={`${phone}.number`} />
                            <Field className="number__name"name={`${phone}.name`} component="input" type="text" />
                            <button type="button" onClick={() => fields.remove(i)} value={i}>
                                <img src={iconRemove} alt="Remove icon"></img>
                            </button>
                        </li>
                    )
                })}
                {errors && <li className="error">{errors}</li>}
            </ul>
            <div className="add-numbers btn">
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