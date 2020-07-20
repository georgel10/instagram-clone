import { constants } from '../constants/constants';
import { UserState } from '../interfaces/User';

const INITIAL_STATE: UserState = {
  token: '',
  user: {},
};

const user = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case constants.LOG_IN:
      return {
        user: action.user,
      };
    case constants.LOG_OUT:
      return { user: INITIAL_STATE };
    default:
      return state;
  }
};

export default user;
