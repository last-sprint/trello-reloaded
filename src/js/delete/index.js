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