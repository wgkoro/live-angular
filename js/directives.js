(function() {
    'use strict';
    var app = angular.module('live.directives', []);

    app.directive('toast', [function() {
        return {
            link    : function($scope, $elem, attr) {
                $scope.$on('showToast', function(event, data) {
                    $elem.show();
                    setTimeout(function(){
                        $elem.fadeOut();
                    }, 3000);
                });
            }
        }
    }]);
})();
