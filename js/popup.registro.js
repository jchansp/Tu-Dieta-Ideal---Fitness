/*$$('.popup').on('open', function () {
    $$('body').addClass('with-popup');
});
$$('.popup').on('close', function () {
    $$('body').removeClass('with-popup');
});*/

myApp.$(window).on('load', function () {
    /* Aqui entra al arrancar la aplicación */
    if (!myApp.User) {
        /* Si no tiene recogidos los datos del usuario */
        myApp.popup($$('.popup.registro'));
        myApp.slider('.slider-container', {
            pagination: '.slider-pagination'
        }).onSlideChangeEnd = function () {
            /* Aquí entra cuando se pasa de página en el slider inicial */
            if (!myApp.User) {
                /* Si no tiene recogidos los datos del usuario */
                if (this.activeSlideIndex > 1) {
                    /* Si estamos en alguna pesataña de la segunda en adelante */
                    this.slideTo(1, 300);
                    this.updateSlides();
                }
            } else {
                /* Si tiene datos de usuario */
                /*
                var weights = myApp.weights ? JSON.parse(window.localStorage.getItem('Pesos')) : [];
                console.log(myApp.formGetData('User'));*/
                $$('.weight .numero').html(myApp.User.weight);
                $$('.bodyMassIndex .numero').html(myApp.bodyMassIndex);
                $$('.bodyMassIndex').addClass(myApp.bodyMassIndexRange);
                $$('.idealWeight .numero').html(myApp.idealWeight);

            }
        };
    }
    /*else {
         Si tiene datos de usuario 
        $$('.weight .numero').html(myApp.weight);
        $$('.bodyMassIndex .numero').html(myApp.bodyMassIndex);
        $$('.bodyMassIndex').addClass(myApp.bodyMassIndexRange);
        $$('.idealWeight .numero').html(myApp.idealWeight);
    }*/
});

$$('#User').on('change', function () {
    /* Por cada cambio que se haga en el formulario, lo almacenamos en User, 
       incluída la initialDate */
    var User = myApp.User;
    User.initialDate = dateToJSON(new Date());
    User.weights = [{
        id: (User.weights) ? User.weights[User.weights.length - 1].id : 1,
        date: User.initialDate,
        weight: User.initialWeight
    }]
    myApp.User = User;
});