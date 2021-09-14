import { User } from '../models';

export default class LoginEvents {
    constructor() {
        this.submitElement = document.getElementById('submit');
        this.submitElement.addEventListener('click', this.login);
    }

    login(e) {
        e.preventDefault();
        const tcknElement = document.getElementById('tcknInput');
        const passwordElement = document.getElementById('passwordInput');
        const errorElement = document.getElementById('controls');

        const checkAccess = User.login(tcknElement.value, passwordElement.value);

        if (checkAccess) {
            window.location.assign('http://127.0.0.1:5500/src/views/accounts.html');
        }
        else {
            errorElement.textContent = 'Lütfen Bilgileri Eksiksiz ve Doğru Giriniz';
        }
    }
}

