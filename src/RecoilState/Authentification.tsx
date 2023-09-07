import {atom} from "recoil";

export const Create_account: any = atom<Array<boolean>>({
    key: 'State.Create_account',
    default: []
})

export const Sign_in: any = atom<Array<boolean>>({
    key: 'State.Sign_in',
    default: []
})