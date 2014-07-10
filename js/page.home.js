myApp.$(window).on('load', function () {
    /* Aqui entra al arrancar la aplicación */
    if (myApp.weight) $$('.weight .numero').html(myApp.weight);
    $$('.bodyMassIndex .numero').html(myApp.bodyMassIndex);
    $$('.bodyMassIndex').addClass(myApp.bodyMassIndexRange);
    $$('.idealWeight .numero').html(myApp.idealWeight);
});