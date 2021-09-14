import axios from "axios";

const endPoint = 'https://finans.truncgil.com/today.json';


export default class Currency {
    constructor() {
        this.euroPurchase()
        this.euroSale()
        this.dolarSale()
        this.dolarPurchase()
        this.updateTimeOfCurrency()
    }

    euroPurchase() {
        axios.get(endPoint)
            .then(res =>
                document.getElementById('euroPurchase').innerHTML += ' ' + res.data.EUR.Alış
            )
            .catch(err =>
                err = document.getElementById('euroPurchase').innerHTML += ' Veriler Alınamadı'
            )
    }

    euroSale() {
        axios.get(endPoint)
            .then(res =>
                document.getElementById('euroSale').innerHTML += ' ' + res.data.EUR.Satış
            )
            .catch(err =>
                err = document.getElementById('euroSale').innerHTML += ' Veriler Alınamadı'
            )
    }

    dolarPurchase() {
        axios.get(endPoint)
            .then(res =>
                document.getElementById('dolarPurchase').innerHTML += ' ' + res.data.USD.Alış
            )
            .catch(err =>
                err = document.getElementById('dolarPurchase').innerHTML += ' Veriler Alınamadı'
            )
    }

    dolarSale() {
        axios.get(endPoint)
            .then(res =>
                document.getElementById('dolarSale').innerHTML += ' ' + res.data.USD.Satış
            )
            .catch(err =>
                err = document.getElementById('dolarSale').innerHTML += ' Veriler Alınamadı'
            )
    }

    updateTimeOfCurrency() {
        axios.get(endPoint)
            .then(response =>
                document.getElementsByClassName('date')[0].innerHTML = response.data.Update_Date)
                
            .catch(error => error)
    }
}