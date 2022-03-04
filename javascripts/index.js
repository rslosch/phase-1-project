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
        console.log(data)
        coins = data.data
    })
}

function displayCoins(){
    let btn = document.getElementById('view-tokens')
    btn.addEventListener("click", (e) => {
        console.log(e.target)
        const ul = document.getElementById('token-list')
        coins.forEach(coin => {
            const li = document.createElement('li')
            ul.appendChild(li)
            const a = document.createElement('a')
            li.appendChild(a)
            li.innerHTML += 
                `<li><h5 class = "center-align">${coin.name}</h5></li>`

        })
    })
    
}