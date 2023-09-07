import {atom} from "recoil";

export const UsersState = atom<UsersType>({
    key: 'State.UsersState',
    default: {
        _id: '',
        email: '',
        username: '',
        password: ''
    }
})

export type UsersType = {
    _id: string,
    email: string,
    username: string,
    password: string,
    createdAt?: string,
    updatedAt?: string
}