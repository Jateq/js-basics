(function () {
    'use strict'


    const detailsForm = document.querySelector("#destination_details_form");
    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const destName = event.target.elements['name'].value;
        const destLocation = event.target.elements['location'].value;
        const destPhoto = event.target.elements['photo'].value;
        const destDescription = event.target.elements['description'].value;

        for (let i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        // ideally you want a function to do one thing

        const destCard = creteDestinationCard(destName, destLocation, destPhoto, destDescription);

        const wishListContainer = document.getElementById('destinations_container');
        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = "My wish list";
        }

        document.querySelector("#destinations_container").appendChild(destCard);
    }

    function creteDestinationCard(name, location, photoURL, description) {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement('img');
        img.setAttribute('alt', name);

        const ConstPhotoUrl = "images/vacation.png";
        if (photoURL.length === 0) {
            // img.src = ConstPhotoUrl;
            img.setAttribute('src', ConstPhotoUrl);
        } else {
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("p");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle)

        const cardLocation = document.createElement("p");
        cardLocation.innerText = location;
        cardBody.appendChild(cardLocation);

        if (description.length !== 0) {
            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        const cardDelete = document.createElement("button");
        cardDelete.innerText = "Remove";
        cardDelete.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDelete);
        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();

    }

    function deleteDestinationDetails() {
        const title = document.getElementById('title');
        const destinationsContainer = document.getElementById('destinations_container');

        // Check if the elements exist before removing them
        if (title) {
            title.remove();
        }

        if (destinationsContainer) {
            destinationsContainer.remove();
        }
    }
})();