// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletBalance = JSON.parse(localStorage.getItem("amount")) || 0

document.getElementById("wallet").innerText = walletBalance

async function searchMovies(){

    // https://www.omdbapi.com/?apikey=fd2b5e25&s=${search}

    let search = document.querySelector("#search").value

    let response = await fetch(`https://www.omdbapi.com/?apikey=fd2b5e25&s=${search}`)

    let data = await response.json()

    let movies = data.Search
    return movies

    
}

function appendMovies(videos){

    document.querySelector("#movies").innerHTML = null

    if(videos == undefined){
        return
    }
    
    videos.forEach(function(element){

        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = element.Poster

        let title = document.createElement("h3")
        title.innerText = element.Title

        let book = document.createElement("button")
        book.innerText = "Book Now"
        book.setAttribute("class","book_now")
         book.addEventListener("click",function(){

            bookMovie(element)
         })

        div.append(image,title,book)
        document.querySelector("#movies").append(div)
    })
    
}

let id;

async function main(){

    let moviesData = await searchMovies()
    
    appendMovies(moviesData)
}

function debounce(main,timer){

    clearTimeout(id)

    id = setTimeout(function(){

        main();
    },timer)
}


function bookMovie(element){

    let movieData = []

    movieData.push(element)

    localStorage.setItem("movie",JSON.stringify(movieData))

    window.location.href = "checkout.html"
}
