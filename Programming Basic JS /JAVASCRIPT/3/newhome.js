function newhome(input){

    let flower = input[0];
    let numflower = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let discount = 0;
    let allsum = 0;

    if (flower == "Roses") {
        price = 5 * numflower;
        if (numflower > 80) {
            discount = price * 0.10;
        }
    }else if (flower == "Dahlias") {
        price = 3.80 * numflower;
        if (numflower > 90) {
            discount = price * 0.15;
        }
    }else if (flower == "Tulips") {
        price = 2.80 * numflower;
        if (numflower > 80) {
            discount = price * 0.15;
        }
    }else if (flower == "Narcissus") {
        price = 3 * numflower;
        if (numflower < 120) {
            price += price * 0.15;
        }
    }else if (flower == "Gladiolus") {
        price = 2.50 * numflower;
        if (numflower < 80) {
            price += price * 0.20;
        }
    }

    allsum = price - discount;

    if (budget >= allsum) {
        console.log(`Hey, you have a great garden with ${numflower} ${flower} and ${(budget - allsum).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${(allsum - budget).toFixed(2)} leva more.`)
    }

}

newhome((["Narcissus",
"119",
"360"])
)