function outfit(input){

let outfit;
let shoes;
let temp = input[0];
let daytime = input[1];

if (temp >= 10 && temp <= 18) {
    if (daytime == "Morning") {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
    }else if (daytime == "Afternoon" || daytime == "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
} else if (temp > 18 && temp <= 24) {
    if (daytime =="Morning") {
        outfit = "Shirt";
        shoes = "Moccasins";
    }else if (daytime == "Afternoon") {
        outfit = "T-Shirt";
        shoes = "Sandals";
    }else if (daytime == "Evening") {
        outfite = "Shirt";
        shoes = "Moccasins";
    }
} else if (temp >= 25) {
    if (daytime =="Morning") {
        outfit = "T-Shirt";
        shoes = "Sandals";
    }else if (daytime == "Afternoon") {
        outfit = "Swim Suit";
        shoes = "Barefoot";
    }else if (daytime == "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
}

console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)

}