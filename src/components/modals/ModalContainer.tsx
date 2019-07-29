import React from "react"
import { toggleModal } from "../../redux/actions/modal";
import { deleteUser } from "../../services/usersService";

const Modal = (PromptComponent: any) => {
    return class ModalContainer extends React.Component<any> {

        onCancel = () => {
            this.props.dispatch(toggleModal())
        }
        onDelete = (userId: string) => {
            this.props.dispatch(deleteUser(userId))
            this.props.dispatch(toggleModal())
        }
        render() {
            const { modalVisible } = this.props

            return (
                modalVisible &&
                <div className="modal-container">
                    <PromptComponent onCancel={this.onCancel} onDelete={this.onDelete} {...this.props}></PromptComponent>
                </div>
            )
        }
    }
}


export default Modal