(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

},{"./delete":2}],2:[function(require,module,exports){
// const deleteAct = {
//     init() {
//         // $('.delete').on('click', 
//         deleteAct.removeFunct;  
//         // $('delete').click (deleteAct.removeFunct)
//     },
   const removeFunct = (event) => {
        console.log(event);
        console.log(event.target);
        
        
        const containerTodo = document.getElementById('todos')
        const containerList = document.getElementById('todo-container')
        
        containerTodo.removeChild(containerList);
    }
// }

module.exports = removeFunct;
},{}]},{},[1]);
