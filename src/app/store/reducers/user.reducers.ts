import {initialUserState} from '../states/user.state';
import {EUserActions, UserActions} from '../actions/user.actions';
import {UserI} from '../interfaces/user.interface';


export const userReducers = (
  state = initialUserState,
  action: UserActions
): UserI => {
  switch (action.type) {
    case EUserActions.AuthUser: {
      return {
        ...state,
        id: action.user.id,
        name: action.user.name,
        connection: action.user.connection
      };
    }
    default: return state;
  }
};
