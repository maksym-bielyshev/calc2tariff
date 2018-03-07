function calculating() {
    let previousDay = document.getElementById("validationDefault01").value;
    let currentDay = document.getElementById("validationDefault02").value;
    let previousNight = document.getElementById("validationDefault03").value;
    let currentNight = document.getElementById("validationDefault04").value;
    let differenceDay = currentDay - previousDay;
    let differenceNight = currentNight - previousNight;
    const tariffFirst = 0.9;
    const tariffSecond = 1.68;
    let billDayFirst = differenceDay*tariffFirst;
    let billDaySecond = (differenceDay-100)*tariffSecond+90;
    let billNightFirst = differenceNight*tariffFirst*0.5;
    let billNightSecond = (differenceNight-100)*0.5*tariffSecond+45;

    if (differenceDay <= 100 && differenceNight <= 100) {
        alert((billDayFirst + billNightFirst).toFixed(2) + ' ₴');

    } else if (differenceDay > 100 && differenceNight <= 100) {
        alert((billDaySecond + billNightFirst).toFixed(2) + '  ₴');

    } else if (differenceDay > 100 && differenceNight > 100) {
        alert((billDaySecond + billNightSecond).toFixed(2) + ' ₴');

    } else if (differenceDay <= 100 && differenceNight > 100) {
        alert((billDayFirst + billNightSecond).toFixed(2) + ' ₴');
    }
}

var input = document.getElementById("validationDefault04");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("button").click();
  }
});