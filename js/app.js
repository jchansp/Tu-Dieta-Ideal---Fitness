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
        User.physicalActivity = 1;
        User.height = 1.86;
        User.initialDate = new Date(2014, 3 - 1, 21);
        User.dateOfBirth = new Date(1981, 10 - 1, 7);
        User.name = 'Jesús';
        User.weights = [85, null, 83, null, 81, 80, 79, 80, 81, null];
        User.sex = 'Masculino';
        User.targetWeights = [80, 78];*/
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
        if (User.name)
            $$('input.name').val(User.name);
        if (User.sex)
            $$('select.sex').val(User.sex);
        if (User.dateOfBirth)
            $$('input.dateOfBirth').val(User.dateOfBirth);
        if (User.weight)
            $$('input.weight').val(User.weight);
        if (User.height)
            $$('input.height').val(User.height);
        if (User.physicalActivity)
            $$('input.physicalActivity').val(User.physicalActivity);

        $$('input.weight').parent().parent().parent().find('.subtitle').html('(' + $$('input.weight').val() + ')');
        $$('input.height').parent().parent().parent().find('.subtitle').html('(' + $$('input.height').val() + ')');

        $$('input.weight').on('change', function (e) {
            $$('input.weight').parent().parent().parent().find('.subtitle').html('(' + $$('input.weight').val() + ')');
        });
        $$('input.height').on('change', function (e) {
            $$('input.height').parent().parent().parent().find('.subtitle').html('(' + parseFloat($$('input.height').val()).toFixed(2) + ')');
        });

        $$('form.configuracion').on('submit', function (e) {
            e.preventDefault();
            User.name = $$('input.name').val();
            User.sex = $$('select.sex').val();
            User.dateOfBirth = $$('input.dateOfBirth').val();
            User.weight = $$('input.weight').val();
            User.height = parseFloat($$('input.height').val()).toFixed(2);
            User.physicalActivity = $$('select.physicalActivity').val();
            myApp.alert('Datos guardados');
        });

        $$('.button-submit').tap(function () {
            $$('form.configuracion').trigger('submit');
        });
    };

    if (page.name === 'bodyMassIndex') {
        if (User.bodyMassIndex) {
            //var User.bodyMassIndex = (User.weight / Math.pow(User.height, 2)).toFixed(2);
            if (User.bodyMassIndex < 18.5) $$('h2.bodyMassIndex').parent().addClass('delgado');
            if (User.bodyMassIndex >= 18.5 && User.bodyMassIndex <= 25) $$('h2.bodyMassIndex').parent().addClass('saludable');
            if (User.bodyMassIndex > 25 && User.bodyMassIndex <= 30) $$('h2.bodyMassIndex').parent().addClass('sobreweight');
            if (User.bodyMassIndex > 30 && User.bodyMassIndex <= 40) $$('h2.bodyMassIndex').parent().addClass('obeso');
            if (User.bodyMassIndex > 40) $$('h2.bodyMassIndex').parent().addClass('morbido');
            $$('[data-page=bodyMassIndex] h2.bodyMassIndex').html(User.bodyMassIndex.toFixed(2));
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
        //(10 x weight en kg) + (6,25 × height en cm) - (5 × age en años) + 5
        //(10 x weight en kg) + (6,25 × height en cm) - (5 × age en años) - 161
        if (User.dateOfBirth && User.sex && User.weight && User.height) {
            $$('[data-page=tmb] h2.tmb').html(User.TMB.toFixed(2));
            $$('[data-page=tmb] h2.calorias-recomendadas').html(User.dailyCaloricNeeds.toFixed(0));
        }
    };
});

function refreshChart() {
    $$('#canvas').html('');
    var weeks = User.weeks.splice(User.weeks.length - 4, User.weeks.length - 1);
    weeks.forEach(function (week, i) {
        weeks[i] = [(week.getDate() < 10) ? '0' + week.getDate() : week.getDate(),
            ((week.getMonth() + 1) < 10) ? '0' + (week.getMonth() + 1) : (week.getMonth() + 1),
            week.getFullYear() - 2000].join('/')
    });
    var width = $$('#canvas').parent().width();
    $$('#canvas').attr("width", width);
    $$('#canvas').attr("height", width / 1.9);
    new Chart($$('#canvas')[0].getContext("2d")).Line({
        labels: weeks,
        datasets: [
            {
                fillColor: "rgba(255,0,0,0.5)",
                strokeColor: "rgba(255,0,0,1)",
                pointColor: "rgba(255,0,0,1)",
                pointStrokeColor: "#fff",
                data: User.weights.splice(User.weights.length - 4, User.weights.length - 1)
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
        scaleStepWidth: ((User.lastMonthsMaximumWeight * 1.05 - User.lastMonthsMinimumWeight * 0.95) / 5).toFixed(2),
        scaleStartValue: User.lastMonthsMinimumWeight * 0.95
    });
};
myApp.$(window).on('orientationchange', function () {
    /* Aquí entra cada vez que se gire la pantalla */
    if ($$('[data-page=home]')) {
        refreshChart();
    }
});