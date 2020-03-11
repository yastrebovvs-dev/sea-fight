import {UserI} from './user.interface';
import {GameI} from './game.interface';

export interface AppStateI {
  user: UserI;
  game: GameI;
}
