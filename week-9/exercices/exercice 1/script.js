const menuDatabase = [
  ["Papadum", 20, "vegetarian"],
  ["Pakora", 50, "meat"],
  ["Tandoori Chicken", 60, "meat"],
  ["Samosa", 50, "vegetarian"],
  ["Butter Chicken", 139, "meat"],
  ["Chicken Korma", 129, "meat"],
  ["Chicken Vindaloo", 149, "meat"],
  ["Saag Lamb", 130, "meat"],
  ["Lam Tikka Masala", 159, "meat"],
  ["Yellow Daal Tadka", 119, "vegetarian"],
  ["Biryani", 129, "vegetarian"],
  ["Gulab Jamun", 55, "dessert"],
  ["Mango Kulfi", 35, "dessert"],
  ["Rasmalai", 60, "dessert"],
];

function transformDatabase(dataBase) {
  const newMenuDatabase = dataBase.map((menuItem) => ({
    mealName: menuItem[0],
    price: menuItem[1],
    cathegory: menuItem[2],
    diplayDishCathegory:function(){
        console.log("I m a dish of type "+ this.cathegory );
    }
  }));
  console.log(newMenuDatabase);
   return (newMenuDatabase);
}

const newMenuDatabase=transformDatabase(menuDatabase);

for(dish of newMenuDatabase)
{
   console.log(dish.diplayDishCathegory());
}


