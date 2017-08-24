/**
 * Created by apple on 07/07/17.
 */
myApp.directive('vrRepeat',[ '$compile', function ($compile) {
    return {
        restrict: 'EA',
        priority: 100,
        compile: function (tElement, tAttribute) {
            console.log('tElement: ', tElement);
            console.log('tattr: ', tAttribute);
            return function (scope, element, attr) {
                var originalScope = scope;
                var newEle;
                var thisScope;
                var originalElement = element[0];
                element[0].style.display = "none";
                console.log(element);
                console.log('attr: ', attr);
                attributeString = attr.vrRepeat;
                console.log('attrStr: ', attributeString);
                //console.log(attributeString);
                var values = attributeString.split(' ');
                var iterator = values[0];
                var dataString = values[2];
                var i;
                console.log('DataString: ', dataString);
                var data = scope[dataString];
                console.log("data on scope: ", scope);
                console.log('originalScope: ', originalScope);
                scope = originalScope;
                console.log('scope: ', scope);
                console.log('data: ', data);
                scope.$watch(function() {
                    return attr.vrRepeat;
                }, function(newValue, oldValue) {
                    if(newValue !== null) {
                        console.log("inside:@@@@@@")
                        attributeString = newValue;
                        console.log("hello", newValue, oldValue);
                        values = attributeString.split(' ');
                        iterator = values[0];
                        dataString = values[2];
                        data = scope[dataString];
                        //$compile(element)(scope);
                        var originalData = data;
                        //attr.$set('vrRepeat', null);
                        for(i = data.length - 1; i >= 0; i--) {
                            console.log('hi');
                            newEle = element[0].cloneNode(true);
                            console.log(element[0]);
                            console.log(newEle);
                            newEle.style.display = '';
                            thisScope = scope.$new(true);
                            thisScope[dataString] = originalData;
                            thisScope.$newIndex = i;
                            thisScope[iterator] = data[i];
                            $compile(newEle)(thisScope);
                            console.log(newEle);

                            element[0].parentNode.insertBefore(newEle, element[0].nextElementSibling);
                            // element.append(newEle);
                        }
                        //attr.$set('vrRepeat', attributeString);
                    }
                });
                var originalData = data;
                attr.$set('vrRepeat', null);
                for(i = data.length - 1; i >= 0; i--) {
                    console.log('hi');
                    newEle = element[0].cloneNode(true);
                    newEle.style.display = '';
                    console.log(newEle);
                    thisScope = scope.$new(true);
                    thisScope[dataString] = originalData;
                    thisScope.$newIndex = i;
                    thisScope[iterator] = data[i];
                    $compile(newEle.childNodes)(thisScope);
                    console.log(newEle.children);

                    element[0].parentNode.insertBefore(newEle, element[0].nextElementSibling);
                    // element.append(newEle);
                }

               /* setTimeout(function () {
                    attr.$set('vrRepeat', 'x in persons');
                    scope.$apply();
                }, 4000);*/


            }
        }
    }
}]);