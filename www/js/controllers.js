angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $ionicScrollDelegate) {
        $scope.doRefresh =function(){
            $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "2.0", "q": "http://www.enikos.gr/feeds/content_latest.xml","num":"10" } })
                .success(function(data) {
                    $scope.rssTitle = data.responseData.feed.title;
                    $scope.rssUrl = data.responseData.feed.feedUrl;
                    $scope.rssSiteUrl = data.responseData.feed.link;
                    $scope.entries = data.responseData.feed.entries;

                })
                .error(function(data) {
                    console.log("ERROR: " + data);
                }).finally(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };

        $scope.doRefresh();
        $scope.getdate=
            function(date){
                var d = Date.parse(date);
                var s = new Date(d).toLocaleDateString();
                return s;

        };

        $scope.browse = function(v) {
            window.open(v, "_system", "location=yes");
        }
        $scope.toggleItem = function(item) {
            if ($scope.isItemShown(item)) {
                $scope.shownItem = null;
            } else {
                $scope.shownItem = item;
            }
            $ionicScrollDelegate.resize();
        };
        $scope.isItemShown = function(item) {
            $ionicScrollDelegate.resize();
            return $scope.shownItem === item;
        };
    })
;
