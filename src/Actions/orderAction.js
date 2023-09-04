import {ORDER_FETCH_PENDING,ORDER_FETCH_SUCCESS} from '../Constant/orderContants'

export const fetchOrder = (currentPage, limit) => {
    return async (dispatch) => {
        try {
            var requestOrder = {
                method: 'GET'
            }

            await dispatch({
                type:ORDER_FETCH_PENDING
            })

            const resOrder = await fetch("http://203.171.20.210:8080/devcamp-pizza365/orders", requestOrder)

            const dataOrder = await resOrder.json()

            return dispatch({
                type:ORDER_FETCH_SUCCESS,
                data:dataOrder
            })
        } catch (error) {
            return dispatch({
                type: "USER_FETCH_ERROR",
                error: error
            })
        }
    }
}

export const orderModal = () => {
    return({
        type:'DATA_ORDER',
       
    })
}

export const create = () => {
    return{
        type:'MODAL_Create',
    }
}

