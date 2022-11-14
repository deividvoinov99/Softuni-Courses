function cinema(input){

    let income = 0;
    let type = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    if (type == "Premiere") {
        income = row * column * 12;
    }else if (type == "Normal") {
        income = row * column * 7.50;
    }else if (type == "Discount") {
        income = row * column * 5;
    }

    console.log(`${income.toFixed(2)} leva` );
}