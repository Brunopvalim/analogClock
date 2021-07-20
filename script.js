let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

const updateClock = ()=>{
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sAngle = ((360 / 60 ) * second) - 90;
    let mAngle = ((360 / 60 ) * minute) - 90;
    let hAngle = ((360 / 12 ) * hour) - 90;

    sElement.style.transform = `rotate(${sAngle}deg)`
    mElement.style.transform = `rotate(${mAngle}deg)`
    hElement.style.transform = `rotate(${hAngle}deg)`
}

const fixZero = (time) =>{
        return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();

