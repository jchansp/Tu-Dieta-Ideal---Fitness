myApp.$(window).on('load', function () {
    /* Aqui entra al arrancar la aplicación */
    $$('.weight .numero').html(!isNullOrUndefined(myApp.weight) ? myApp.weight : 'N/D');
    $$('.bodyMassIndex .numero').html(!isNullOrUndefined(myApp.bodyMassIndex) ? myApp.bodyMassIndex : 'N/D');
    $$('.bodyMassIndex').addClass(!isNullOrUndefined(myApp.bodyMassIndexRange) ? myApp.bodyMassIndexRange : 'N/D');
    $$('.idealWeight .numero').html(!isNullOrUndefined(myApp.idealWeight) ? myApp.idealWeight : 'N/D');
});