
let grosary = [];
$(document).ready(function () {
  $("#add").click(function () {
    let items = $("#item").val();
    grosary.push(items);
  });
});

$("#submit").click(function ()  {
  let totalBill = 0;
  let listOfItems = {
    sugar: 40,
    oil: 140,
    rice: 80,
    flour: 60,
    eggs: 120,
    milk: 90,
    bread: 50,
    chicken: 200,
    cheese: 150,
    pasta: 70,
    tomatoes: 30,
    onions: 25,
    potatoes: 35,
    carrots: 40,
    broccoli: 50,
    spinach: 45,
    apples: 60,
    bananas: 40,
    oranges: 50,
    grapes: 80,
    strawberries: 120,
    yogurt: 70,
    butter: 100,
    coffee: 150,
    tea: 30,
    juice: 80,
    water: 20,
    soda: 45,
    chips: 65,
    cookies: 55,
    chocolate: 75,
    iceCream: 100,
    salt: 15,
    pepper: 20,
    garlic: 30,
    vinegar: 25,
    soySauce: 35,
    ketchup: 40,
    mustard: 30,
    mayonnaise: 50,
    pickles: 35,
    olives: 60,
    beans: 55,
    lentils: 65,
    quinoa: 90,
    nuts: 120,
    honey: 80,
    jam: 45,
    soap: 30,
    shampoo: 50,
    boiled_apple : 2000
  };

  for (let i = 0; i < grosary.length; i++) {
    let it = listOfItems[grosary[i]];
    totalBill += it;
  }

  $("#totalBill").html(totalBill);

  
});

// console.log(grosary);
