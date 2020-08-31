
(function () {
    var slideIndex = 1;
    const lettersSliders = document.getElementById('lettersCarousel');
    const windowInner = window.visualViewport ? window.visualViewport.width : window.innerWidth;
    if (lettersSliders) {
        lettersSliders.addEventListener('click', e => {
            if (!e.target.classList.contains('hover-block')) return;
            const imageWrapper = e.target.closest('.slider-item');
            const img = imageWrapper.querySelector('img.slide');
            const modal = createModal(img);
            openModal(modal);
        });
    }

    function createModal(current) {
        const modalTemplate = document.getElementById('lightboxModal').innerHTML;
        const modalWrapper = document.createElement('div');
        modalWrapper.className = 'modal';
        modalWrapper.innerHTML = modalTemplate;

        const closeBtn = modalWrapper.querySelector('.close');
        closeBtn.addEventListener('click', e => closeModal(modalWrapper));
        modalWrapper.addEventListener('click', e => {
            if (!e.target.classList.contains('modal')) return;
            closeBtn.click();
        });

        const prevBtn = modalWrapper.querySelector('.prev');
        prevBtn.addEventListener('click', e => plusSlides(modalWrapper, -1));
        const nextBtn = modalWrapper.querySelector('.next');
        nextBtn.addEventListener('click', e => plusSlides(modalWrapper, 1));
        createModalItems(modalWrapper, current);
        return modalWrapper;
    }

    function createModalItems(modalWrapper, current) {
        const sliderItems = lettersSliders.querySelectorAll('img.slide');

        const modalContent = modalWrapper.querySelector('.modal-content');

        const sliderCount = sliderItems.length;
        sliderItems.forEach( (item, index) => {
            const mySlidesDiv = createDiv('mySlides');
            const numbertext = createDiv('numbertext');
            numbertext.innerText = `${index + 1} / ${sliderCount}`;
            const img = document.createElement('img');

            img.src = item.src;
            img.alt = item.alt;
            mySlidesDiv.append(numbertext);
            mySlidesDiv.append(img);

            modalContent.append(mySlidesDiv);
            if (current === item) {
                slideIndex = index;
            }
        });
    };

    function createDiv(className) {
        const div = document.createElement('div');
        div.className = className;
        return div;
    }

    function openModal(modal) {
        document.body.append(modal);
        modal.style.display = "block";
        showSlides(modal, 1);
    }

    function closeModal(modal) {
        document.body.removeChild(modal);
    }

    function plusSlides(modal, n) {
        showSlides(modal, slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(modal, slideIndex = n);
    }

    function showSlides(modal, n) {
        var i;
        var slides = modal.querySelectorAll(".mySlides");
        var dots = modal.querySelectorAll(".demo");
        var captionText = modal.querySelector("#caption");
        if (n > slides.length - 1) {slideIndex = 0}
        if (n < 0) {slideIndex = slides.length - 1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
        captionText.innerHTML = slides[slideIndex].querySelector('img').alt;
    }
})();