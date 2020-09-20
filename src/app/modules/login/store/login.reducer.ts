import { Action, createReducer, on } from '@ngrx/store';
import { initialState, LoginState } from './login.state';
import * as LoginActions from './login.actions';
import { ActionReducer } from '@ngrx/store/src/models';


const loginReducers: ActionReducer<LoginState> = createReducer(
  initialState,
  on(LoginActions.loginAction, state => ({ ...state, isLogged: true })),
  on(LoginActions.logoutAction, state => ({ ...state, isLogged: false })),
);

export function loginReducer(state: LoginState | undefined, action: Action): LoginState {
  return loginReducers(state, action);
}
