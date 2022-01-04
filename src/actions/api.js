import {
    fetchIngredientsPending,
    fetchIngredientsSuccess,
    fetchIngredientsError,
    fetchRecipesPending,
    fetchRecipesSuccess,
    fetchRecipesError,
} from './index';

export function fetchIngredients() {
    return async (dispatch) => {
        dispatch(fetchIngredientsPending());
        try {
            const response = await fetch('https://pennylane-api.herokuapp.com/v1/ingredients');
            if(response.ok) {
                const data = await response.json();
                dispatch(fetchIngredientsSuccess(data.ingredients));
                return;
            }
            throw new Error('Fetch ingredients failed');

        } catch (error) {
            dispatch(fetchIngredientsError(error));
        }
    };
}

export function fetchRecipes(ingredients) {
    return async (dispatch) => {
        if(!ingredients.length){
            return;
        }

        dispatch(fetchRecipesPending());
        try {
            const response = await fetch('https://pennylane-api.herokuapp.com/v1/recipes',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ingredients: ingredients.join(',')
                    })
                }
            );
            if (response.ok) {
                const data = await response.json();
                dispatch(fetchRecipesSuccess(data.recipes));
            }

            throw new Error('Fetch recipes failed');
        } catch (error) {
            dispatch(fetchRecipesError(error));
        }
    };
}
