// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let walletBalance = JSON.parse(localStorage.getItem("amount")) || 0

document.querySelector("#wallet").innerText = walletBalance

let movieData = JSON.parse(localStorage.getItem("movie"))

function appendMovie(movieData){

    movieData.map(function(element){

        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = element.Poster

        let title = document.createElement("h3")
        title.innerText = element.Title

        div.append(image,title)
        document.querySelector("#movie").append(div)
    })

}

appendMovie(movieData)

function bookTicket(){

    let user = document.getElementById("user_name").value


    let seats = document.getElementById("number_of_seats").value

    if(user == ""|| seats == "" ){
        alert("Enter Details")
        return
    }

    else if(seats*100 <=walletBalance){
        
        localStorage.setItem("amount",JSON.stringify(walletBalance - (seats*100)))

        document.querySelector("#wallet").innerText = walletBalance

        alert("Booking Successful!")

        window.location.reload()
        
    }
    else{
        alert("Insufficient Balance !")
    }
}
