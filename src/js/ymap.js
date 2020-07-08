// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
const map = document.getElementById('map');
if (map) {
    ymaps.ready(init);

    function init() {
        // Создание карты.
        const myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76812, 37.67065],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: ['zoomControl']
            //controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
        });

        // Создаём макет содержимого.
        const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="myPlacemark">$[properties.iconContent]</div>'
        );
        //myMap.controls.add('smallZoomControl', { top: 25, left: 5 });
        const myPlacemark = new ymaps.Placemark([55.76812, 37.67065], {
            balloonContent: '<span class="hintContent">ул. Доброслободская д.6</span>',
            hintContent: '<span class="hintContent">ул. Доброслободская д.6</span>',
            iconContent: 'ул. Доброслободская д.6'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'public/images/icons/pin.png',
            // Размеры метки.
            iconImageSize: [48, 64],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, -40],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [50, 10],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myMap.geoObjects.add(myPlacemark);
        //myPlacemark.balloon.open();
    }
}