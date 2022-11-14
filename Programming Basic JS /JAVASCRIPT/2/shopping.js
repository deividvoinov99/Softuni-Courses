function shopping (input){

    let budget = Number(input[0]);
    let video = Number(input[1]);
    let proccesor = Number(input[2]);
    let ram = Number(input[3]);

    let videoCena = 250;
    let videoCardSuma = video * videoCena;
    let proccesorCena = proccesor * (videoCardSuma * 0.35);
    let ramCena = ram * (videoCardSuma * 0.10);

    let allsum = videoCardSuma + proccesorCena + ramCena;

    if (video >= proccesor) {
        allsum = allsum * 0.85;
    }

    let razlika =Math.abs(budget - allsum);

    if (budget >= allsum) {
        console.log(`You have ${(razlika).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(razlika).toFixed(2)} leva more!`)
    }

}

shopping((["900",
"2",
"1",
"3"])


)