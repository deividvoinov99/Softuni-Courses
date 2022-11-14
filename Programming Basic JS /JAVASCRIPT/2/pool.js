function pool(input){

    let recordinSeconds = Number(input[0]);
    let distanceinMeters = Number(input[1]);
    let timeinSeconds1meter = Number(input[2]);

    let vreme = distanceinMeters * timeinSeconds1meter;
    let zabavq = Math.floor(distanceinMeters / 15) * 12.5;

    let obshtoVreme = vreme + zabavq;

    if (obshtoVreme < recordinSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(obshtoVreme).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${Math.abs(recordinSeconds - obshtoVreme).toFixed(2)} seconds slower.`)
    }
}

pool((["10464",
"1500",
"20"])


)