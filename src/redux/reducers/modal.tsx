import { Reducer } from "redux";
import { TOGGLE_MODAL } from "../actions/modal";

const initialState={
    modalVisible: false
}
const modal: Reducer<any, any> = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_MODAL: {
            return {
                ...state,
                modalVisible: !state.modalVisible
            }
        }
        default: return state
    }
}

export default modal