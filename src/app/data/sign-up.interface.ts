export interface SignUpForm {
    email: string,
    password: string,
}

export interface SignUpResponse {
    token: string,
    id: number, 
}
