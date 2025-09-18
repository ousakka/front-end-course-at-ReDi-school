let persons = [
  {
    id: 1,
    name: "Oumaima",
    favColor: "red",
    languages: [
      {
        firstLanguage: "Arabic",
        secondLanguage: " Frensh",
        thirdLanguage: "English",
      },
    ],
  },

  {
    id: 2,
    name: "John",
    favColor: "Bleue",
    languages: [
      {
        firstLanguage: "Arabic",
        secondLanguage: "English",
        thirdLanguage: "Danish",
      },
    ],
  },
];
console.log(persons[0].languages[0].firstLanguage); //=> Arabic
console.log(persons[1].favColor); //=> Bleue */


let numbers = [1, 2, 3, 4, 5];
console.log(shuffleArray(numbers));
