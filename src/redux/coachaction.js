export const selectCoach = (coachId) => {
    return {
      type: 'SELECT_COACH',
      payload: coachId
    };
  };
  