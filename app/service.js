var myModule = angular.module('serviceApp', []);

myModule.factory('myService', function(){

    var serviceImplementation   = {};
    serviceImplementation.one   = 1;
    serviceImplementation.two   = 2;
    serviceImplementation.three = 3;

    return serviceImplementation

});