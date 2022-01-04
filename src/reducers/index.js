import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import ingredientsReducer from './ingredient';
import recipesReducer from './recipe';

const rootReducer = combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ingredients', 'recipes'],
};

export default persistReducer(persistConfig, rootReducer);
