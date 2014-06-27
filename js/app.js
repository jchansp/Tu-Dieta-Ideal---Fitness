var myApp = new Framework7({
    modalButtonCancel: 'Cancelar',
    modalTitle: 'Tu Dieta Ideal + Fitness',
    modalPreloaderTitle: 'Cargando... ',
    videoURL: 'http://gdata.youtube.com/feeds/api/users/entrenosjuanjo/uploads?alt=jsonc&v=2',
    //videoURL: 'http://localhost/json/videos.js',
    RSSURL: 'http://pipes.yahoo.com/pipes/pipe.run?_id=Bu8sIkUH3BGA6wD_CB2yXQ&_render=json&_callback=KENTBREW_a40c.badger.pingFeed&s=http://www.entrenosjuanjo.com/feed/',
    //RSSURL = '',
    onBeforePageInit: function (page) {
        // Do something when page just added to DOM
        console.log(page);
    },
    onPageInit: function (page) {
        // Do something on page init
        console.log(page);
    },
    onPageAfterAnimation: function (page) {
        // Do something on page before animation start
        console.log(page);
    },
    onPageBeforeAnimation: function (page) {
        // Do something on page ready(centered)
        console.log(page);
    },
    onAppInit: function () {
        /*window.localStorage.clear();
        Usuario.actividad = 1;
        Usuario.altura = 1.86;
        Usuario.fechaInicio = new Date(2014, 3 - 1, 21);
        Usuario.fechaNacimiento = new Date(1981, 10 - 1, 7);
        Usuario.nombre = 'Jesús';
        Usuario.pesos = [85, null, 83, null, 81, 80, 79, 80, 81, null];
        Usuario.sexo = 'Masculino';
        Usuario.pesosObjetivo = [80, 78];*/
    },
    onAjaxComplete: function (xhr) {
        //console.log(xhr);
    },
    onSlideChangeStart: function (slider) {
        console.log(slider);
    }
});
//// Expose Internal DOM library
//var $$ = myApp.$;

// Add main view
var mainView = myApp.addView('.view-main', {
    // Enable Dynamic Navbar for this view
    dynamicNavbar: true
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
    // Enable Dynamic Navbar for this view
    dynamicNavbar: true
});

//// Required for demo popover
//$$('.popover a').tap(function () {
//    myApp.closeModal('.popover');
//});
//var myApp = new Framework7();
var $$ = Framework7.$;
var view1 = myApp.addView('#view-1', {
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-2', {
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3', {
    dynamicNavbar: true
});
var view4 = myApp.addView('#view-4', {
    dynamicNavbar: true
});
//// Change statusbar bg when panel opened/closed
//$$('.panel-left').on('open', function () {
//    $$('.statusbar-overlay').addClass('with-panel-left');
//});
//$$('.panel-right').on('open', function () {
//    $$('.statusbar-overlay').addClass('with-panel-right');
//});
//$$('.panel-left, .panel-right').on('close', function () {
//    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
//});

