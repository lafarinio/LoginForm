
export interface LoginState {
  isLogged: boolean;
}

export const initialState: LoginState = {
  isLogged: false
};

export const loginFeatureKey = 'login';

