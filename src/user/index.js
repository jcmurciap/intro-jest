import { storage } from "../lib/storage";

export const saveUsername = (username) => {
    storage.save({key: 'username', value: username});
}

export const getUsername = () => {
    storage.get({key: 'username'});
}