$$(document).on('pageInit', function (e) {
    var page = e.detail.page;

    /*if (page.name === 'home') {
        myApp.alert('home');
    }*/

    if (page.name === 'configuracion') {
        if (Usuario.nombre)
            $$('input.nombre').val(Usuario.nombre);
        if (Usuario.sexo)
            $$('select.sexo').val(Usuario.sexo);
        if (Usuario.fechaNacimiento)
            $$('input.fechaNacimiento').val(Usuario.fechaNacimiento);
        if (Usuario.peso)
            $$('input.peso').val(Usuario.peso);
        if (Usuario.altura)
            $$('input.altura').val(Usuario.altura);
        if (Usuario.actividad)
            $$('input.actividad').val(Usuario.actividad);

        $$('input.peso').parent().parent().parent().find('.subtitle').html('(' + $$('input.peso').val() + ')');
        $$('input.altura').parent().parent().parent().find('.subtitle').html('(' + $$('input.altura').val() + ')');

        $$('input.peso').on('change', function (e) {
            $$('input.peso').parent().parent().parent().find('.subtitle').html('(' + $$('input.peso').val() + ')');
        });
        $$('input.altura').on('change', function (e) {
            $$('input.altura').parent().parent().parent().find('.subtitle').html('(' + parseFloat($$('input.altura').val()).toFixed(2) + ')');
        });

        $$('form.configuracion').on('submit', function (e) {
            e.preventDefault();
            Usuario.nombre = $$('input.nombre').val();
            Usuario.sexo = $$('select.sexo').val();
            Usuario.fechaNacimiento = $$('input.fechaNacimiento').val();
            Usuario.peso = $$('input.peso').val();
            Usuario.altura = parseFloat($$('input.altura').val()).toFixed(2);
            Usuario.actividad = $$('select.actividad').val();
            myApp.alert('Datos guardados');
        });

        $$('.button-submit').tap(function () {
            $$('form.configuracion').trigger('submit');
        });
    };

    if (page.name === 'imc') {
        if (Usuario.IMC) {
            //var Usuario.IMC = (Usuario.peso / Math.pow(Usuario.altura, 2)).toFixed(2);
            if (Usuario.IMC < 18.5) $$('h2.imc').parent().addClass('delgado');
            if (Usuario.IMC >= 18.5 && Usuario.IMC <= 25) $$('h2.imc').parent().addClass('saludable');
            if (Usuario.IMC > 25 && Usuario.IMC <= 30) $$('h2.imc').parent().addClass('sobrepeso');
            if (Usuario.IMC > 30 && Usuario.IMC <= 40) $$('h2.imc').parent().addClass('obeso');
            if (Usuario.IMC > 40) $$('h2.imc').parent().addClass('morbido');
            $$('[data-page=imc] h2.imc').html(Usuario.IMC.toFixed(2));
        }
    };

    if (page.name === 'dietas') {
        myApp.showPreloader()
        myApp.get('json/dietas.js', function (data, error) {
            if (error) {
                myApp.hidePreloader();
                myApp.alert('El canal no está disponible');
                return;
            }
            var dietas = JSON.parse(data);
            console.log(dietas);
            var dieta = dietas[0];
            $$('.navbar .center').html('Dieta ' + dieta.calorias + ' Kcal.');
            $$('[data-page=dietas] .page-content').html('');
            var html = '';
            dieta.comidas.forEach(function (comida) {
                html +=
                    '<div class="content-block-title">' + comida.titulo + '</div>' +
                    '<div class="list-block">' +
                    '    <ul>';
                comida.platos.forEach(function (plato) {
                    html +=
                        '<li>' +
                        '    <div class="item-content">' +
                        '        <div class="item-media">' +
                        '            <i class="icon icon-' + plato.icono + '"></i>' +
                        '        </div>' +
                        '        <div class="item-inner">' +
                        '            <div class="item-title">' + plato.texto + '</div>' +
                        '        </div>' +
                        '    </div>' +
                        '</li>'
                });
                html +=
                    '    </ul>' +
                    '</div>';
                $$('[data-page=dietas] .page-content')[0].innerHTML = html;
                myApp.hidePreloader();
            });
        });
    };

    if (page.name === 'videos') {
        myApp.showPreloader()
        myApp.get(myApp.params.videoURL, function (data, error) {
            if (error) {
                myApp.hidePreloader();
                myApp.alert('El canal no está disponible');
                return;
            }
            var json = JSON.parse(data);
            json.data.items.forEach(function (entry) {
                var categoria;
                switch (entry.category) {
                case 'Sports':
                    categoria = 'Deportes';
                    break;
                case 'People':
                    categoria = 'Gente';
                    break;
                default:
                    categoria = entry.category;
                }
                $$('[data-page=videos] .media-list ul')[0].innerHTML +=
                    '<li>' +
                    '    <a href="video.html?id=' + entry.id + '" class="item-link item-content">' +
                    '        <div class="item-media"><img src="' + entry.thumbnail.sqDefault + '" width="80"></div>' +
                    '        <div class="item-inner">' +
                    '            <div class="item-title-row">' +
                    '                <div class="item-title">' + entry.title + '</div>' +
                    '                <div class="item-after">' + new Date(entry.updated).toLocaleDateString() + '</div>' +
                    '            </div>' +
                    '            <div class="item-subtitle">' + categoria + '</div>' +
                    '            <div class="item-text">' + entry.description + '</div>' +
                    '        </div>' +
                    '    </a>' +
                    '</li>';
                myApp.hidePreloader();
            });
        });
    };

    if (page.name === 'video') {
        myApp.showPreloader()
        myApp.get(myApp.params.videoURL, function (data, error) {
            if (error) {
                myApp.hidePreloader();
                myApp.alert('El canal no está disponible');
                return;
            }
            var json = JSON.parse(data);
            $$('[data-page=video] .page-content')[0].innerHTML = '<iframe width="320" height="460" frameborder="0" scrolling="no" class="player" src="http://www.youtube.com/embed/' + json.data.items.filter(function (element) {
                return element.id === myApp.views.filter(function (element) {
                    return element.main
                })[0].url.split('?')[1].split('=')[1]
            })[0].id + '?autoplay=0&egm=1&autohide=1&fs=1&showinfo=1"></iframe>';
            myApp.hidePreloader();
        });
    };

    if (page.name === 'consejos') {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = myApp.params.RSSURL;
        document.getElementsByTagName('BODY')[0].appendChild(s);

        var KENTBREW_a40c = window.KENTBREW_a40c || {};
        KENTBREW_a40c.badger = function () {
            var $ = {};
            return {
                init: function (theBadge) {
                    $.theFeed = document.getElementById(theBadge).getElementsByTagName("UL")[0];
                },
                pingFeed: function (feed) {
                    $.theFeed.innerHTML = "";
                    if (feed.value.items.length) {
                        for (var i = 0; i < feed.value.items.length; i++) {
                            var li = document.createElement("li");
                            li.innerHTML =
                                '<a href="video.html?id=' + /*entry.id +*/ '" class="item-link item-content">' +
                                '    <div class="item-inner">' +
                                '        <div class="item-title">' + feed.value.items[i].title + '</div>' +
                                '        <div class="item-after">' + new Date(feed.value.items[i].pubDate).toLocaleDateString() + '</div>' +
                                '    </div>' +
                                '</a>';
                            $.theFeed.appendChild(li);
                        }
                    }
                }
            };
        }();
        KENTBREW_a40c.badger.init("KENTBREW_a40c");
    };

    if (page.name === 'tmb') {
        //(10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
        //(10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161
        if (Usuario.fechaNacimiento && Usuario.sexo && Usuario.peso && Usuario.altura) {
            $$('[data-page=tmb] h2.tmb').html(Usuario.TMB.toFixed(2));
            $$('[data-page=tmb] h2.calorias-recomendadas').html(Usuario.caloriasDiariasNecesarias.toFixed(0));
        }
    };
});

