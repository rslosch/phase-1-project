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
    const btn = document.getElementById('view-tokens')
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
    const coin = coins.find(c => c.id === e.target.dataset.id)
    // const {name, symbol, rank, marketCapUsd, priceUsd, changePercent24Hr} = coin
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

const animals = [{
    isPet: true,
    type: "dog",
    name: "Olive",
  }, 
  {
    isPet: false,
    type: "lion",
    name: "Nala",
  },
  {
    isPet: false,
    type: "bear",
    name: "Honey",
  },
  {
    isPet: true,
    type: "cat",
    name: "Maru"
  },{
    isPet: true,
    type: "fish",
    name: "Dr. Fishy"
  }]

// sort through animals array and select the animals with isPet===true
// append and create btn to document body querySelector(#body)
// add onClick event listener which console logs name


const petAnimals = animals.forEach(pet => {
    const body = document.body

    if(pet.isPet === true) {
        console.log(pet)
        const btn = document.createElement('button')
        btn.innerHTML = pet.type
        body.appendChild(btn)
        btn.addEventListener('click', () => {
            console.log(pet.name)
        })
    }
})  
  
  
  
  