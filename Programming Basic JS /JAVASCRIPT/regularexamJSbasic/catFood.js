function catFood(input) {
    
    let index = 0;

    let numberCats = Number(input[index]);
    index++;

    let groupone = 0;
    let grouptwo = 0;
    let groupthree = 0;

    let w = 0;
    let priceForKg = 12.45;

    for (let i = 0; i < numberCats; i++) {

        let gFood = Number(input[index]);
        index++;
        w += gFood;

        if (gFood >= 100 && gFood < 200) {
            groupone++;
        }else if (gFood >= 200 && gFood < 300) {
            grouptwo++;
        }else{
            groupthree++;
        }
        
    }

    let diff = w/1000 * priceForKg

    console.log(`Groupe 1: ${groupone} cats.`);
    console.log(`Groupe 2: ${grouptwo} cats.`);
    console.log(`Groupe 3: ${groupthree} cats.`);
    console.log(`Price for food per day: ${diff.toFixed(2)} lv.`)
}

catFood((["6",
"102",
"236",
"123",
"399",
"342", 
"222"])
)