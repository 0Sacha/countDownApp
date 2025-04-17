const text = document.querySelector('h2')

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

    text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`

}

getChrono()


const counDownInterval = setInterval(() => {

    getChrono()

}, 1000)