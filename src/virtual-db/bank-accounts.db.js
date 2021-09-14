import { BankAccount } from '../models';


export default class BankAccountDb {

    static accounts = new Array(
        // Halil
        new BankAccount("TR101", 1, 1, "TL", 0),
        new BankAccount("TR201", 2, 1, "$", 45000),
        new BankAccount("TR301", 3, 1, "€", 15000),

        // Ali
        new BankAccount("TR102", 1, 2, "TL", 1000),
        new BankAccount("TR202", 2, 2, "$", 87985),
        new BankAccount("TR302", 3, 2, "€", 0),

        // Mehmet
        new BankAccount("TR103", 1, 3, "TL", 0),
        new BankAccount("TR203", 2, 3, "$", 156536),
        new BankAccount("TR303", 3, 3, "€", 0),
    )
}
