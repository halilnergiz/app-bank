import { BankAccountDb, userDb } from "../virtual-db";

export default class Transfer {
    constructor() {
        this.changeAccountRight = document.getElementById('right').addEventListener('click', this.existingAccount);
        this.changeAccountLeft = document.getElementById('left').addEventListener('click', this.existingAccount);

        document.getElementById('sendMoney').addEventListener('click', this.getTransferInformations); // Bir elementin click olayına birden fazla metot tanımlayamıyoruz 

        this.sendToThisIban = document.getElementById('enter-iban');
        this.sendToThisAmount = document.getElementById('enter-amount');
    }

    existingAccount() {
        this.thisAccountIban = document.getElementById('iban').textContent;
        this.thisAccount = BankAccountDb.accounts.find(account => account.iban == this.thisAccountIban);
        return this.thisAccount;
    }

    getTransferInformations = (sendMoneyBtn) => {
        sendMoneyBtn.preventDefault();

        this.receiverAccount = BankAccountDb.accounts.find(account => account.iban == this.sendToThisIban.value);
        this.amount = this.sendToThisAmount.value.trim();


        console.log(this.existingAccount().moneyType);
        console.log(this.receiverAccount.moneyType);
        try {
            this.receiverUser = userDb.users.find(user => user.id == this.receiverAccount.userId);
        } catch (error) {
            alert('Geçerli IBAN giriniz')
            console.log(error);
        }

        if (this.amount <= 0 || this.amount == "") {
            alert('Para Transferi İçin Geçerli Bilgi Giriniz')
            this.sendToThisAmount.value = "";
        }
        else if (this.amount > this.existingAccount().balance) {
            alert('Hesap Bakiyesi Yetersiz')
        }
        else if (this.existingAccount().moneyType != this.receiverAccount.moneyType) {
            alert('Göndermek istediğiniz para türü uyuşmamaktadır.')
        }
        else {
            let control = confirm(`${this.receiverUser.name} ${this.receiverUser.surname} isimli IBAN'a ${this.amount} ${this.existingAccount().moneyType} gönderimi onaylıyor musunuz? `)

            if (control) {
                this.moneyTransfer();
                console.log(this.existingAccount().balance);
                console.log(this.receiverAccount.balance);
            } else {
                alert('İşleminiz İptal Edilmiştir')
            }

            this.sendToThisAmount.value = "";
        }
    }

    moneyTransfer() {

        this.existingAccount().balance -= this.amount;
        this.receiverAccount.balance += this.amount;
    }

}