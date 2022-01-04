import {
    FETCH_RECIPES_PENDING,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_ERROR,
} from '../actions/types';

const initialState = {
    pending: false,
    data: [],
    error: null
};

export default function recipesReducer(state = initialState, action) {
    switch (action.type) {
    case FETCH_RECIPES_PENDING:
        return {
            ...state,
            pending: true
        };
    case FETCH_RECIPES_SUCCESS:
        return {
            ...state,
            pending: false,
            data: action.payload,
        };
    case FETCH_RECIPES_ERROR:
        return {
            ...state,
            pending: false,
            error: action.error
        };
    default:
        return state;
    }
}

export const getRecipes = state => state.recipes.data;
export const getRecipesPending = state => state.recipes.pending;
