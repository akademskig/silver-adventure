import React, { FunctionComponent, ReactChild, ReactComponentElement, ComponentType, ReactNode } from "react"
import { toggleModal } from "../../redux/actions/modal";
import { deleteUser } from "../../assets/services/usersService";

const Modal = (PromptComponent: any) => {
    return class ModalContainer extends React.Component<any> {

        onCancel = () => {
            this.props.dispatch(toggleModal())
        }
        onDelete = (userId: string) => {
            const id = parseInt(userId)
            this.props.dispatch(deleteUser(id))
            this.props.history.push("/contacts")
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