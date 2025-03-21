// filepath: /Users/simondineshansen/Documents/Skole/programmering/Github/programmering/frugt i kurv/index.js

let fruits = [];
let cart;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cart = new Cart();
}

function draw() {
  background(255);
  
  // Update and display fruits
  for (let i = fruits.length - 1; i >= 0; i--) {
    fruits[i].update();
    fruits[i].display();
    
    // Check for collision with the cart
    if (fruits[i].collidesWith(cart)) {
      fruits.splice(i, 1); // Remove fruit if it collides with the cart
    }
  }
  
  // Display the cart
  cart.display();
}

function mousePressed() {
  // Add a new fruit when the mouse is pressed
  let fruitType = random(['banana', 'orange']);
  fruits.push(new Fruit(random(width), 0, fruitType));
}

// Fruit class
class Fruit {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.size = 30; // Size of the fruit
  }

  update() {
    this.y += 5; // Fall speed
  }

  display() {
    if (this.type === 'banana') {
      fill(255, 255, 0); // Yellow for bananas
      ellipse(this.x, this.y, this.size, this.size);
    } else if (this.type === 'orange') {
      fill(255, 165, 0); // Orange for oranges
      ellipse(this.x, this.y, this.size, this.size);
    }
  }

  collidesWith(cart) {
    return this.x > cart.x && this.x < cart.x + cart.size && this.y + this.size / 2 > cart.y;
  }
}

// Cart class
class Cart {
  constructor() {
    this.x = windowWidth / 2 - 50;
    this.y = windowHeight - 200;
    this.size = 100; // Size of the cart
  }

  display() {
    fill(255, 0, 0); // Red for the cart
    rect(this.x, this.y, this.size, 80);
  }
}