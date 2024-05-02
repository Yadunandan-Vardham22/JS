let score = 33;

console.log(typeof score); // number 
console.log(score); // 33

let score1 = 'Nandu'
let score2 = Number(score1)
console.log(typeof score2); // number
console.log(score2); // NaN z

// the above applies for undefined as well

let score3 = null
let score4 = Number(score3)
console.log(typeof score4); // number
console.log(score4); // 0

let score5 = true
let score6 = Number(score5)
console.log(typeof score6); // number
console.log(score6); // 1

let isLoggedIn = 1
 let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// "" => false
// "Nandu" => true