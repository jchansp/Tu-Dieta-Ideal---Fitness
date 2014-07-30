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
        myApp.popup($$('.popup.register'));
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
                $$('.weight .numero').html(myApp.weight);
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

//$$('.popup.register .name').on('change', function (e) {
//    User.name = e.target.value;
//});
//$$('.popup.register .sex').on('change', function (e) {
//    User.sex = e.target.value;
//});
//$$('.popup.register .dateOfBirth').on('change', function (e) {
//    User.dateOfBirth = e.target.value;
//});
//$$('.popup.register .weight').on('change', function (e) {
//    User.weight = e.target.value;
//});
//$$('.popup.register .height').on('change', function (e) {
//    User.height = e.target.value;
//});
//$$('.popup.register .physicalActivity').on('change', function (e) {
//    User.physicalActivity = e.target.value;
//});
$$('.popup.register').on('change', function () {
    /* Por cada cambio que se haga en el formulario, lo almacenamos en User, 
       incluída la initialDate */
    User.name = $$('.popup.register input.name').val();
    User.sex = $$('.popup.register select.sex').val();
    User.dateOfBirth = stringToDate($$('.popup.register input.dateOfBirth').val());
    User.height = stringToNumber($$('.popup.register input.height').val());
    User.physicalActivity = stringToNumber($$('.popup.register select.physicalActivity').val());
    User.weights = [{
        id: newId(),
        date: new Date(),
        weight: stringToNumber($$('.popup.register input.weight').val())
    }];
});