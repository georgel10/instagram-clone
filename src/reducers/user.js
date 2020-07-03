const INITIAL_STATE = {
  token: '',
  user: {},
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        user: action.user,
      };
    case 'LOG_OUT':
      return {user: {}};
    default:
      return state;
  }
}
