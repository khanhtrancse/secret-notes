export interface AuthForm {
  password: string;
  passwordError: string | null;
}

export interface AuthState {
  isFetching: boolean;
  password: string | null;
  form: AuthForm;
}
