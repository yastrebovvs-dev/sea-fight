import {Action} from '@ngrx/store';
import {UserI} from '../interfaces/user.interface';

export enum EUserActions {
  AuthUser = '[User] user authorization'
}
export class AuthUser implements Action {
  public readonly type = EUserActions.AuthUser;
  constructor(public user: UserI) {}
}

export type UserActions = AuthUser;
