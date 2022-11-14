function godzilla (input){

    let movieBudget = Number(input[0]);
    let movieStatisti = Number(input[1]);
    let cenaObleklo = Number(input[2]);

    let sumaDekor = 0.10 * movieBudget;
    let sumaObleklo = movieStatisti * cenaObleklo;

    if (movieStatisti > 150) {
        sumaObleklo = sumaObleklo * 0.90
    }

    let obshtaSuma = sumaDekor + sumaObleklo;
    let stigaLi = Math.abs(movieBudget - obshtaSuma);

    if (obshtaSuma <= movieBudget) {
        console.log(`Action!
Wingard starts filming with ${(stigaLi).toFixed(2)} leva left.
        `)
    } else {
        console.log(`Not enough money! 
Wingard needs ${(stigaLi).toFixed(2)} leva more.
        `)
    }
}