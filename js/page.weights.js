$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    if (page.name === 'weights') {
        myApp.weights.forEach(function (weight, i) {
            $$('[data-page=weights] .list-block ul')[0].innerHTML +=
                '<li class="swipeout">' +
            /*'<li>' +*/
            '    <div class="item-content swipeout-content">' +
            /*'    <div class="item-content">' +*/
            '        <div class="item-media"><i class="icon ' + /*clase +*/ '"></i></div>' +
                '        <div class="item-inner">' +
                '            <div class="item-title">' + weight.weight + '</div>' +
                '            <div class="item-after">' + dateToJSON(weight.date) + '</div>' +
                '        </div>' +
                '    </div>' +
                '    <div class="swipeout-actions">' +
                '        <div class="swipeout-actions-inner"><a href="#" data-confirm="¿Seguro que quiere borrar este peso?" class="swipeout-delete">Borrar</a></div>' +
                '    </div>' +
                '</li>';
        });
        /*if (User.weeks && User.weights && User.height) {
            User.weeks.forEach(function (week, i) {
                var date = [(week.getDate() < 10) ? '0' + week.getDate() : week.getDate(),
                    ((week.getMonth() + 1) < 10) ? '0' + (week.getMonth() + 1) : (week.getMonth() + 1),
                week.getFullYear() - 2000].join('/')
                var weight = User.weights[i] || '(vacío)';
                var bodyMassIndex = (weight / Math.pow(User.height, 2));
                var clase;
                if (bodyMassIndex < 18.5)
                    clase = 'delgado';
                if (bodyMassIndex >= 18.5 && bodyMassIndex <= 25)
                    clase = 'saludable';
                if (bodyMassIndex > 25 && bodyMassIndex <= 30)
                    clase = 'sobreweight';
                if (bodyMassIndex > 30 && bodyMassIndex <= 40)
                    clase = 'obeso';
                if (bodyMassIndex > 40)
                    clase = 'morbido';
                $$('[data-page=weights] .list-block ul')[0].innerHTML +=
                //'<li class="swipeout">' +
                '<li>' +
                //'    <div class="item-content swipeout-content">' +
                '    <div class="item-content">' +
                    '        <div class="item-media"><i class="icon ' + clase + '"></i></div>' +
                    '        <div class="item-inner">' +
                    '            <div class="item-title">' + weight + '</div>' +
                    '            <div class="item-after">' + date + '</div>' +
                    '        </div>' +
                    '    </div>' +
                //'    <div class="swipeout-actions">' +
                //'        <div class="swipeout-actions-inner"><a href="#" data-confirm="¿Seguro que quiere borrar este weight?" class="swipeout-delete">Borrar</a></div>' +
                //'    </div>' +
                '</li>';
            });
            //if (User.name && !User.seHaPesadoEstaSemana) {
            //    myApp.prompt('Hola ' + User.name + ' ¿Cuánto pesas esta week?', function (data) {
            //        User.weight = data;
            //        myApp.alert('Perfecto, esta week pesas ' + data + ' kg.');
            //    });
            //};
            //var weeks = User.weeks.splice(User.weeks.length - 4, User.weeks.length - 1);
            //weeks.forEach(function (week, i) { weeks[i] = week.toLocaleDateString() });
            //new Chart(document.getElementById("canvas").getContext("2d")).Line({
            //    labels: weeks,
            //    datasets:
            //        [
            //		    {
            //		        fillColor: "rgba(255,0,0,0.5)",
            //		        strokeColor: "rgba(255,0,0,1)",
            //		        pointColor: "rgba(255,0,0,1)",
            //		        pointStrokeColor: "#fff",
            //		        data: User.weights.splice(User.weights.length - 4, User.weights.length - 1)
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
            //    scaleStepWidth: ((User.lastMonthsMaximumWeight * 1.05 - User.lastMonthsMinimumWeight * 0.95) / 10).toFixed(2),
            //    scaleStartValue: User.lastMonthsMinimumWeight * 0.95,
            //});
        }*/
        /*$$('#demoform-2').on('change', function (e) {
            console.log(e);
            for (var i = 0; i < this.elements.length; i++) {
                console.log(this.elements[i].value);
                console.log($$(this.elements[i]).val());
            }
            this.elements.forEach(function (element) {
                console.log(element);
            });
            var title = $$('.popup input[name="title"]').val().trim();
            if (title.length === 0) {
                return;
            }
            var color = $$('.popup .color.selected').attr('data-color');
            todoData.push({
                title: title,
                color: color,
                checked: '',
                id: (new Date()).getTime()
            });
            localStorage.td7Data = JSON.stringify(todoData);
            buildTodoListHtml();
            myApp.closeModal('.popup');

        });*/
        $$('#demoform-2').on('change', 'input', function () {
            var todoData;
            var input = $$(this);
            var checked = input[0].checked;
            var id = input.parents('li').attr('data-id') * 1;
            for (var i = 0; i < todoData.length; i++) {
                if (todoData[i].id === id) todoData[i].checked = checked ? 'checked' : '';
            }
            localStorage.td7Data = JSON.stringify(todoData);
        });
        $$('[data-page=weights] .list-block ul').on('delete', '.swipeout', function () {
            var id = $$(this).attr('data-id') * 1;
            var index;
            for (var i = 0; i < todoData.length; i++) {
                if (todoData[i].id === id) index = i;
            }
            if (typeof (index) !== 'undefined') {
                todoData.splice(index, 1);
                localStorage.td7Data = JSON.stringify(todoData);
            }
        });
    }
});