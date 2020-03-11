import {initialUserState} from './states/user.state';
import {initialGameState} from './states/game.state';
import {AppStateI} from './interfaces/app.interface';

export const initialAppState: AppStateI = {
  user: initialUserState,
  game: initialGameState,
};

export function getInitialState(): AppStateI {
  return initialAppState;
}
