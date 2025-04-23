const jours = document.querySelector('h2')
const heure = document.querySelector('h2')
const minutes = document.querySelector('h2')
const secondes = document.querySelector('h2')
const millisecondes = document.querySelector('h2')

function getChrono() {

    // const monthinput = document.getElementById('monthinput').options[document.getElementById('monthinput').selectedIndex].text
    // const daysinput = document.getElementById('daysinput').value
    const now = new Date().getTime();

    // console.log(monthinput, daysinput, ', 2025')

    const countdownDate = new Date('april 30,2025').getTime();

    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000)
    const milliseconds = Math.floor((distanceBase % (1000)))

    console.log(days, hours, minutes, seconds, milliseconds)

    jours.innerText =
        `${days} jours ${hours} heurs ${minutes} minutes ${seconds} secondes ${milliseconds} millisecondes`
}

$(document).ready(function(){
    $('.num').counterUp({
        time: 1200
    });
});

getChrono()


const counDownInterval = setInterval(() => {

    getChrono()

}, 10)