function refreshChart() {
    $$('#canvas').html('');
    var semanas = Usuario.semanas.splice(Usuario.semanas.length - 4, Usuario.semanas.length - 1);
    semanas.forEach(function (semana, i) {
        semanas[i] = [(semana.getDate() < 10) ? '0' + semana.getDate() : semana.getDate(),
            ((semana.getMonth() + 1) < 10) ? '0' + (semana.getMonth() + 1) : (semana.getMonth() + 1),
            semana.getFullYear() - 2000].join('/')
    });
    var width = $$('#canvas').parent().width();
    $$('#canvas').attr("width", width);
    $$('#canvas').attr("height", width / 1.9);
    new Chart($$('#canvas')[0].getContext("2d")).Line({
        labels: semanas,
        datasets: [
            {
                fillColor: "rgba(255,0,0,0.5)",
                strokeColor: "rgba(255,0,0,1)",
                pointColor: "rgba(255,0,0,1)",
                pointStrokeColor: "#fff",
                data: Usuario.pesos.splice(Usuario.pesos.length - 4, Usuario.pesos.length - 1)
                },
            {
                fillColor: "rgba(0,0,255,0.5)",
                strokeColor: "rgba(0,0,255,1)",
                pointColor: "rgba(0,0,255,1)",
                pointStrokeColor: "#fff",
                data: [80, 78, 78, 78]
                }
            ]
    }, {
        //datasetFill: false,
        scaleFontColor: '#755812',
        //scaleFontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
        scaleOverride: true,
        //scaleFontSize : 0,
        scaleSteps: 5,
        scaleStepWidth: ((Usuario.pesoMaximoUltimoMes * 1.05 - Usuario.pesoMinimoUltimoMes * 0.95) / 5).toFixed(2),
        scaleStartValue: Usuario.pesoMinimoUltimoMes * 0.95
    });
};
myApp.$(window).on('orientationchange', function () {
    /* Aquí entra cada vez que se gire la pantalla */
    if ($$('[data-page=home]')) {
        refreshChart();
    }
});