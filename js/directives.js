(function() {
    'use strict';
    var app = angular.module('live.directives', []);

    app.directive('toast', ['$timeout', function($timeout) {
        return {
            link    : function($scope, $elem, attr) {
                var $p  = $elem.find('p');

                $scope.$on('showToast', function(event, todo) {
                    $p.text(todo + 'を完了しました');   // 完了したTODOにあわせて文言を変える
                    $elem.show();
                    $timeout(function(){
                        $elem.fadeOut();
                    }, 3000);
                });
            }
        }
    }]);
})();
