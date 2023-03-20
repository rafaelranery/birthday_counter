
const birthdayDate = new Date("Jul 21, 2022 19:00:00");
const birthdayTimeStamp = birthdayDate.getTime();


let counterTime = setInterval( function() {
    // console.log(birthdayTimeStamp);

    const actualDate = new Date()
    const actualTimeStamp = actualDate.getTime();

    /* Diferença data evento e data atual */
    let daysMs = 1000 * 60 * 60 * 24;
    let hourMs = 1000 * 60 * 60;
    let minMs = 1000 * 60;
    

    let daysToBirthday = Math.floor((birthdayTimeStamp - actualTimeStamp) / (daysMs));
    let hoursToBirthday = Math.floor(((birthdayTimeStamp - actualTimeStamp) % (daysMs)) / hourMs);
    let minToBirthday = Math.floor((((birthdayTimeStamp - actualTimeStamp) % (daysMs)) % hourMs) / minMs);
    let secondsToBirthday = Math.floor(((((birthdayTimeStamp - actualTimeStamp) % (daysMs)) % hourMs) % minMs) / 1000)

    // console.log(daysToBirthday);
    // console.log(hoursToBirthday);
    // console.log(minToBirthday);
    // console.log(secondsToBirthday);

    let displayDate = document.querySelector('#contador');
    displayDate.innerHTML = `${daysToBirthday} dias ${hoursToBirthday} horas ${minToBirthday} min ${secondsToBirthday} s`
    

    if (actualTimeStamp < 0 ) {
        displayDate.innerHTML = 'Evento Expirado!!!'

    }
}, 1000)