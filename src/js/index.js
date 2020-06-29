
(function () {
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {

            form.addEventListener('submit', function(event) {
                if ((form.checkValidity() === false)){
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                }
                form.classList.add('was-validated');
            }, false);

        });

    }, false);

    const show_menu = document.getElementById('show-menu');
    const header_nav = document.querySelector('.navigation');
    show_menu.addEventListener('click', () => {
        header_nav.classList.toggle('active');
        const links = header_nav.querySelectorAll('li');
        links.forEach(link => link.addEventListener('click', e => header_nav.classList.remove('active')))
    });

    const social = document.querySelector('.social');
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.header-bottom ');
        nav.append(social);
    }
})();