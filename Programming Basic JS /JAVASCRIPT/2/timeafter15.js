function timeafter15minutes (input)
{
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let time = hours * 60 + minutes;
    time = time + 15;

    let h = Math.floor(time / 60); 
    let m = time % 60;

    if (h === 24) {
        h = 0;
    } 

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);      
    }
}