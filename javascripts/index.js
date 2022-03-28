const BASE_URL = 'https://api.coincap.io/v2/assets'

let coins

window.addEventListener('DOMContentLoaded', () => {
    fetchCoins()
    displayCoins()
    })

function fetchCoins(){
    fetch('https://api.coincap.io/v2/assets')
    .then(res => res.json())
    .then(data => {
        coins = data.data
    })
}

function displayCoins(){ 
    let btn = document.getElementById('view-tokens')
    btn.addEventListener("click", (e) => {
        const ul = document.getElementById('token-list')
        coins.forEach(coin => {
            const li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML += 
                `<h5 class = "center-align"><a href = "#" data-id="${coin.id}">${coin.name}</a></h5>`
        })
        addEventsToList()
    })
}

const addEventsToList = () => {
    const linkedCoins = document.querySelectorAll('a')
    linkedCoins.forEach(coin => {
        coin.addEventListener("click", displayIndividualCoin)
        })
}

const displayIndividualCoin = (e) => {
    const info = document.getElementById("price-info")
    const ul = document.getElementById('token-list')
    ul.innerHTML = ""
    // fetch(`https://api.coincap.io/v2/assets/${e.target.dataset.id}`)
    // .then(res => res.json())
    // .then(data => {
        debugger
    const coin = coins.find(c => c.id === e.target.dataset.id)
    // const {name, symbol, rank, marketCapUsd, priceUsd, changePercent24Hr} = data.data
    console.log(coin)
    info.innerHTML = `
        <h1>${coin.name}</h1>
        <h1>${coin.symbol}</h1>
        <h2>${coin.rank}</h2>
        <h2>${coin.marketCapUsd}</h2>
        <h3>${coin.priceUsd}</h3>
        <h3>${coin.changePercent24Hr}</h3>
    `
}