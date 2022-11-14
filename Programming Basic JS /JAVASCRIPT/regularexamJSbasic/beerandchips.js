function beerandchips(input){

    let index = 0;

    let name = input[index];
    index++;
    let budget = Number(input[index]);
    index++;
    let numberBeer = Number(input[index]);
    index++;
    let numberChips = Number(input[index]);
    index++;

    let priceBeer = numberBeer * 1.20;
    let priceChips = 0.45 * priceBeer;
    
    let AllPriceChips = Math.ceil(numberChips * priceChips);

    let allSum = AllPriceChips + priceBeer;
    let diff = Math.abs(budget - allSum)

    if (budget >= allSum) {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`)
    }else{
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`)
    }

}

beerandchips((["George",
"10",
"2",
"3"])
)