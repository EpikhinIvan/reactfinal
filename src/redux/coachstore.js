import { createStore } from 'redux';
import coachReducer from './coachreducer';

const coachStore = createStore(coachReducer);

export default coachStore;
