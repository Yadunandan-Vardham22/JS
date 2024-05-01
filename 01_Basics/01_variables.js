
const accountId= 12323   
let accountName= "Nandu"
var accountEmail ="Nandu@gmail.com"
accountCity = "Bengaluru"  // we can declare variables without any keywords 

console.table([accountEmail,accountName,accountCity,accountId]) 

/*

Variables declared by let are only available inside the block where they’re defined.
Variables declared by var are available throughout the function in which they’re declared.

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}


*/