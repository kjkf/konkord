$(function() {
    const command = document.querySelector("#commandCarousel");
    const letters = document.querySelector("#lettersCarousel");

    const mql1200 = window.matchMedia("(max-width: 1200px)");
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mql800 = window.matchMedia("(max-width: 800px)");
    const mql992 = window.matchMedia("(max-width: 992px)");
    const mql576 = window.matchMedia("(max-width: 576px)");

    function handlerForMediaQueries(x) {
        if (mql800.matches) { // If media query matches
            console.log('mql800.matches');
            makeSlider(command, 'commandCarousel');
            makeSlider(letters, 'lettersCarousel');
        } else {
            console.log('mql800.matches else');
            removeSlider(command, 'commandCarousel', 3);
            removeSlider(letters, 'lettersCarousel', 3);
        }
    }

    function makeSlider(elem, id) {
        console.log('makeSlider', id);
        const list = elem.querySelectorAll('.slider-item');
        let carouselItems = elem.querySelectorAll('.carousel-item');

        removeItems(carouselItems);

        createCarouselRow(list, elem, id);
    }

    function removeSlider(elem, id, cols) {
        console.log('removeSlider');
        const list = elem.querySelectorAll('.slider-item');
        let carouselItems = elem.querySelectorAll('.carousel-item');
        console.log(list);
        console.log(carouselItems);

        removeItems(carouselItems);

        let rowList = divideArrayForRow(list, cols);
        createCarouselRow(rowList, elem, id);
    }

    /*function makeCommandSlider() {
        console.log('makeCommandSlider');
        const commandList = command.querySelectorAll('.slider-item');
        let carouselItems = command.querySelectorAll('.carousel-item');

        removeItems(carouselItems);

        createCarouselRow(commandList, command, 'commandCarousel');
    }

    function removeCommandSlider(cols) {
        console.log('removeCommandSlider');
        const commandList = command.querySelectorAll('.slider-item');
        let carouselItems = command.querySelectorAll('.carousel-item');
        console.log(commandList);
        console.log(carouselItems);

        removeItems(carouselItems);

        let rowList = divideArrayForRow(commandList, cols);
        createCarouselRow(rowList, command, 'commandCarousel');
    }

    function makeLetterSlider() {
        console.log('makeCommandSlider');
        const commandList = letters.querySelectorAll('.slider-item');
        let carouselItems = letters.querySelectorAll('.carousel-item');

        removeItems(carouselItems);

        createCarouselRow(commandList, command, 'commandCarousel');
    }

    function removeLetterSlider(cols) {
        console.log('removeCommandSlider');
        const commandList = command.querySelectorAll('.slider-item');
        let carouselItems = command.querySelectorAll('.carousel-item');
        console.log(commandList);
        console.log(carouselItems);

        removeItems(carouselItems);

        let rowList = divideArrayForRow(commandList, cols);
        createCarouselRow(rowList, command, 'commandCarousel');
    }*/

    function createCarouselRow(list, mainWrapper, mainId) {
        const inner = mainWrapper.querySelector('.carousel-inner');

        list.forEach(function (item, index) {
            item.classList.remove('d-none');
            let div = createCarouselItem(item);

            if (index === 0) {
                div.classList.add('active');
            }
            inner.appendChild(div);
        });
    }

    function createCarouselItem(innerHtml) {
        let div = document.createElement('div');
        div.classList.add('carousel-item');
        div.appendChild(innerHtml);
        return div
    }

    function removeItems(list) {
        list.forEach(function (item) {
            item.remove();
        });
    }

    function divideArrayForRow(list, slidesInRow) {
        console.log(list, slidesInRow);
        let rowsList = [];
        let className = !slidesInRow ? '' : slidesInRow === 2 ? 'col-md-6' : slidesInRow === 3 ? 'col-md-4' : slidesInRow === 4 ? 'col-md-3' : '';
        let oldClassName = getClassNameByMask(list[0].classList.value, 'col-md-\\d+'); //list[0].classList.value.match(/col-md-\d+/);

        for (let i=0; i<list.length; i=i+slidesInRow) {
            let row = document.createElement('div');
            row.className = 'row';
            if (slidesInRow === 5) row.classList.add('row-cols-5');
            for (let j=i; j<(i+slidesInRow); j++) {
                if (j>=list.length) break;
                if (oldClassName) list[j].classList.remove(oldClassName);
                if (className) list[j].classList.add(className);
                row.appendChild(list[j]);
            }
            console.log('row = ', row);
            rowsList.push(row);
        }
        console.log(rowsList);
        return rowsList;
    }

    function getClassNameByMask(str, mask) {
        if (!str) return '';
        const regexp = new RegExp(mask);
        let result = str.match(regexp);
        return result ? result[0] : '';
    }

    //===========================================

    //console.log(window.innerWidth, window.visualViewport.width);
    //alert(window.innerWidth);
    //console.log(window.visualViewport.width);
    const windowInner = window.visualViewport ? window.visualViewport.width : window.innerWidth;
    //console.log(windowInner, window.innerWidth);
    if (windowInner <= 768 &&  windowInner > 576) {
        handlerForMediaQueries();
    }
//alert('before');
    try {
        mql800.addEventListener("change", () => {
            handlerForMediaQueries();
        });
    } catch (e1) {
        try {
            // Safari
            /*darkMediaQuery.addListener((e) => {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            });*/
            mql800.addListener((e) => {
                handlerForMediaQueries();
                //alert('inside');
            });
        } catch (e2) {
            console.error(e2);
        }
    }
    //alert('after');
});
