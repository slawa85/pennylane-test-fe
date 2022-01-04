import {
    FETCH_INGREDIENTS_PENDING,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_ERROR,
    FETCH_RECIPES_PENDING,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_ERROR,
} from './types';

export function fetchIngredientsPending() {
    return {
        type: FETCH_INGREDIENTS_PENDING
    };
}

export function fetchIngredientsSuccess(ingredients) {
    return {
        type: FETCH_INGREDIENTS_SUCCESS,
        payload: ingredients
    };
}

export function fetchIngredientsError(error) {
    return {
        type: FETCH_INGREDIENTS_ERROR,
        error
    };
}

export function fetchRecipesPending() {
    return {
        type: FETCH_RECIPES_PENDING
    };
}

export function fetchRecipesSuccess(recipes) {
    // persistor.flush();
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: recipes
    };
}

export function fetchRecipesError(error) {
    return {
        type: FETCH_RECIPES_ERROR,
        error
    };
}
