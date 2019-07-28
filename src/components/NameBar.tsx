import React from "react"
import { capitalize } from "../utils";
import iconBack from "../assets/icons/arrow-back.svg"
import { ViewMode } from "./types";
import IconDelete from "./IconDelete";
import IconEdit from "./IconEdit";
import IconHearth from "./IconHearth";

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
                        <IconHearth />
                        <IconEdit />
                    </React.Fragment>
                }
                {mode === ViewMode.EDIT &&
                    <React.Fragment>
                        <span className="icon-text">Delete</span>
                        <IconDelete ></IconDelete>
                    </React.Fragment>
                }

            </span>
        </div>
    )
}

export default NameBar