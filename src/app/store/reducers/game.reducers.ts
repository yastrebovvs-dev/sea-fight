import {initialGameState} from '../states/game.state';
import {EGameActions, GameActions} from '../actions/game.actions';
import {GameI} from '../interfaces/game.interface';


export const gameReducers = (
  state = initialGameState,
  action: GameActions
): GameI => {
  switch (action.type) {
    case EGameActions.CreateGame: {
      return {
        ...state,
        id: action.game.id,
        status: action.game.status,
      };
    }
    default: return state;
  }
};
