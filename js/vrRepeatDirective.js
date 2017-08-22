/**
 * Created by apple on 07/07/17.
 */
myApp.directive('vrRepeat',[ '$compile', function ($compile) {
    return {
        restrict: 'EA',
        link: function (scope, element, attr) {
            var newEle = element[0].cloneNode(true);
            var thisScope = scope.$new(true);
            scope.x = "hello i m isolated";
            console.log(element);
            var attributeString = attr.vrRepeat;
            console.log(attributeString);
            var values = attributeString.split(' ');
            var iterator = values[0];
            var dataString = values[2];
            var i;
            var data = scope[dataString];
            console.log(data);
            for(i = 0; i < data.length; i++) {
                console.log('hi');
                newEle = element[0].cloneNode(true);
                element[0].parentNode.insertBefore(newEle, element[0].nextElementSibling);

            }

        }
    }
}]);