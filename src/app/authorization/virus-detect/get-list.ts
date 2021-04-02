export interface IUser {
    gender: string,
    name: IName[],
    location: ILocation[],
    email: string,
    phone: string,
    picture: any,
}

export interface IName {
    first: string,
    last: string,
}

export interface ILocation {
    city: string,
    state: string,
    country: string,
    postcode: number,
}