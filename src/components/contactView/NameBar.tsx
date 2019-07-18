import React from "react"
import { capitalize } from "../../utils";
import iconBack from "../../assets/icons/arrow-back.svg"
import iconHearthEmpty from "../../assets/icons/icon-hearth-empty.svg"
import iconEdit from "../../assets/icons/icon-edit.svg"
import iconTrash from "../../assets/icons/delete.svg"
import { Link } from "react-router-dom";

const NameBar = (props: any) => {
    const { user, history, mode } = props
    const onClickBack = (_: React.MouseEvent) => {
        history.goBack()
    }
    return (
        <div className="contact-name">
            <span className="contact-name__left">
                <img className="icon icon-desktop-large" src={iconBack} onClick={onClickBack}></img>
                {mode === "details" && <h2>{capitalize(user.full_name)} </h2>}
            </span>
            <span className="contact-name__right">
                {mode === "details" &&
                    <React.Fragment>
                        <img className="icon icon-desktop" src={iconHearthEmpty}></img>
                        <Link to={`/contacts/${user.id}/edit`}>
                            <img className="icon icon-desktop" src={iconEdit}></img>
                        </Link>
                    </React.Fragment>
                }
                {mode === "edit" &&
                    <React.Fragment>
                        <span className="icon-text">Delete</span>
                        <img className="icon icon-desktop" src={iconTrash}></img>
                    </React.Fragment>
                }

            </span>
        </div>
    )
}

export default NameBar