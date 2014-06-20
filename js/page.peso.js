$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    if (page.name === 'peso') {
        /*if (Usuario.semanas && Usuario.pesos && Usuario.altura) {
            Usuario.semanas.forEach(function (semana, i) {
                var fecha = [(semana.getDate() < 10) ? '0' + semana.getDate() : semana.getDate(),
                    ((semana.getMonth() + 1) < 10) ? '0' + (semana.getMonth() + 1) : (semana.getMonth() + 1),
                semana.getFullYear() - 2000].join('/')
                var peso = Usuario.pesos[i] || '(vacío)';
                var IMC = (peso / Math.pow(Usuario.altura, 2));
                var clase;
                if (IMC < 18.5)
                    clase = 'delgado';
                if (IMC >= 18.5 && IMC <= 25)
                    clase = 'saludable';
                if (IMC > 25 && IMC <= 30)
                    clase = 'sobrepeso';
                if (IMC > 30 && IMC <= 40)
                    clase = 'obeso';
                if (IMC > 40)
                    clase = 'morbido';
                $$('[data-page=pesos] .list-block ul')[0].innerHTML +=
                //'<li class="swipeout">' +
                '<li>' +
                //'    <div class="item-content swipeout-content">' +
                '    <div class="item-content">' +
                    '        <div class="item-media"><i class="icon ' + clase + '"></i></div>' +
                    '        <div class="item-inner">' +
                    '            <div class="item-title">' + peso + '</div>' +
                    '            <div class="item-after">' + fecha + '</div>' +
                    '        </div>' +
                    '    </div>' +
                //'    <div class="swipeout-actions">' +
                //'        <div class="swipeout-actions-inner"><a href="#" data-confirm="¿Seguro que quiere borrar este peso?" class="swipeout-delete">Borrar</a></div>' +
                //'    </div>' +
                '</li>';
            });
            //if (Usuario.nombre && !Usuario.seHaPesadoEstaSemana) {
            //    myApp.prompt('Hola ' + Usuario.nombre + ' ¿Cuánto pesas esta semana?', function (data) {
            //        Usuario.peso = data;
            //        myApp.alert('Perfecto, esta semana pesas ' + data + ' kg.');
            //    });
            //};
            //var semanas = Usuario.semanas.splice(Usuario.semanas.length - 4, Usuario.semanas.length - 1);
            //semanas.forEach(function (semana, i) { semanas[i] = semana.toLocaleDateString() });
            //new Chart(document.getElementById("canvas").getContext("2d")).Line({
            //    labels: semanas,
            //    datasets:
            //        [
            //		    {
            //		        fillColor: "rgba(255,0,0,0.5)",
            //		        strokeColor: "rgba(255,0,0,1)",
            //		        pointColor: "rgba(255,0,0,1)",
            //		        pointStrokeColor: "#fff",
            //		        data: Usuario.pesos.splice(Usuario.pesos.length - 4, Usuario.pesos.length - 1)
            //		    },
            //            {
            //                fillColor: "rgba(0,0,255,0.5)",
            //                strokeColor: "rgba(0,0,255,1)",
            //                pointColor: "rgba(0,0,255,1)",
            //                pointStrokeColor: "#fff",
            //                data: [80, 78, 78, 78]
            //            }
            //        ]
            //},
            //{
            //    //datasetFill: false,
            //    scaleOverride: true,
            //    scaleSteps: 10,
            //    scaleStepWidth: ((Usuario.pesoMaximoUltimoMes * 1.05 - Usuario.pesoMinimoUltimoMes * 0.95) / 10).toFixed(2),
            //    scaleStartValue: Usuario.pesoMinimoUltimoMes * 0.95,
            //});
        }*/
    }
});