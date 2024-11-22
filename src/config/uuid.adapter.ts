import {v4 as uuid} from 'uuid';


export const uuidAdapter = () : string => {
    return uuid();
}