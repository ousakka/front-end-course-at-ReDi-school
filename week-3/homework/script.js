const ordFood=(nameOfTheRestaurant, amount, food) =>
   `You are ordering  ${amount} ${food} from ${nameOfTheRestaurant}`;

ordFood("italien food", 1, "Pizza margherita ");
ordFood("Doner King", 1, "Doner ");
ordFood("Soltan", 1, "Shawarma ");
console.log (ordFood("italien food", 1, "Pizza margherita "));
console.log (ordFood("Doner King", 1, "Doner "));
console.log (ordFood("Soltan", 1, "Shawarma "));