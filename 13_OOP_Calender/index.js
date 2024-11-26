let classContainer
let doorSound

function preload() {
  doorSound = loadSound('.assets/dooeSound.mp3')
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')

  let door = new door(calendarContainer, "12", '·/assets/jul.jpg')
}