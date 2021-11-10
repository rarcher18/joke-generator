const jokeText = document.getElementById("jokes")
const jokeBtn = document.getElementById("btn")

jokeBtn.addEventListener("click", generateJokes)

generateJokes()

async function generateJokes() {
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw,religious,racist,sexist,explicit"
    )
    const data = await res.json()
    console.log(data)

    console.log(data.joke)
    console.log(data.delivery)  //testing to see the difference api calls

    let joke =""
    if (data.joke ==undefined) {
        joke = `${data.setup} <br /> <br /> ${data.delivery}`
    } else{
        joke= data.joke
    }
    jokeText.innerHTML = joke


}