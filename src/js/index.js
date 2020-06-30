
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

        let active = false;
        const whyInfoBlock = document.querySelector('.why-info-bg-green');
        //console.log(whyInfoBlock);
        if (whyInfoBlock) {
            const numsCounter = function() {
                if (!active) {

                  //  setTimeout(() => {
                        if (whyInfoBlock.getBoundingClientRect().top <= (window.innerHeight-100) && whyInfoBlock.getBoundingClientRect().bottom > 0) {
                            active = true;
                            const numbers = whyInfoBlock.querySelectorAll('.number');
                            let cases = numbers[0];
                            let percent = numbers[1];
                            let years = numbers[2];
                            cases.innerHTML = '';
                            percent.innerHTML = '';
                            years.innerHTML = '';

                            let casesNums = 0;
                            let casesInterval = setInterval(() => {
                                casesNums++;
                                cases.innerHTML = casesNums;
                                if (casesNums >= 126) clearInterval(casesInterval);
                            }, 0);

                            let percentNums = 0;
                            let percentInterval = setInterval(() => {
                                percentNums++;
                                percent.innerHTML = percentNums;
                                if (percentNums >= 92) clearInterval(percentInterval);
                            }, 5);

                            let yearsNums = 0;
                            let yearsInterval = setInterval(() => {
                                yearsNums++;
                                years.innerHTML = yearsNums;
                                if (yearsNums >= 7) clearInterval(yearsInterval);
                            }, 10);

                        }
                   // }, 200)
                }
            };

            document.addEventListener('scroll', numsCounter);

            $(".phone-num").mask("+d(ddd)ddd-dd-dd", {
                autoclear: false
            });
        }

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

    const banner = document.querySelector('.content-wrapper.head-banner');
    if (banner) {
        const bgs = ['img-e', 'img-s', 'img-f'];
        let current = bgs[0];
        let counter = 0;
        let interval = setInterval(() => {
            banner.classList.remove(current);
            banner.classList.remove('visible');
            counter++;
            if (counter > 2) counter = 0;
            current = bgs[counter];
            banner.classList.add(current);
            const timer = setTimeout(() => {
                banner.classList.add('visible');
                clearInterval(timer);
            }, 300)
        }, 5000);
    }

    const head_banner_title = document.querySelector('.head-banner h1');
    const head_banner_subtitle = document.querySelector('.head-banner .subtitle');
    const head_banner_btn = document.querySelector('.head-banner .btn');

    setTimeout(function(){
        if(head_banner_title){
            head_banner_title.classList.add("active");
            head_banner_title.classList.add("fade-on-scroll-right");
        }
        setTimeout(function(){
            if(head_banner_subtitle){
                head_banner_subtitle.classList.add("active");
                head_banner_subtitle.classList.add("fade-on-scroll-top");
            }
            setTimeout(function(){
                if(head_banner_btn){
                    head_banner_btn.classList.add("active");
                    head_banner_btn.classList.add("fade-on-scroll-bottom");
                }
            }, 500);
        }, 500);
    }, 300);

    const list_items = document.getElementsByClassName('list-item');
    for (var i=0 ; i < list_items.length; i++){
      console.log("list_items[i]= "+list_items[i]);
      setTimeout(function(){
         if (list_items[i]){
          list_items[i].classList.add("active");
          list_items[i].classList.add("fade-on-scroll-right");
        }
      }, 500);
    }


})();
