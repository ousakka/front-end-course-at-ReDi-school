moneyToSpendInCoffeeUntil80(25, 60);

function moneyToSpendInCoffeeUntil80(age, coffeCost) {
  let daysUntil80 = (80 - age) * 365;
  let moneyToSpend = daysUntil80 * coffeCost;
  console.log("I will spend " + moneyToSpend + " DK on coffee until I get 80");
  alert("I will spend " + moneyToSpend + " DK on coffee until I get 80");
}
