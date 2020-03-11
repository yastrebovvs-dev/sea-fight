import {Action} from '@ngrx/store';
import {GameI} from '../interfaces/game.interface';


export enum EGameActions {
  CreateGame = '[Game] create new game'
}
export class CreateGame implements Action {
  public readonly type = EGameActions.CreateGame;
  constructor(public game: GameI) {}
}

export type GameActions = CreateGame;
