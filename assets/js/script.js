const jours = document.querySelector('h2')

function getChrono() {

    const now = new Date().getTime();

    const countdownDate = new Date('january 17,2030').getTime();

    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000)
    const milliseconds = Math.floor((distanceBase % (1000)))

    console.log(days, hours, minutes, seconds, milliseconds)

    jours.innerText =
        `${days} j ${hours} h ${minutes} m ${seconds} s ${milliseconds} ms`
}


getChrono()


const counDownInterval = setInterval(() => {

    getChrono()

}, 10)
