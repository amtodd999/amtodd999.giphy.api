const giphyURL = 'api.giphy.com/v1/stickers/trending';
const apiKey = 'k2CdM6mYUozBXFwPedugJJTP1nPj4AkU';
const cardsUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey +'&limit=8&rating=r'
const weirdUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&rating=r&tag=weird';
const rdmUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&rating=r';
const quotes = ["If you're a horse, and someone gets on you, and falls off, and then gets right back on you, I think you should buck him off right away.",
                "Children need encouragement. So if a kid gets an answer right, tell him it was a lucky guess. That way, he develops a good, lucky feeling.",
                "I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world, because they'd never expect it.",
                "If trees could scream, would we be so cavalier about cutting them down? We might, if they screamed all the time, for no good reason.",
                "Sometimes I think you have to march right in and demand your rights, even if you don't know what your rights are, or who the person is you're talking to. Then on the way out, slam the door.",
                "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
                "To me, boxing is like a ballet, except there's no music, no choreography, and the dancers hit each other.",
                "I hope if dogs ever take over the world, and they chose a king, they don't just go by size, because I bet there are some Chihuahuas with some good ideas."]
const rdmQuote = document.querySelector('.random-quote');
let quoteBtn = document.querySelector("#quote-Btn");
const cardTitle = document.querySelector(".card-title");
let resultsTitle = document.getElementById("results-title");
const trending = document.getElementById("trending")


//TRENDING SECTION
async function firstGiphy() {
    const response = await fetch (cardsUrl)
    const data = await response.json();
    const result = data.data;
    console.log(result);
    displayResults(result);
    
}
firstGiphy();

function displayResults(result) {
    for (a of result) {
        let divItem =document.createElement("div");
        let listItem = document.createElement("img");
        listItem.setAttribute("src", a.images.downsized_medium.url);
        listItem.setAttribute("alt", a.title)
        listItem.setAttribute("height", "200");
        listItem.setAttribute("width", "350");
        trending.appendChild(divItem);
        divItem.appendChild(listItem);
    }
}

//WEIRD SECTION
async function retrieveWeird() {
    const responseW = await fetch (weirdUrl)
    const dataW = await responseW.json();
    console.log(dataW);
    console.log(dataW.data.images.original.url);
    document.getElementById("weird-img").src = dataW.data.images.original.url;
    
}
retrieveWeird();


//RANDOM SECTION
quoteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let userInput = document.querySelector("#input-answer").value;
    quoteUrl = rdmUrl + "&tag=" + userInput;
    console.log(quoteUrl);

    async function retrieveRandom() {
        const response = await fetch(quoteUrl)
        const dataR = await response.json();
        console.log(dataR);
        console.log("random: " + dataR.data.images.original.url);
        document.getElementById("random-img").src = dataR.data.images.original.url;
        
    }
    retrieveRandom();

    function finalQuote () {
        let randomQuote = Math.floor(Math.random() * quotes.length); 
        return (quotes[randomQuote]);
    }
    finalQuote();
    rdmQuote.innerHTML = finalQuote();
    
    async function quoteGiphy() {
        const response = await fetch (cardsUrl)
        const data = await response.json();
        console.log(data);
    }
    quoteGiphy();
})

