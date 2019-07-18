import React, { FunctionComponent, ReactChild, ReactComponentElement, ComponentType, ReactNode } from "react"

const Modal = (PromptComponent:any) => {
    return class ModalContainer extends React.Component<any> {

        render() {
        const { modalVisible } = this.props

            return (
                modalVisible &&
                <div className="modal-container">
                    <PromptComponent {...this.props}></PromptComponent>
                </div>
            )
        }
    }
}


export default Modal