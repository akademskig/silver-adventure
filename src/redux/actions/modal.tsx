export const TOGGLE_MODAL = "TOGGLE_MODAL"


export const toggleModal = (id?: number) =>
    ({
        type: TOGGLE_MODAL,
        payload: { userId: id }
    })

