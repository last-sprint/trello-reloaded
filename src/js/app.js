/* <div class="col s12 m6 todo">
<div class="card-panel">
    <input type="checkbox" id="tarea-1" />
    <label for="tarea-1">
        Tarea 1.                        
    </label>
</div>
</div> */

const app = {
    init() { 
        $('#todo-form').submit(app.addTodo);
    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');
        
        let todoId = `todo-${app.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo').attr('id','todo-container');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);
        const $deleteAct = $('<button />').addClass('delete').text('x').on('click',deleteList);
        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoCard.append($deleteAct);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);
        
        app.counter = app.counter + 1;
    },
    counter: 0
};
const deleteList = require("./delete");

$(document).ready(app.init);
