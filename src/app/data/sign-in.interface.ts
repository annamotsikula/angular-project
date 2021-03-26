export interface SignInForm {
    email: string,
    password: string,
    rememberUser?: boolean,
}

export interface LogInResponse {
    token: string,
}
