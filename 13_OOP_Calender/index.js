let classContainer
let doorSound
let dataStructure =[
  {
    day:"1",
    content:"./assets/jul.jpg"
  },
  {
    day:"2",
    content:"./assets/jul.jpg"
  },
  {
    day:"3",
    content:"./assets/jul.jpg"
  },
  {
    day:"4",
    content:"./assets/jul.jpg"
  },
  {
    day:"5",
    content:"./assets/jul.jpg"
  },
  {
    day:"6",
    content:"./assets/jul.jpg"
  },
  {
    day:"7",
    content:"./assets/jul.jpg"
  },
  {
    day:"8",
    content:"./assets/jul.jpg"
  },
  {
    day:"9",
    content:"./assets/jul.jpg"
  },
  {
    day:"10",
    content:"./assets/jul.jpg"
  },
  {
    day:"11",
    content:"./assets/jul.jpg"
  },
  {
    day:"12",
    content:"./assets/jul.jpg"
  },
  {
    day:"13",
    content:"./assets/jul.jpg"
  },
  {
    day:"14",
    content:"./assets/jul.jpg"
  },
  {
    day:"15",
    content:"./assets/jul.jpg"
  },
  {
    day:"16",
    content:"./assets/jul.jpg"
  },
  {
    day:"17",
    content:"./assets/jul.jpg"
  },
  {
    day:"18",
    content:"./assets/jul.jpg"
  },
  {
    day:"19",
    content:"./assets/jul.jpg"
  },
  {
    day:"20",
    content:"./assets/jul.jpg"
  },
  {
    day:"21",
    content:"./assets/jul.jpg"
  },
  {
    day:"22",
    content:"./assets/jul.jpg"
  },
  {
    day:"23",
    content:"./assets/jul.jpg"
  },
  {
    day:"24",
    content:"./assets/jul.jpg"
  },
]

function preload() {
  doorSound = loadSound('.assets/dooeSound.mp3')
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')

  let door = new Door(calendarContainer, "12", '·/assets/jul.jpg')

  for( door of dataStructure ){
    new Door(calendarContainer, door.day, door.content, door.Sound)
  }
}