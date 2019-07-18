import Modal from "./ModalContainer";
import React from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
const DeletePrompt = (props: any) => {
    const { onCancel, onDelete, userId } = props
    return (
        <div className="modal-prompt delete-prompt">
            <header className="modal-header delete-header">
                <h3>Delete</h3>
            </header>
            <div className="modal-body delete-body">
                <p>Are you sure you want to delete this contact?</p>
                <div className="modal-btns">
                    <button className="btn btn-cancel" onClick={onCancel}>Cancel</button>
                    <button className="btn btn-delete" onClick={() => onDelete(userId)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        modalVisible: state.modal.modalVisible,
        userId: state.modal.userId
    }
}


export default connect(mapStateToProps)(withRouter(Modal(DeletePrompt)))