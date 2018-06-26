describe('Filters', function () {

  beforeEach(module('filterApp'));

  var reverse;

  beforeEach(inject(function($filter){
    reverse = $filter('reverse',{})
  }));

  describe('reverse', function () {
    it('should reverse the string', function () {
      /*var $scope = {};
      var controller = $controller('CalculatorController', { $scope: $scope });
      $scope.x = 1;
      $scope.y = 2;
      $scope.sum();
      expect($scope.z).toBe(3);*/
      expect(reverse("sam")).toBe("mas");
      expect(reverse("nik")).toBe("kin");
      expect(reverse("cat")).toBe("sat");
    }); 
  });

});