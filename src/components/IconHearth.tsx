
import React from "react"
import { connect } from "react-redux";
import iconHearthEmpty from "../assets/icons/icon-hearth-empty.svg"
import iconHeartFull from "../assets/icons/icon-hearth-full.svg"
import { toggleFavorite } from "../services/usersService";

const IconHearth = (props: any) => {
    const { user, dispatch } = props

    const onClickIcon = (id: string) => {
        dispatch(toggleFavorite(id))
    }
    return (
        user.favorite ? 
        <img className="icon icon-desktop" onClick={() => onClickIcon(user.id)} src={iconHeartFull}></img>
        :
        <img className="icon icon-desktop" onClick={() => onClickIcon(user.id)} src={iconHearthEmpty}></img>
    )
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        ...ownProps,
        dispatch: dispatch,
    }
}

export default connect(mapDispatchToProps)(IconHearth)