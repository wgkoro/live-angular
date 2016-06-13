(function() {
    'use strict';
    var app = angular.module('live.controllers', []);

    app.controller('MainController', [
            '$rootScope', 
            'TodoCreator', 
        function($rootScope, todoCreator) {
        this.todoList   = [];
        this.newTodo    = '';

        var _self   = this;
        this.createNewTodo = function() {
            var todo = todoCreator.build(_self.newTodo);
            _self.todoList.push(todo);
        };

        this.showEditMode   = function(todo) {
            todo.original   = todo.todo;
            todo.editMode   = true;
        };

        this.hideEditMode   = function(todo) {
            todo.editMode   = false;
            $rootScope.$broadcast('showToast');
        };

        this.cancel   = function(todo) {
            todo.editMode   = false;
            todo.todo       = todo.original;
        };

    }]);
})();

