let arr = ["lion", "tiger", "bear", "wolf", "fox"]

// change the last element from `fox` to `dog`
// code here
arr[(arr.length)-1]="dog";

console.log(arr)
// ["lion", "tiger", "bear", "wolf", "dog"]


//square all exercice
let numbers = [5, 6, 2, 0, 1, 9]

// square all the values

/* let numbers2= numbers.map((n)=>n*n);
numbers2.forEach(n => {
    console.log(n);
  }); */

//  Filter the elements from numbers3 that **cannot be divided by 2**
  let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dividedByTwo(n) {
  return (n%2);
}

let numbers3Filter = numbers3.filter(n=>!dividedByTwo(n));

console.log(numbers3Filter);



