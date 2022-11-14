function toyshop (input){

    let vac = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let allsum = puzzle * 2.60 + doll * 3 + bear * 4.10 + minion * 8.20 + truck * 2;
    let numtoys = puzzle + doll + bear + minion + truck;

    if (numtoys >= 50) {
        allsum = allsum * 0.75;
    }

    allsum = allsum * 0.90;

    let razlika = Math.abs(allsum - vac);
    
    if (allsum > vac) {
        console.log(`Yes! ${razlika.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${razlika.toFixed(2)} lv needed.`)
    }

}