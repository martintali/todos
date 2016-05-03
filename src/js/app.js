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

var todos = [
];