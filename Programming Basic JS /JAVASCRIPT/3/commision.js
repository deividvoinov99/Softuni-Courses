function commision (input)
{

    town = input[0];
    sales = Number(input[1]);
    percent = 0;

    if (sales >= 0 && sales <=500) {
        if (town == "Sofia") {
            percent = 5;
        }else if (town == "Varna") {
            percent = 4.5;
        }else if (town == "Plovdiv") {
            percent = 5.5;
        }
    }else if (sales > 500 && sales <=1000) {
        if (town == "Sofia") {
            percent = 7;
        }else if (town == "Varna") {
            percent = 7.5;
        }else if (town == "Plovdiv") {
            percent = 8;
        }
    }else if (sales > 1000 && sales <=10000) {
        if (town == "Sofia") {
            percent = 8;
        }else if (town == "Varna") {
            percent = 10;
        }else if (town == "Plovdiv") {
            percent = 12;
    }
    }else if (sales > 10000) {
        if (town == "Sofia") {
            percent = 12;
        }else if (town == "Varna") {
            percent = 13;
        }else if (town == "Plovdiv") {
            percent = 14.5;
    }
}
percent = ((sales * percent) / 100).toFixed(2);

if (percent > 0) {
    console.log(percent);
} else {
    console.log("error");
}

}

commision((["Kaspichan",
"-50"])



)