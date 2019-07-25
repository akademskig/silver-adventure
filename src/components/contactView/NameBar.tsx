import React from "react"
import { capitalize } from "../../utils";
import iconBack from "../../assets/icons/arrow-back.svg"
import iconHearthEmpty from "../../assets/icons/icon-hearth-empty.svg"
import iconEdit from "../../assets/icons/icon-edit.svg"
import { Link } from "react-router-dom";
import { ViewMode } from "./types";
import IconDelete from "../IconDelete";

const NameBar = (props: any) => {
    const { user, history, mode } = props
    const onClickBack = (_: React.MouseEvent) => {
        history.goBack()
    }
    return (
        <div className="contact-name">
            <span className="contact-name__left">
                <img className="icon icon-desktop-large" src={iconBack} onClick={onClickBack}></img>
                {mode === ViewMode.VIEW && <h2>{capitalize(user.full_name)} </h2>}
            </span>
            <span className="contact-name__right">
                {mode === ViewMode.VIEW &&
                    <React.Fragment>
                        <img className="icon icon-desktop" src={iconHearthEmpty}></img>
                        <Link to={`/contacts/edit/${user.id}`}>
                            <img className="icon icon-desktop" src={iconEdit}></img>
                        </Link>
                    </React.Fragment>
                }
                {mode === ViewMode.EDIT &&
                    <React.Fragment>
                        <span className="icon-text">Delete</span>
                        <IconDelete id={user.id}></IconDelete>
                    </React.Fragment>
                }

            </span>
        </div>
    )
}

export default NameBar