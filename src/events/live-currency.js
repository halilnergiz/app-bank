export default class LiveCurrency {
    constructor() {
        document.getElementById('live-currency').addEventListener('click', this.liveCurrency)
    }

    liveCurrency() {
        window.location = 'http://127.0.0.1:5500/src/views/currency.html'
    }
}