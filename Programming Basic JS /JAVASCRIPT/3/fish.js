function fish (input){

    let budget = Number (input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let rent = 0;
    let discount = 0;
    let money = 0;

    if (season == "Spring") {
        rent = 3000;
        if (fisherman <= 6) {
            discount = rent * 0.10;
        }else if (fisherman >= 7 && fisherman <= 11) {
            discount = rent * 0.15;
        }else if (fisherman >= 12) {
            discount = rent * 0.25;
        }
    }else if (season == "Summer" || season == "Autumn") {
        rent = 4200;
        if (fisherman <= 6) {
            discount = rent * 0.10;
        }else if (fisherman >= 7 && fisherman <= 11) {
            discount = rent * 0.15;
        }else if (fisherman >= 12) {
            discount = rent * 0.25;
        }
    }else if (season == "Winter") {
        rent = 2600;
        if (fisherman <= 6) {
            discount = rent * 0.10;
        }else if (fisherman >= 7 && fisherman <= 11) {
            discount = rent * 0.15;
        }else if (fisherman >= 12) {
            discount = rent * 0.25;
        }

    }

    money = rent - discount;

    if (fisherman % 2 == 0 && season != "Autumn") {
        money *= 0.95;
    }
    
    if (budget >= money) {
        console.log(`Yes! You have ${(budget-money).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(money-budget).toFixed(2)} leva.`)
    }
}

fish((["3000",
"Summer",
"11"])

)