class BigScaryBird {

  constructor(props){
    this.height = props.height
    this.flightless = true
    this.isExtinct = props.isExtinct
    this.name = props.name
    this.runningSpeed = props.runningSpeed
  }
  outputBirdInfo(){
    return `The ${this.name} is a big, scary bird that stands ${this.height} ft tall and runs ${this.runningSpeed} faster than you!`
  }
}


const penguin = {
  height: "48 in",
  isExtinct: false,
  name: "Emperor penguin",
  runningSpeed: "5.6 mph"
}

const emperorPenguin = new BigScaryBird(penguin)
console.log(emperorPenguin)
console.log(emperorPenguin.outputBirdInfo())

const ostrich = new BigScaryBird({
  height: "9 ft 2 in",
  isExtinct: false,
  name: "Common ostrich",
  runningSpeed: "43 mph"
})
console.log(ostrich.outputBirdInfo())

const rhea = new BigScaryBird({
  height: "39 in",
  isExtinct: false,
  name: "Darwin's rhea",
  runningSpeed: "37mph"
})
console.log(rhea.outputBirdInfo())
