import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { loginFeatureKey, LoginState } from './login.state';
import { RootState } from '../../../root-component/store/root.state';

export const selectLoginState: MemoizedSelector<RootState, LoginState> = createFeatureSelector<LoginState>(loginFeatureKey);
export const selectIsLogged: MemoizedSelector<RootState, boolean> = createSelector(selectLoginState, (state: LoginState) => state.isLogged);
