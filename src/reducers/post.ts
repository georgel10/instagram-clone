import { constants } from '../constants/constants';
import { PostEdge } from '../generated/graphql';
import { IPosts } from '../interfaces/Post';

const INITIAL_STATE: IPosts = {};

const posts = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case constants.ALL_POSTS:
      return state;
    case constants.ADD_POST:
      const newData = action.newPosts.reduce((obj: any, post: PostEdge) => {
        if (post.node) {
          return {
            ...obj,
            [post.cursor]: post.node,
          };
        } else {
          return obj;
        }
      });
      console.log({ newData });
      return {
        ...state,
        ...newData,
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
