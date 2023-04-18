var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(mixedArray[3][0]);


console.log(fruitArray.length);

for(x of fruitArray){
    console.log("fruit");
    if(fruit === "tomato"){
        console.log("but is it ftuit?");
    } else{
        console.log(fruit);
    }
}

fruitArray[1]= "tomato";
