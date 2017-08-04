// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let totalPrice = 0;
  let avgPrice = 0;
  // Add "price" from all objects within the array
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price;
  }
  // Divide the total by the array.length
  avgPrice = totalPrice / data.length;

  // console.log the final output rounded to 2 decimal places
  console.log(`The average price is $${avgPrice.toFixed(2)}`);
}

// console.log(data[0].price);


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  // Create an array to hold the "title" of each item with "price" 14<=x<=18
  // const midPrice = [];
  // Use loop to check each price and then an if to determine to push the title to new array
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      console.log(data[i].title);
    }
  }
  // console.log(midPrice);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  // Initialize two variabls to hold the title and price
  let gbpTitle = "";
  let gbpPrice = 0;
  // Iterate over each item in the array and check its "currency_code"
  for (let i = 0; i < data.length; i++) {
    // Create an if statement to store its name and price in a variable if "currency_code" === GBP
    if (data[i].currency_code === "GBP") {
      gbpTitle = data[i].title;
      gbpPrice = data[i].price;
    }
  }

  // log that variable
  console.log(`${gbpTitle} costs ${gbpPrice} pounds.`);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  // Initialize an array of wooden products
  const woodenProducts = [];
  // Loop over data array to check each the property "materials" within each object materials will be an array. check this inner array for wood
  // Break this into two loops. An outer loop to iterate over the data array and an inner loop to iterate over the materials array. The if statement will go inside the innter loop
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++) {
      // if statemnt: if there "wood" is found within the materials array within any object within the data array, push the title to woodenProducts
      if (data[i].materials[j] === 'wood' ) {
        woodenProducts.push(data[i].title);
      }
    }
  }
  //originally I just logged the array but I refactored to match formatting
  //console.log(woodenProducts)

  // REFACTORED Initialize and log answer4
  let answer4 = `${woodenProducts[0]} is made of wood\n${woodenProducts[1]} is made of wood\n${woodenProducts[2]} is made of wood\n${woodenProducts[3]} is made of wood\n${woodenProducts[4]} is made of wood`
  console.log(answer4);
}

// console.log(data[0].materials);

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.

//THIS WAS MY FIRST SOLUTION BUT I WANTED TO REFACTOR IT. SEE BELOW
// function question5 () {
//   // Answer:
//   // Initialize an array to hold the products made of at least 8 different materials
//   const complexProducts = [];
//   // Each item in this array will be an object with three properties: title, # of materials, and materials - materials will be an array itself
//   for (let i = 0; i < data.length; i++) {
//       // If the data.materials.length >= 8, push the title, # of materials, and materials array into complexProducts
//       if (data[i].materials.length >= 8) {
//         complexProducts.push(data[i].title);
//         complexProducts.push(data[i].materials.length);
//         complexProducts.push(data[i].materials);
//       }
//     }
//   // log complexProducts
//   console.log(complexProducts);
// }

//REFACTORED

function question5 () {
  // Answer:
  // Initialize an array to hold the products made of at least 8 different materials
  const complexProducts = [];
  // Each item in this array will be an object with three properties: title, # of materials, and materials - materials will be an array itself
  for (let i = 0; i < data.length; i++) {
      // If the data.materials.length >= 8, push the title, # of materials, and materials array into complexProducts
      if (data[i].materials.length >= 8) {
        const newObject = {};
        newObject.title = data[i].title;
        newObject.number_of_materials = data[i].materials.length;
        newObject.materials = data[i].materials;
        complexProducts.push(newObject);
      }
    }
  // log complexProducts
  console.log(complexProducts);
}

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  // Initialize var numberOfSelfmade
  let numberOfSelfmade = 0;
  // Use a loop to iterate over 'who_made' property
  for (let i = 0; i < data.length; i++) {
    // if 'who_made' === 'i_did' , increment var numberOfSelfmade
    if (data[i].who_made === 'i_did') {
      numberOfSelfmade ++;
    }
  }
  //Initialize and log sentence
  let sentence = `${numberOfSelfmade} items were made by their sellers.`
  console.log(sentence);
}
