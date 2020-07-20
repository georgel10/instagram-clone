import { constants } from '../constants/constants';
import { PostEdge } from '../generated/graphql';
import { IPosts } from '../interfaces/Post';

const INITIAL_STATE: IPosts = {};

const posts = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case constants.ADD_POST:
      return {
        ...state,
        ...action.newPosts.reducer((obj: IPosts, post: PostEdge) => {
          if (post.node) {
            obj[post.cursor] = post.node;
            return obj;
          }
        }),
      };
    case constants.FIND_POST:
      return state[action.id];
    case constants.RESET_FEED:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default posts;
