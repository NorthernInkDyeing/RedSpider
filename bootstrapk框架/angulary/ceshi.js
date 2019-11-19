angular.module("app", ['ng']).controller("mycon1", function ($scope, $rootScope) {
    $scope.obj = {
        name: "张三",
        age: "18",
        sex: 1
    }
    $scope.master = { firstName: "John", lastName: "Doe" };
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
    $rootScope.obj1 = [];
    $rootScope.obj1[0] = $scope.obj;
}).controller("my2", function ($scope, $rootScope) {
    $rootScope.obj1[0].name = "北离墨染";
}).controller("my3", function ($scope) {
    $scope.sayHello = function () {
        $scope.greeting = "这是一个SayHello方法"
    }
}).controller("repeat", function ($scope, $rootScope) {
    $scope.names = ["这是一个数组", "俩个数组"];
    $rootScope.lasname = "rootScope";
}).controller("module", function ($scope) {
    $scope.firstnames = "冬雪";
    $scope.lastname = "绥化";
    $scope.firstname = function () {
        return $scope.firstnames + "" + $scope.lastname;
    }
}).controller("namesCtrl", function ($scope) {
    $scope.names = [
        {
            name: "新添加的元素", country: "controller rootScope"
        },
        { name: "冬雪", country: "绥化" },
        { name: "文倩", country: "山河" }
    ];
}).controller("uppercase", function ($scope) {
    $scope.lasname = "uppercase";
    $scope.lastname = "LOWERCASE";
    $scope.pice = "1";
    $scope.Number = ".99";
    $scope.names = [
        {
            name: "country3",
            list: "20"
        }, {
            name: "country2",
            list: "20"
        }, {
            name: "country1",
            list: "20"
        }
    ];
    $scope.filter = [
        { name: "country4", country: "filter" },
        { name: "country5", country: "filter" },
        { name: "country6", country: "filter" }
    ];
}).controller("myCtrl", function ($scope, $location, $http) {
    //或取页面的URL
    $scope.myUrl = $location.absUrl();
    $scope.count = 0;
    $scope.chek = true;
    $scope.valuePice = "../img/1.jpg";
    $scope.checkAll = true;
    $scope.cont = function () {
        $scope.count++;
    }
    $scope.a = new Date;
    $scope.dis = true;
    $scope.Shclick = function () {
        $scope.dis = !$scope.dis;
    }
    $scope.price = 5.111111;
    $scope.num = 1;
    $scope.arr = new Array();
    $scope.arr.push(100);
    $scope.arr.push(200);
    $scope.arr.push(300);
    $scope.arr.push(400);
    $scope.arr.push(500);
}).controller("date", ["$scope", "$rootScope", "$http", function ($scope, $rootScope, $http) {
    $scope.birthbay = new Date();
    $scope.inituser = [
        {
            name: "张三",
            sex: "12",
            age: "90",
            car: "190"
        },
        {
            name: "222",
            sex: "111",
            age: "9110",
            car: "1222"
        },
        {
            name: "33",
            sex: "33",
            age: "3333",
            car: "33333"
        }
    ];
    $scope.ininstr = "qwertyuiop[asdfghjklzxcvbnm";
    $scope.filter1 = [
        {
            id: 1,
            sex: "nan",
            name: "ELk",
            age: 11
        },
        {
            id: 2,
            sex: "2nv",
            name: "elk",
            age: 14
        },
        {
            id: 2,
            sex: "3nan",
            name: "ELk",
            age: 13
        },
        {
            id: 4,
            sex: "4nan",
            name: "ELk",
            age: 12
        }
    ];
    // 自定义方法，返回一个
    $scope.ageElk = function (arr) {
        return arr.age > 11;
    }
}]).controller("select", function ($scope) {
    $scope.num = 0;
    $scope.val = null;
    $scope.count = function () {
        $scope.num++;
        if ($scope.val == 11) {
            $scope.num + "11位";
        } else {
            $scope.num + "--" + $scope.num + "位";
        }
    }
    $scope.names = ['Elk', "麋鹿", 'wife'];
    $scope.obj = "1";
    $scope.obj1 = "q";
    $scope.selectObj =
        {
            "1": "q",
            "2": "w",
            "3": "e",
            "4": "r"
        };
    $scope.arr = ['a', 'a', 'a', 'c', 'c', 'c', 'd', 'd', 'd'];
    $scope.selectCity = "beijing";
    $scope.item = [
        { id: "beijing", city: "北京" },
        { id: "shanghai", city: "上海" },
        { id: "xiamen", city: "厦门" }
    ];
    $scope.selectedSite = "http://www.google.com";
    $scope.sites = [
        { site: "Google", url: "http://www.google.com" },
        { site: "Runoob", url: "http://www.runoob.com" },
        { site: "Taobao", url: "http://www.taobao.com" }
    ];
}).controller("error", ["$scope", "$location", function ($scope, $location) {
    $scope.user = "Elk";
    // elk dder 麋鹿
    $scope.a = function () {
        $location.path(Url);
    }
}])