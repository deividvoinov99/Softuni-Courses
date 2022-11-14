function launchbreak (input){

let text = (input[0]);
let epizod = Number(input[1]);
let pochivka = Number(input[2]);

let vremeObqd = pochivka / 8;
let vremeOtdih = pochivka / 4;
let ostanaloVreme = pochivka - vremeObqd - vremeOtdih;
let razlika = Math.abs(epizod - ostanaloVreme);

if (ostanaloVreme >= epizod) {
    console.log(`You have enough time to watch ${text} and left with ${Math.ceil(razlika)} minutes free time.`)
} else {
    console.log(`You don't have enough time to watch ${text}, you need ${Math.ceil(razlika)} more minutes.`)
}

}

launchbreak((["Teen Wolf",
"48",
"60"])

)