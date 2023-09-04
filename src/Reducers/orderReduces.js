
import {ORDER_FETCH_PENDING,ORDER_FETCH_SUCCESS} from '../Constant/orderContants'
const initialState = {
    order: [],
    pending: false,
    isOpen: false,
    // size: 5,
    // page: 0,
    // currentPage: 1,
    small: {},
    medium:{},
    large:{}
}

const orderReducers = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_FETCH_PENDING:
            state.pending = true
            break
        case ORDER_FETCH_SUCCESS:
            state.pending = false
            state.order = action.data
    }

    return {... state}
}

export default orderReducers