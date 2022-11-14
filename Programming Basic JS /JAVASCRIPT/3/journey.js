function journey (input){

let budget = Number(input[0]);
let season = input[1];
let priceForVac = 0;
let destination = 0;
let place = 0;

if (season == "summer") {
    place = "Camp";
} else {
    place = "Hotel"
}

if (budget <= 100) {
    destination = "Bulgaria";
    if (season == "summer") {
       priceForVac = budget * 0.30; 
    }else{
        priceForVac = budget * 0.70;
    }
}else if (budget <= 1000) {
    destination = "Balkans";
    if (season == "summer") {
        priceForVac = budget * 0.40;
    }else{
        priceForVac = budget * 0.80;
    }
}else{
    destination = "Europe";
    place = "Hotel";
    priceForVac = budget * 0.90;
}

console.log(`Somewhere in ${destination}
${place} - ${(priceForVac).toFixed(2)}`);

}

journey((["75", "winter"]))