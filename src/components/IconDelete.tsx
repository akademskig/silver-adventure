
import React from "react"
import { toggleModal } from "../redux/actions/modal";
import iconTrash from "../assets/icons/delete.svg"
import { connect } from "react-redux";


const IconDelete = (props: any) => {
    const { id, dispatch } = props

    const onClickDelete = (id: number) => {
        dispatch(toggleModal(id))
    }
    return (
        <img className="icon icon-desktop" onClick={() => onClickDelete(id)} src={iconTrash} alt="Icon delete"></img>
    )
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        ...ownProps,
        dispatch: dispatch,
    }
}

export default connect(mapDispatchToProps)(IconDelete)