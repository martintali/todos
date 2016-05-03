/**
 * Created by martindaniel on 5/2/16.
 */
var app = angular.module('todos', []);

app.controller('TodoListController', [function(){
    this.todos = todos;

    this.removeTodo = function(todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

}]);

app.controller('TodoItemController', [function(){
    this.todo = {};

    this.addTodo = function() {
        todos.unshift(this.todo);
        this.todo = {};
    };
}]);

app.directive('todo', function(){
   return {
       restrict: 'E',
       templateUrl: 'todo-item.html'
   };
});

var todos = [
    {
        description: 'Prueba 1',
    },
    {
        description: 'Prueba 1',
    },
    {
        description: 'Prueba 1',
    }
];