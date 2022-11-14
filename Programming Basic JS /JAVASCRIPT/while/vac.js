function vacation(input) {

    let index = 0;
    
    let moneyForVacation = Number(input[index]);
    index++;
    let moneyAvaible = Number(input[index]);
    index++;

    let moneySpend = 0;
    let dayCounter = 0;

    while (moneyAvaible < moneyForVacation) {

        let action = (input[index]);
        index++;
        let amount =Number(input[index]);
        index++;

        dayCounter++;

        switch (action) {
            case "spend":
                moneyAvaible -= amount;
                moneySpend++;
                if (moneyAvaible < 0) {
                    moneyAvaible = 0;
                }
                
                break;
            case "save":
                moneyAvaible += amount;
                moneySpend = 0;
                break;
        }

        if (moneySpend === 5) {
            break;
        }
        
    }

    if (moneySpend === 5) {
        console.log(`You can't save the money.`);
        console.log(dayCounter);
    }else{
        console.log(`You saved the money for ${dayCounter} days.`)
    }


}

vacation((["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

)