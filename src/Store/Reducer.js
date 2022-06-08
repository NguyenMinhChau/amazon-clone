import {
    ADD_TO_BACKET,
    REMOVE_TO_BACKET,
    UPDATE_TO_BACKET,
    EMPTY_BACKET,
    SET_USER,
} from './Actions';
import { amazonStorage } from './localStorage';

const initialState = amazonStorage.get();

const addCart = (payload) => {
    return {
        type: ADD_TO_BACKET,
        payload,
    };
};
const removeCart = (payload) => {
    return {
        type: REMOVE_TO_BACKET,
        payload,
    };
};
const updateCart = (payload) => {
    return {
        type: UPDATE_TO_BACKET,
        payload,
    };
};
const emptyBacket = (payload) => {
    return {
        type: EMPTY_BACKET,
        payload,
    };
};
const setUser = (payload) => {
    return {
        type: SET_USER,
        payload,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_BACKET:
            const resultAddBasket = {
                ...state,
                basket: [...state.basket, action.payload],
            };
            amazonStorage.set(resultAddBasket);
            return resultAddBasket;
        case REMOVE_TO_BACKET:
            const resultRemoveBasket = {
                ...state,
                basket: state.basket.filter(
                    (item, index) => index !== action.payload
                ),
            };
            amazonStorage.set(resultRemoveBasket);
            return resultRemoveBasket;
        case UPDATE_TO_BACKET:
            const resultUpdateBasket = {
                ...state,
                basket: state.basket.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                }),
            };
            amazonStorage.set(resultUpdateBasket);
            return resultUpdateBasket;
        case EMPTY_BACKET:
            const resultEmptyBasket = {
                ...state,
                basket: [],
            };
            amazonStorage.set(resultEmptyBasket);
            return resultEmptyBasket;
        case SET_USER:
            const resultSetUser = {
                ...state,
                user: action.payload,
            };
            amazonStorage.set(resultSetUser);
            return resultSetUser;
        default:
            return new Error('Action not found');
    }
};

export { initialState, addCart, removeCart, updateCart, emptyBacket, setUser };
export default reducer;
