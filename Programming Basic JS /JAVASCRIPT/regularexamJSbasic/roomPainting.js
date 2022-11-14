function roomPainting(input) {

    let index = 0;

    let paintNumber = Number(input[index]);
    index++;
    let tapetiNumber = Number(input[index]);
    index++;
    let glovesCost = Number(input[index]);
    index++;
    let brushCost = Number(input[index]);
    index++;

    let paintCost = 21.50 * paintNumber;
    let tapetiCost = 5.20 * tapetiNumber;
    let glovesNumber = (Math.ceil(tapetiNumber * 0.35));
    let brushNumber = (Math.floor(paintNumber * 0.48));

    let allPriceGloves = glovesNumber * glovesCost;
    let allPriceBrush = brushNumber * brushCost;

    let allSum = paintCost + tapetiCost + allPriceBrush + allPriceGloves;

    let deliveryCost = allSum / 15;

    console.log(`This delivery will cost ${deliveryCost.toFixed(2)} lv.`)
    
}

roomPainting(["21","18","5","2.2"])