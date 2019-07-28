
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
        <img className="icon icon-desktop" onClick={() => onClickIcon(user.id)} src={iconHeartFull} alt="Icon hearth full"></img>
        :
        <img className="icon icon-desktop" onClick={() => onClickIcon(user.id)} src={iconHearthEmpty} alt="Icon hearth empty"></img>
    )
}

const mapStateToProps = (state: any)=>({
    user: state.users.user
})
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        ...ownProps,
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconHearth)