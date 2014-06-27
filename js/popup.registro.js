$$('.popup').on('open', function () {
    $$('body').addClass('with-popup');
});
$$('.popup').on('close', function () {
    $$('body').removeClass('with-popup');
});
myApp.$(window).on('load', function () {
    /* Aqui entra al arrancar la aplicación */
    if (!myApp.formGetData('Usuario')) {
        /* Si no tiene recogidos los datos del usuario */
        myApp.popup($$('.popup.registro'));
        myApp.slider('.slider-container', {
            pagination: '.slider-pagination'
        }).onSlideChangeEnd = function () {
            /* Aquí entra cuando se pasa de página en el slider inicial */
            if (!myApp.formGetData('Usuario')) {
                /* Si no tiene recogidos los datos del usuario */
                if (this.activeSlideIndex === 1) {
                    /* Si estamos en la segunda pesataña */
                    $$('.fechaInicio').val(JSON.stringify(myApp.fechaInicio).replace('"', '').split('T')[0]);
                } else if (this.activeSlideIndex > 1) {
                    /* Si estamos en alguna pesataña de la segunda en adelante */
                    this.slideTo(1, 300);
                    this.updateSlides();
                }
            } else {
                /* Si tiene datos de usuario */
                var pesos = myApp.pesos ? JSON.parse(window.localStorage.getItem('Pesos')) : [];
                console.log(myApp.formGetData('Usuario'));
                $$('.peso .numero').html(myApp.peso);
                $$('.IMC .numero').html(myApp.IMC);
                $$('.IMC').addClass(myApp.rangoIMC);
                $$('.pesoIdeal .numero').html(myApp.pesoIdeal);

            }
        };
    }
    /*else {
         Si tiene datos de usuario 
        $$('.peso .numero').html(myApp.peso);
        $$('.IMC .numero').html(myApp.IMC);
        $$('.IMC').addClass(myApp.rangoIMC);
        $$('.pesoIdeal .numero').html(myApp.pesoIdeal);
    }*/
});