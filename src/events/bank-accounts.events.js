import { BankAccountDb, TransactionsDb, usersDb } from '../virtual-db';
import { BankAccount, Transaction, User } from '../models';

export default class BankAccountEvents {
    constructor() {
        this.loggedInUserBankAccounts = BankAccount.getLoggedInUserBankAccounts();
        this.ibanElement = document.getElementById('iban');
        this.balanceElement = document.getElementById('balance');

        this.ibanElement.textContent = this.loggedInUserBankAccounts[0].iban;
        this.balanceElement.textContent = `${this.loggedInUserBankAccounts[0].balance} ${this.loggedInUserBankAccounts[0].moneyType}`;

        this.scrollIndex = 0;
        document.getElementById('right').addEventListener('click', this.scrollRight);
        document.getElementById('left').addEventListener('click', this.scrollLeft);

        this.sayWelcome();

        this.writedIbanAtPopup = document.getElementById('enter-iban');
        this.writedAmountAtPopup = document.getElementById('enter-amount');

    }

    sayWelcome() {
        const user = User.getLoggedInUser();
        const welcomeElement = document.getElementById('welcome');
        welcomeElement.textContent = `${user.name.toUpperCase()} ${user.surname.toUpperCase()}, Welcome to App-Bank`;
        console.log(this.loggedInUserBankAccounts);
    }

    scrollRight = () => {
        if (this.scrollIndex < this.loggedInUserBankAccounts.length - 1) {
            this.scrollIndex++; 
            this.ibanElement.textContent = this.loggedInUserBankAccounts[this.scrollIndex].iban;
            this.balanceElement.textContent = `${this.loggedInUserBankAccounts[this.scrollIndex].balance} ${this.loggedInUserBankAccounts[this.scrollIndex].moneyType}`;

            this.writedIbanAtPopup.value = "";
            this.writedAmountAtPopup.value = "";
        }
    }

    scrollLeft = () => {
        if (this.scrollIndex > 0) {
            this.scrollIndex--;
            this.ibanElement.textContent = this.loggedInUserBankAccounts[this.scrollIndex].iban;
            this.balanceElement.textContent = `${this.loggedInUserBankAccounts[this.scrollIndex].balance} ${this.loggedInUserBankAccounts[this.scrollIndex].moneyType}`;

            this.writedIbanAtPopup.value = "";
            this.writedAmountAtPopup.value = "";
        }

    }
}

