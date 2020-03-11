import {ActionReducerMap} from '@ngrx/store';
import {AppStateI} from './interfaces/app.interface';
import {userReducers} from './reducers/user.reducers';
import {gameReducers} from './reducers/game.reducers';

export const appReducers: ActionReducerMap<AppStateI, any> = {
  user: userReducers,
  game: gameReducers
};
