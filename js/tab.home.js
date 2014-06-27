myApp.$(window).on('load', function () {
    /* Aqui entra al arrancar la aplicación */
    $$('.peso .numero').html(!isNullOrUndefined(myApp.peso) ? myApp.peso : 'N/D');
    $$('.IMC .numero').html(!isNullOrUndefined(myApp.IMC) ? myApp.IMC : 'N/D');
    $$('.IMC').addClass(!isNullOrUndefined(myApp.rangoIMC) ? myApp.rangoIMC : 'N/D');
    $$('.pesoIdeal .numero').html(!isNullOrUndefined(myApp.pesoIdeal) ? myApp.pesoIdeal : 'N/D');
});