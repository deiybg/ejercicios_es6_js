//////////////////////////////////////////EJERCICIO 1.1/////////////////////////////////////////////////

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

const { title, gender, year } = game;

console.log(title);  
console.log(gender); 
console.log(year); 


//////////////////////////////////////////EJERCICIO 1.2/////////////////////////////////////////////////

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruits1, fruits2, fruits3] = fruits;

console.log(fruits1);
console.log(fruits2);
console.log(fruits3);


//////////////////////////////////////////EJERCICIO 1.3/////////////////////////////////////////////////

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}

    
};
////comenté estas lineas de codigo para que no me generara error por tener dos variables name 


// const { name, race } = animalFunction();
// console.log(name);
// console.log(race);

//////////////////////////////////////////EJERCICIO 1.4/////////////////////////////////////////////////

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;

console.log(name);
console.log(itv);

const [firstyear, secondyears, thirdyears] = itv;

console.log(firstyear);
console.log(secondyears);
console.log(thirdyears);