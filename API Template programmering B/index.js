//joke api ENDPOINT
const jokeApiUrl = "https://official-joke-api.appspot.com/random_joke"
//HTML elemet hvor jokes kan bo
let jokeDiv


//setup køre kun en gang når programmet starter
function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightskyblue')
  let jokeButton = createButton('Get joke')
  jokeButton.center()
  //mousePressed kalder en en anonym funkition - som kalder getJoke()
  jokeButton.mousePressed( () => getJoke() )
  //opratter div til at lave jokes
  jokeDiv = createDiv('hit the button to get a joke')
  jokeDiv.addClass('jokeDiv')
}

//en async kan venter ind til noget af sket
async function getJoke(){
  //tøm jokeDiv
  jokeDiv.html('')
  //await betyder at vi venter med næste linje, til respone er modtaget
  const response = await fetch(jokeApiUrl)
  if(response.ok){
    //hent selve joken som json
    const jokeData = await response.json()
    const jokeSetup = createP(jokeData.setup)
    const jokePunchline = createP(jokeData.punchline)
    jokeDiv.child(jokeSetup)
    jokeDiv.child(jokePunchline)
  }else{
    jokeDiv.html('du større på et problem prøv igen 😢')
  }
}

function draw() {
}