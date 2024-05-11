const initialState = {
  coaches: [],  
  selectedCoachId: null
};

const coachReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COACH':
      return {
        ...state,
        selectedCoachId: action.payload
      };
    case 'SET_COACHES': 
      return {
        ...state,
        coaches: action.payload
      };
    default:
      return state;
  }
};

export default coachReducer;
