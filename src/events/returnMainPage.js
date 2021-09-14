export default class ReturnMainPage {
    constructor() {
        document.getElementById('logo').addEventListener('click', this.returnMainPage)
    }
    returnMainPage() {
        window.location = 'http://127.0.0.1:5500/src/views/accounts.html';
    }
}