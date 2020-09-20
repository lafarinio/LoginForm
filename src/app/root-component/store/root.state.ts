import { loginFeatureKey, LoginState } from '../../modules/login/store/login.state';

export interface RootState {
  [loginFeatureKey]: LoginState;
}
