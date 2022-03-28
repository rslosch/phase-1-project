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
    const info = document.getElementById("coin-info")
    const ul = document.getElementById('token-list')
    ul.innerHTML = ""
    // fetch(`https://api.coincap.io/v2/assets/${e.target.dataset.id}`)
    // .then(res => res.json())
    // .then(data => {
    const coin = coins.find(c => c.id === e.target.dataset.id)
    // const {name, symbol, rank, marketCapUsd, priceUsd, changePercent24Hr} = data.data
    console.log(coin)
    info.innerHTML = `
        <h1>Coin: ${coin.name}</h1>
        <h1>Ticker: ${coin.symbol}</h1>
        <h2>Rank: ${coin.rank}</h2>
        <h2>Market Cap: $${coin.marketCapUsd.split(".")[0]}</h2>
        <h3>Current Price: $${coin.priceUsd.split(".")[0]}</h3>
        <h3>24hr Price Change: ${coin.changePercent24Hr.slice(0,4)}%</h3>
    `
}