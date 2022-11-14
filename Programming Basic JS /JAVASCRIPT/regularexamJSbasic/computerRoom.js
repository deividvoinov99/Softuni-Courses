function computerRoom(input) {

    let index = 0;

    let month = String(input[index]);
    index++;
    let hours = Number(input[index]);
    index++;
    let group = Number(input[index]);
    index++;
    let dayNnight = String(input[index]);
    index++;

    let priceForHour = 0;
    let discount = 0;

    if (month == "march" || month == "april" || month == "may") {
        if (dayNnight == "day") {
            priceForHour = 10.50
        }else{
            priceForHour = 8.40;
        }
    }else if (month == "june" || month == "july" || month == "august") {
        if (dayNnight == "day") {
            priceForHour = 12.60;
        }else{
            priceForHour = 10.20;
        }
    }


    if (group >= 5) {
        discount = priceForHour * 0.10;
        priceForHour -= discount;
    }
    let diff = priceForHour - discount;

    if (hours >= 5) {
        discount = priceForHour * 0.50;
        priceForHour -= discount;
    }

    allSum = group * priceForHour * hours;

    console.log(`Price per person for one hour: ${priceForHour.toFixed(2)}`)
    console.log(`Total cost of the visit: ${allSum.toFixed(2)}`)

}

computerRoom((["july",
"5",
"5",
"night"])
)