import React from 'react'
import { Field, reduxForm, ConfigProps } from 'redux-form'
import iconAdd from "../../assets/icons/add.svg"
import iconRemove from "../../assets/icons/remove.svg"
import { connect } from 'react-redux';
import { addPhoneNumber } from '../../redux/actions/contactForm';
let ContactForm = (props: any) => {
    const { userToEdit, handleSubmit, pristine, submitting, reset, dispatch } = props
    const phoneItem = {
        name: "",
        label: "",
        number: ""
    }
    const handleAddNumber = () => {
        const numbers = userToEdit.phones.concat(phoneItem)
        dispatch(addPhoneNumber(numbers))
    }
    const handleRemoveNumber = (e: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        const index = parseInt(e.currentTarget.value)
        const numbers = userToEdit.phones.filter((p:any, i:number)=>i!==index)
        dispatch(addPhoneNumber(numbers))
    }
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
                <label htmlFor="numbers">Numbers</label>
                {
                    userToEdit.phones && userToEdit.phones.map((un: any, i: number) => (
                        <ul className="numbers-list">
                            <li className="numbers-list__number">
                                <Field component="input"type="text"name={`${un.name}-${i}`}></Field>
                                <Field key={i}name={`${un.number}-${i}`}component="input" type="text" />
                                <button type="button" onClick={handleRemoveNumber} value={i}>
                                    <img src={iconRemove} alt="Remove icon"></img>
                                </button>
                            </li>
                        </ul>
                    ))
                }
            </div>
            <div>
                <button type="button" onClick={handleAddNumber} className="btn btn-add-number round" name="add-number">
                    <img className="icon small icon-add" src={iconAdd} alt="Add icon"></img>
                </button>
                <label htmlFor="add-number">Add numbers</label>
            </div>
            <div className="form-btns">
                <button className="btn btn-cancel" type="reset" onClick={reset}>Cancel</button>
                <button className="btn btn-save" disabled={pristine || submitting} type="submit">Save</button>
            </div>
        </form>)
}

const ContactReduxForm = reduxForm({
    form: 'contact'
})(ContactForm)

export default connect(
    (state: any) => {
        return ({
            initialValues: state.contactFormReducer.userToEdit,
            userToEdit: state.contactFormReducer.userToEdit
        })
    }
)(ContactReduxForm)