(function () {
    'use strict'

    document.getElementById('convert').addEventListener('submit', function (event) {

        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer')
        if (distance) {
            const conversion = (distance * 1.609344).toFixed(2);
            answer.innerHTML = `<h2 class ="invisible">${distance} miles --> ${conversion} km</h2>`;
        } else {
            answer.innerHTML = `<h2 class = "invisible">Put the number!!! </h2>`
        }


    })




})();