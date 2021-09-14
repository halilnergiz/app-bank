import { userDb } from '../virtual-db'

export default class User {
    constructor(id, tckn, name, surname, password) {
        this.id = id;
        this.tckn = tckn;
        this.name = name;
        this.surname = surname;
        this.password = password;


    }

    // Get User From LocalStorage (With LocalStorage value)
    static getLoggedInUser() {
        return userDb.users.find(user => user.id == Number(localStorage.getItem('id')));
    }


    static login(tckn, password) {

        const user = userDb.users.find(user => user.tckn === tckn)

        if (!tckn || !password) {
            return false;
        }

        else if (!user || user.password !== password) {
            return false;
        }

        else {
            localStorage.setItem('id', user.id);
            return true;
        }
    }
}

