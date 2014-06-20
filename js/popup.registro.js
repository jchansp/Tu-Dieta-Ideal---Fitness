$$('.popup').on('open', function () {
    $$('body').addClass('with-popup');
});
$$('.popup').on('close', function () {
    $$('body').removeClass('with-popup');
});