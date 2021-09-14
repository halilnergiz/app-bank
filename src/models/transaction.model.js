//                                                                         Account History - İt will be add

export default class Transaction{
    constructor(transactionType, sender, recipient, amount) {
        this.transactionType = transactionType;
        this.sender = sender;
        this.recipient = recipient;
        this.amount = amount;
        this.date = Date.now();
    }
    }
