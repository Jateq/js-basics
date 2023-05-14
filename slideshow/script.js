(function () {
    "use strict";
    const myImages = ["musashi1.png", "musashi2.png",
        "musashi3.png", "musashi4.png",
        "musashi5.png"];

    let curImage = 0;

    const container = document.getElementById('content')
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function(event){
        event.preventDefault();

        curImage++;
        if (curImage > myImages.length-1){ curImage = 0; }

        swap()
    })

    prevBtn.addEventListener('click', function(event){
        event.preventDefault();

        curImage--;
        if (curImage < 0){ curImage = myImages.length-1; }

        swap()
    })

    function swap(){
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myImages[curImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);

        if (container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }
})();
