function sumSeconds (input)
{
    let first = Number (input[0]);
    let second = Number (input[1]);
    let third = Number (input[2]);

    let totatTime = first + second + third;

    let minutes = Math.floor(totatTime / 60);
    let seconds = totatTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}