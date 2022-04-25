// Store the wallet amount to your local storage with key "amount"
let walletBalance = JSON.parse(localStorage.getItem("amount")) || 0

document.getElementById("wallet").innerText = walletBalance

function addMoney(){

    let wallet = Number(document.querySelector("#amount").value)

    localStorage.setItem("amount",JSON.stringify(walletBalance +wallet))

    document.getElementById("wallet").innerText = walletBalance

    window.location.reload()

}
