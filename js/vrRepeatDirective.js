/**
 * Created by apple on 07/07/17.
 */
myApp.directive('vrRepeat',[ '$compile', function ($compile) {
    return {
        restrict: 'EA',
        link: function (scope, element, attr) {
            var newEle;
            var thisScope;
            var originalElement = element[0];
            element[0].style.display = "none";
            console.log(element);
            scope.attributeString = attr.vrRepeat;
            //console.log(attributeString);
            var values = scope.attributeString.split(' ');
            var iterator = values[0];
            var dataString = values[2];
            var i;
            var data = scope[dataString];
                console.log(data);
                scope.$watch('attributeString', function(newValue) {
                    //attributeString = newValue;
                    console.log(newValue);
                    /*values = attributeString.split(' ');
                    iterator = values[0];
                    dataString = values[2];
                    data = scope[dataString];*/
                });
            attr.$set('vrRepeat', null);
            for(i = data.length - 1; i >= 0; i--) {
                console.log('hi');
                newEle = element[0].cloneNode(true);
                newEle.style.display = '';
                thisScope = scope.$new(true);
                thisScope.$newIndex = i;
                thisScope[iterator] = data[i];
                $compile(newEle)(thisScope);
                console.log(newEle);
                element[0].parentNode.insertBefore(newEle, element[0].nextElementSibling);
               // element.append(newEle);
            }

        }
    }
}]);