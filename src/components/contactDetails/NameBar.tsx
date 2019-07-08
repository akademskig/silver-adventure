import React from "react"
import { capitalize } from "../../utils";
import iconBack from "../../assets/icons/arrow-back.svg"
import iconHearthEmpty from "../../assets/icons/icon-hearth-empty.svg"
import iconEdit from "../../assets/icons/icon-edit.svg"


const NameBar = (props: any) => {
    const { user, history } = props
    const onClickBack = (_: React.MouseEvent) => {
        history.goBack()
    }
    return (
        <div className="contact-name">
            <span className="contact-name__left">
                <img src={iconBack} onClick={onClickBack}></img>
                <h2>{capitalize(user.first_name)} {capitalize(user.last_name)}</h2>
            </span>
            <span className="contact-name__right">
                <img src={iconHearthEmpty}></img>
                <img src={iconEdit}></img>
            </span>
        </div>
    )
}

export default NameBar