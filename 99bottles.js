// solution A
var bottlesX = 99;
while (bottlesX != 2){
    console.log(bottlesX.toString() + " bottles of beer on the wall, " + bottlesX.toString() + " bottles of beer.");
    bottlesX = bottlesX - 1;
    console.log("Take one down and pass it around, " + bottlesX.toString() + " bottles of beer on the wall.");
        if(bottlesX == 2){
            console.log("2 bottles of beer on the wall, 2 bottles of beer.");
            console.log("Take one down and pass it around, 1 bottle of beer on the wall.");
            console.log("1 bottle of beer on the wall, 1 bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
}

// solution B

var bottles = "bottles";
var nums = 99;
while (nums > 0) {
    console.log(nums + " " + bottles + " of beer on the wall, " + nums + " " + bottles + " of beer.");
    console.log("Take one down and pass it around, ");
    nums = nums - 1;
    if (nums > 0) {
        if (nums === 1) {
            bottles = "bottle";
        }
        console.log(nums + " " + bottles + " of beer on the wall.");
        console.log("");
    }
    else {
        if (nums < 1) {
            bottles = "bottles";
        }
        console.log("no more " + bottles + " of beer on the wall.");
        console.log("");
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}

