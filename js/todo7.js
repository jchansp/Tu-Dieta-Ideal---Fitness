var myApp = new Framework7({
    modalTitle: 'ToDo7'
});
var $$ = Framework7.$;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});
var todoData = localStorage.td7Data ? JSON.parse(localStorage.td7Data) : [];
$$('.popup').on('open', function () {
    $$('body').addClass('with-popup');
});
$$('.popup').on('opened', function () {
    $$(this).find('input[name="title"]').focus();
});
$$('.popup').on('close', function () {
    $$('body').removeClass('with-popup');
    $$(this).find('input[name="title"]').blur().val('');
});
$$('.popup .color').on('click', function () {
    $$('.popup .color.selected').removeClass('selected');
    $$(this).addClass('selected');
});
$$('.popup .add-task').on('click', function () {
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
});
var todoItemTemplate = $$('#todo-item-template').html();

function buildTodoListHtml() {
    var html = '';
    for (var i = 0; i < todoData.length; i++) {
        var todoItem = todoData[i];
        html += todoItemTemplate.replace(/{{title}}/g, todoItem.title).replace(/{{color}}/g, todoItem.color).replace(/{{checked}}/g, todoItem.checked).replace(/{{id}}/g, todoItem.id);
    }
    $$('.todo-items-list ul').html(html);
}
buildTodoListHtml();
$$('.todo-items-list').on('change', 'input', function () {
    var input = $$(this);
    var checked = input[0].checked;
    var id = input.parents('li').attr('data-id') * 1;
    for (var i = 0; i < todoData.length; i++) {
        if (todoData[i].id === id) todoData[i].checked = checked ? 'checked' : '';
    }
    localStorage.td7Data = JSON.stringify(todoData);
});
$$('.todo-items-list').on('delete', '.swipeout', function () {
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
window.addEventListener('load', function (e) {
    window.applicationCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
            myApp.confirm('A new version of ToDo7 is available. Do you want to load it right now?', function () {
                window.location.reload();
            });
        } else {}
    }, false);
}, false);