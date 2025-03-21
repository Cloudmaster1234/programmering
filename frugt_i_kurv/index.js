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
  cart.update();
  cart.display();
  
  // Randomly add fruits
  if (frameCount % 60 === 0) { // Add a fruit every second
    fruits.push(new Fruit(random(['banana', 'orange'])));
  }
}

// Fruit class
class Fruit {
  constructor(type) {
    this.type = type;
    this.x = random(width);
    this.y = 0;
    this.size = 40;
    this.speed = 2;
  }
  
  update() {
    this.y += this.speed; // Move the fruit down
  }
  
  display() {
    if (this.type === 'banana') {
      fill(255, 255, 0); // Yellow for bananas
      ellipse(this.x, this.y, this.size, this.size / 2); // Draw banana as an ellipse
    } else if (this.type === 'orange') {
      fill(255, 165, 0); // Orange for oranges
      ellipse(this.x, this.y, this.size); // Draw orange as a circle
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
    this.size = 100;
    this.speed = 5;
  }
  
  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }
  
  display() {
    fill(255, 0, 0); // Red for the cart
    rect(this.x, this.y, this.size, 80); // Draw the cart
  }
}