export default  class TransferPopUp {
    constructor() {
        this.transferBtnOpen = document.getElementById('transfer-btn');
        this.transferBtnClose = document.querySelector('.popup-close');
        this.transfer = document.getElementById('Transfer');

        this.transferPopupOpen();
        this.transferPopupClose();
    }

    transferPopupClose() {
        this.transferBtnClose.addEventListener('click', () => {
            this.transfer.classList.toggle('open')
        })
    }

    transferPopupOpen() {
        this.transferBtnOpen.addEventListener('click', () => {
            this.transfer.classList.toggle('open');
        })
    }
}
