import axios from 'axios';
import { loadRecipes, receivedRecipes, errorLoadingRecipes } from './actions';

// export const loadRecipesThunk = () => async dispatch => {
//   dispatch(loadRecipes());
//   apiRequest()
//     .then(res => dispatch(receivedRecipes(res)))
//     .catch(err => dispatch(errorLoadingRecipes(err)));
// };
//
// const apiRequest = () =>
//   axios.get('/frontend-dev-test/recipes.json').then(response => response.data);
