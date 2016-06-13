(function() {
    'use strict';
    var app = angular.module('live.controllers', []);

    app.controller('MainController', [
            '$rootScope', 
            'TodoCreator', 
        function($rootScope, todoCreator) {
        this.todoList   = [];
        this.newTodo    = '';
        this.showEmpty  = true;

        var _self   = this;
        this.createNewTodo = function() {
            var todo = todoCreator.build(_self.newTodo);
            _self.todoList.push(todo);
            _self.newTodo   = '';   // 入力欄を空に戻す
            _self.showEmpty = false;
        };

        this.showEditMode   = function(todo) {
            todo.original   = todo.todo;    // 編集前に戻せるようにしておく(ng-modelにより変更内容がリアルタイムに適用されるので)
            todo.editMode   = true;
        };

        this.hideEditMode   = function(todo) {
            todo.editMode   = false;
        };

        this.cancel   = function(todo) {
            todo.editMode   = false;
            todo.todo       = todo.original;
        };

        this.changeToDone   = function(todo) {
            if (todo.done) {
                // 完了トーストの表示を指示
                $rootScope.$broadcast('showToast', todo.todo);
                
                // タスクが空かどうかのフラグ修正
                // このへんはlodash.jsを使えば1〜2行で済む...
                var len = _self.todoList.length;
                var n   = 0;
                for (var i=0;i<len;i++) {
                    if (_self.todoList[i].done == false) {
                        n++;
                        break;
                    }
                }

                if (!n) {
                    _self.showEmpty = true;
                }
            }
        };

    }]);
})();

