let miliSec = 0;
let myInterVal;
function start() {
    myInterVal = setInterval(startCount, 20);
}
function startCount() {
    miliSec += 20;
    document.getElementById('miliSec').innerHTML = miliSec % 1000;
    document.getElementById('second').innerHTML = ((miliSec - (miliSec % 1000)) / 1000) % 60;
    document.getElementById('minute').innerHTML = (miliSec - (((miliSec - (miliSec % 1000)) / 1000) % 60) * 1000 - (miliSec % 1000)) / 60000;
}
function stop() {
    clearInterval(myInterVal);
}
function reset() {
    miliSec = 0;
    document.getElementById('miliSec').innerHTML = miliSec % 1000;
    document.getElementById('second').innerHTML = ((miliSec - (miliSec % 1000)) / 1000) % 60;
    document.getElementById('minute').innerHTML = (miliSec - (((miliSec - (miliSec % 1000)) / 1000) % 60) * 1000 - (miliSec % 1000)) / 60000;
}