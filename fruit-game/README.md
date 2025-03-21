### Updated `index.js`

```javascript
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
  }
  
  display() {
    fill(255, 0, 0); // Red for the cart
    rect(this.x, this.y, this.size, 80); // Draw the cart
  }
}
```

### Explanation of the Code

1. **Setup and Draw Functions**: The `setup` function initializes the canvas and creates a shopping cart. The `draw` function updates the background, updates and displays the fruits, checks for collisions, and displays the cart.

2. **Fruit Class**: This class represents the falling fruits. It has properties for type, position, size, and speed. The `update` method moves the fruit down the screen, and the `display` method draws the fruit based on its type.

3. **Collision Detection**: The `collidesWith` method checks if the fruit has collided with the cart by comparing their positions.

4. **Cart Class**: This class represents the shopping cart at the bottom of the screen. It has properties for position and size and a `display` method to draw the cart.

5. **Random Fruit Generation**: Every second (60 frames), a new fruit is randomly generated and added to the `fruits` array.

### HTML and CSS

You can keep your existing `index.html` and `style.css` files as they are, as they are already set up correctly to run the p5.js sketch.

### Running the Game

To run the game, simply open the `index.html` file in a web browser. You should see bananas and oranges falling from the top of the screen, and they will disappear when they collide with the red shopping cart at the bottom.