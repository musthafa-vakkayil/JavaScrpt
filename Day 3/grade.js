let mark = prompt("Enter Your Mark");

if (mark >= 80){
    console.log("Mark are " + mark + " and Grade is A+");
}
else if(mark >= 70 && mark < 80 ){
    console.log("Mark are " + mark + " and Grade is A");
}
else if(mark >= 60 && mark < 70 ){
    console.log("Mark are " + mark + " and Grade is B+");
}
else if(mark >= 50 && mark < 60 ){
    console.log("Mark are " + mark + " and Grade is B");
}
else if(mark >= 40 && mark < 50 ){
    console.log("Mark are " + mark + " and Grade is C");
}
else{
    console.log("Mark are " + mark + " and Grade is D");
}