import { BankAccountDb, bankAccounts } from '../virtual-db';

export default class BankAccount {
    constructor(iban, id, userId, moneyType, balance) {
        this.iban = iban;
        this.id = id; // sub-accounts ID
        this.userId = userId; // main user ID
        this.moneyType = moneyType;
        this.balance = balance;
    }

    static getLoggedInUserBankAccounts() {
        // Get User Bank Accounts
        return BankAccountDb.accounts.filter(bankAccount => bankAccount.userId === Number(localStorage.getItem('id')));
    }
}
