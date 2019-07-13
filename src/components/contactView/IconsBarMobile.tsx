
import React from "react"
import { History } from "history";
import iconBack from "../../assets/icons/arrow-back.svg"
import iconHearthEmpty from "../../assets/icons/icon-hearth-empty.svg"
import iconEdit from "../../assets/icons/icon-edit.svg"

const IconsBarMobile = (history: History) => {
    const onClickBack = (_: React.MouseEvent) => {
        history.goBack()
    }
    return (
        <div className="icons-bar--mobile">
            <div className="icons-bar__left">
                <img src={iconBack} onClick={onClickBack}></img>
            </div>
            <span className="icons-bar__right">
                <img src={iconHearthEmpty}></img>
                <img src={iconEdit}></img>
            </span>
        </div>
    )
}

export default IconsBarMobile