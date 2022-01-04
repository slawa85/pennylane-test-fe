import {
    FETCH_INGREDIENTS_PENDING,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_ERROR,
} from '../actions/types';

const initialState = {
    pending: false,
    data: [],
    error: null
};

export default function ingredientsReducer(state = initialState, action) {
    switch (action.type) {
    case FETCH_INGREDIENTS_PENDING:
        return {
            ...state,
            pending: true
        };
    case FETCH_INGREDIENTS_SUCCESS:
        return {
            ...state,
            pending: false,
            data: action.payload,
        };
    case FETCH_INGREDIENTS_ERROR:
        return {
            ...state,
            pending: false,
            error: action.error
        };
    default:
        return state;
    }
}

export const getIngredients = state => state.ingredients.data;
export const getIngredientsPending = state => state.ingredients.pending;
export const getEventsError = state => state.ingredients.error || '';
