
import React from "react"
import { History } from "history";
import iconBack from "../assets/icons/arrow-back.svg"
import { ViewMode } from "./types";
import IconHearth from "./IconHearth";
import IconEdit from "./IconEdit";
import IconDelete from "./IconDelete";

const IconsBarMobile = ({ history, mode }: { history: History, mode: string }) => {
    const onClickBack = (_: React.MouseEvent) => {
        history.goBack()
    }
    return (
        <div className="icons-bar--mobile">
            <div className="icons-bar__left">
                <img src={iconBack} onClick={onClickBack}></img>
            </div>
            <span className="icons-bar__right">
                {mode === ViewMode.VIEW && <IconHearth />}
                {mode === ViewMode.VIEW && <IconEdit />}
                {mode === ViewMode.EDIT && <IconDelete />}
            </span>
        </div>
    )
}

export default IconsBarMobile