var an = angular.module("Angular", []);
an.controller("Verification", ["$scope", function ($scope) {
    $scope.link = "链接测试下面开始程序书写";
    $scope.message = "";
    $scope.left = function () { return 100 - $scope.message.length; };
    $scope.clear = function () { $scope.message = ""; };
    $scope.save = function () { alert("Note Saved"); };
    $scope.todoList = [{ todoText: 'Clean House', done: false }];

    $scope.todoAdd = function () {
        if ($scope.todoInput) {
            $scope.todoList.push({ todoText: $scope.todoInput, done: false });
            $scope.todoInput = "";
        }
    };
    $scope.remove = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        console.log(oldList);
        angular.forEach(oldList, function (x) {
            alert("不对劲");
            if (!x.done) $scope.todoList.push(x);
        });
    };
    $scope.master = {
        firstName: "Elk",
        lastName: "Deer"
    };
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    }
    $scope.reset();
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
}])