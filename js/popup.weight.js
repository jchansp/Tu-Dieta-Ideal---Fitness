$$('.popup.weight .add').on('click', function () {
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