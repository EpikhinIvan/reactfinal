const initialState = {
  isAtTop: true,
  coaches: [
    'https://fitnessfactorymaine.com/wp-content/uploads/2019/01/FF-Logo-Red-and-Black.png',
    'https://fitnessfactorymaine.com/wp-content/uploads/2019/01/FF-Logo-Red-and-White.png'
  ],
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_AT_TOP':
      return {
        ...state,
        isAtTop: action.payload
      };
    default:
      return state;
  }
};
  
export default headerReducer;


