import { createStore, combineReducers } from 'redux';
import headerReducer from './reducers';

const rootReducer = combineReducers({
  header: headerReducer
});

const store = createStore(rootReducer);

export default store;
