import { User } from '../models'

export default class userDb {
    static users = new Array(
        new User(1, '10020', "Halil", "Nergiz", "123456"),
        new User(2, '30020', "Ali", "Hatem", "654321"),
        new User(3, '40020', "Mehmet", "Öztürk", "123456"),
    );
}

