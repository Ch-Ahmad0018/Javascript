'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

 const weekDays=['mon','tue','wed','thu','fri','sat','sun'];

 const openingHours= {
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,
      close: 23,
    },
    [`day-${2+4}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // First Enhancement
  openingHours,
  order(starterIndex,mainIndex){
   return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  // Function receives an object

  orderDelivery({starterIndex=1,time,address,finalIndex=2}){
   console.log(`Order made by ${this.starterMenu[starterIndex]} and ${this.starterMenu[finalIndex]} will be delivered at ${address}at ${time}`);
  },
  orderPasta(ing1,ing2,ing3){
  console.log(`Here we have delicious pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza(ing1,...ing2){
 console.log(`Pizza is made with ${ing1},${ing2}`);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


// ------------------------------10. FOR OF LOOP-----------------------------------------------

// const menu=[...restaurant.mainMenu,...restaurant.starterMenu];
// for (const item of menu)console.log(item);
// for (const item of menu.entries())console.log(item);
// for (const [i,j] of menu.entries())console.log(`${i+1} : ${j}`);
// ------------------------------9. Coding Challenge # 1----------------------------------------

// // 1
//   const players1=[...game.players[0]];
//   const players2=[...game.players[1]];
//   console.log(players1,players2);
// // 2
//   const [gk1,...fieldPlayers1]=players1;
//   console.log(gk1,fieldPlayers1);
  
//   const [gk2,...fieldPlayers2]=players1;
//   console.log(gk2,fieldPlayers2);
// // 3
//   const allPlayers=[...players1,...players2];
//   console.log(allPlayers);
// // 4
//   const players1Final=[...players1,'Thiago', 'Coutinho','Perisic'];
//   console.log(players1Final);
// // 5
//   const {odds:{team1,x:draw,team2}}=game;
//   console.log(team1,draw,team2);
// // 6
//   const printGoals=function(...playerGoals){
//   for (let k of playerGoals){
//     console.log(`${k} scored a goal`);
//   }
//   }
// printGoals(...game.scored);
// // 7
// const won=team1<team2 && `team1 is more likely to win.`;
// console.log(won);
// // ------------------------------8. Nullish Coalescing Operator------------------------------
// restaurant.numGuests=0;
// const guest=restaurant.numGuests || 10;
// console.log(guest);

// // Nullish values: Null and Undefined (NOT 0 or '')
// const guest2=restaurant.numGuests ?? 10;
// console.log(guest2);
// ----------------------------------7. Short Circuiting----------------------------------------

// // 3 properties of AND or OR operators
// // Use any datatype,return any datatype, short circuiting

// // ************OR operator

// console.log(3 || 'Ahmad');
// console.log('' || 'Ahmad');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || undefined || 'Hello'||1||0);

// restaurant.numGuests=23;
// const guests1=restaurant.numGuests ? restaurant.numGuests :10;

// // Use Case of OR operator 
// // Setting default values
// console.log(guests1);

// const guest2=restaurant.numGuests || 10;
// console.log(guest2);

// // ************AND operator
// console.log(0 && 'Ahmad');
// console.log(7 && 'Ahmad');
// console.log('Hello',23,'Jonas',null);

// // Practical Application
// // Use Case of AND operator 
// // Setting second operand value

// if (restaurant.orderPizza){
//   restaurant.orderPizza('Mushrooms','Olives','Onions');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms','Olives','Onions');
// ----------------------------------6. Rest Pattern etc----------------------------------------

// // Spread Operator because on the Right side of (=) operator.
// const arr=[1,2,...[3,4]];
// console.log(arr);

// // Rest because on the left side of (=) operator.
// const [first,second,...others]=[1,2,3,4,5];
// console.log(first,second,others);

// // It does not include skipped elements, it includes only elements after the last variable
// const [pizza,,Risotto,...othersFood]=[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(pizza,Risotto,othersFood);

// // Also Works in Objects
// const {sat,...otherDays}=restaurant.openingHours;
// console.log(sat,otherDays);

// // Functions mein rest parameters or rest arguments
// const add=function(...numbers){
//  let sum=0;
//  for (let k of numbers){
//   sum+=k;
//  }
//  return sum;
// }
// console.log(add(2,3));
// console.log(add(2,3,4,5));
// console.log(add(2,3,4,5,6,7,8));

// const x=[1,2,3,4];
// console.log(add(...x));

// restaurant.orderPizza('Mushrooms','Olives','Onions');
// ----------------------------------5. Spread Operator-----------------------------------------
// const arr=[7,8,9];
// // Initially
// const badNewArr=[1,2,arr[0],arr[1],arr[2]];
// // Using spread operator
// const newArr=[1,2,...arr];
// console.log(arr,newArr);

// const newMenu=[...restaurant.starterMenu,'gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy=[...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Joining Two arrays
// const arr=[1,2,3];
// const arr2=[7,8,9];
// const newArr=[...arr,...arr2];
// console.log(newArr);
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);

// // Iterables : Strings,Maps,Sets,Arrays but not Objects
// const str='Ahmad';
// const letters=[...str,' ','ch'];
// console.log(letters);
// console.log(...str);

// // Calling OrderPasta function
// // const ingredients=[
// //   prompt('Let\'s make pasta with ingredient1?' ),
// //   prompt('Ingreident2'),
// //   prompt('Ingredient3')
// // ];
// // restaurant.orderPasta(...ingredients);

// // Objects
// // Spread operator ki madad se restaurantCopy pe koi change agr kiya jai ga wo restaurant pe show nai ho ga, Waise object mein aik jaga change dusri jaga b krata hai.
// const restaurantCopy={...restaurant};
// restaurantCopy.name="Ahmad Ka Restaurant";
// console.log(restaurant.name,restaurantCopy.name);
// ----------------------------------4. Destructuring Objects-----------------------------------
// **********Using same variable names
// const {name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);

// *********Using different variable names
// const {name:restaurantName,openingHours:open}=restaurant;
// console.log(restaurantName,open);

// **********Using default values
// const {menu=[],name:restaurantName='Chicago'}=restaurant;
// console.log(menu,restaurantName);

// **********Switching or mutating variables
// let a=1999;
// let b=2999;
// let obj={a:23,b:7};
// ({a,b}=obj);
// console.log(a,b);

// **********Destructuring in Nested Objects
// const {fri:{open:o,close:c} }=restaurant.openingHours;
// console.log(o,c);

// **********Passing an Object to orderDelivery Method
// restaurant.orderDelivery({
//   time:'20:00',
//   address:'Village Maroof Post Office JPJ',
//   starterIndex:2,
//   finalIndex:0
// })
// restaurant.orderDelivery({
//   time:'20:00',
//   address:'Village Maroof Post Office JPJ'
// })
// -----------------------------------3. Destructuring Arrays-----------------------------------
// const arr=[2,3,4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
// console.log(a,b,c);

// const [p,q,r]=arr;
// console.log(p,q,r);

// Initially
// const arr=[2,3,4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];

// // **********Using Destructuring
// const [p,q,r]=arr;
// console.log(p,q,r);
// console.log(a,b,c);

// let [first,,second]=restaurant.categories;
// console.log(first,second);

// // **********Switching Variables
// // Initially
// // const temp=first;
// // first=second;
// // second=temp;
// // console.log(first,second);
// // Using destructuring
// [first,second]=[second,first];
// console.log(first,second);

// // **********Retrieve 2 values from a function
// const [starter,main]=restaurant.order(2,0);
// console.log(starter,main);

// //********** Destructuring in Nested Arrays
// // const nested=[2,3,[4,5]];
// // const [i,,[j,k]]=nested
// // console.log(i,j,k);

// //********** Default Values
// const arr2=[4,5];
// const [m=1,n=1,o=1]=arr2;
// console.log(m,n,o);

// -------------------------------------Extra Exercise-------------------------------------------
// const str='Chaudhry Ahmad Mubashar';
// const obj={};
// for (let k of str){
//   if (obj[k]){
//     obj[k]+=1;
//   }
//   else{
//     obj[k]=1;
//   }
// }
// console.log(obj);

