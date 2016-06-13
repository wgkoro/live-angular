(function() {
    'use strict';
    var app = angular.module('live.services', []);

    app.factory('TodoCreator', [function() {
        return {
            build   : function(newTodo) {
                var todo        = {};
                todo.todo       = newTodo;
                todo.done       = false;
                todo.original   = null;
                todo.editMode   = false;

                return todo;
            }
        }
    }]);
})();

