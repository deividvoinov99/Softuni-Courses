function christmasGifts(input) {

    let index = 0;

    let command = input[index];
    index++;

    let adults = 0;
    let kids = 0;
    let toyPrice = 5;
    let pullover = 15;


    while (command != "Christmas") {

        let age = Number(command);

        if (age<=16) {
            kids++;
        }else{
            adults++;
        }

        command = input[index];
        index++;
   
    }

    let diffone = toyPrice * kids;
    let difftwo = pullover * adults;

    console.log(`Number of adults: ${adults}`)
    console.log(`Number of kids: ${kids}`)
    console.log(`Money for toys: ${diffone}`)
    console.log(`Money for sweaters: ${difftwo}`)
}

christmasGifts((["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])
)