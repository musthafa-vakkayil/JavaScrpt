let tName = prompt("Enter OS Name and Version ");

let ver = Number(tName.match(/\d+/));

let os = tName.replace(ver ,"");

console.log("The OS Name is " + os + " and Version is " + ver);