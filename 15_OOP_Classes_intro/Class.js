console.log('OOP is here')

class Being {
  //super klasse kaldes ved oprettelse af nye objekter 
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce(){
    console.log(`hello from ${this.name}, ${this.age} years old`)
  }
}

class Alien extends Being {
  constructor(name, age, planet){
    super(name, age)
    this.planet = planet
  }

  introduce(){
    super.introduce()
    console.log(`AND i am an ALIEN, I'M A Legal AILEN from planet of ${this.planet}`)
  }

}

class Human extends Being{
  constructor(name, age, nof){
    super(name, age)
    this.nof = nof
  }
  brag(){
    for(let i=0;i<this.nof;i++){
      console.log(`i am superior because i have så many fingers`)
    }
  }
}
