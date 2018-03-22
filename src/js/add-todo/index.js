const app = {
    init() {
        $('#todo-form').submit(app.addTodo);
    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');

        let todoId = `todo-${app.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);
        const $elementButton = $('<button />').addClass('waves-effect waves-light btn btn-color').text('color');

        $todoCard.append($elementButton);
        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);

        app.counter = app.counter + 1;
    },
    counter: 0
};

module.exports = app;