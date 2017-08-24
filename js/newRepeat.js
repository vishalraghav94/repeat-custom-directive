/**
 * Created by apple on 07/07/17.
 */
myApp.directive('newRepeat',[ '$compile', function ($compile) {
   return {
       restrict: 'EA',
       transclude: 'element',
       link: function (scope, element, attr, controller, transclude) {
           var loopString = attr.newRepeat;
           var values = loopString.split(' ');
           var iterator = values[0];
           var dataString = values[2];
           var data = scope[dataString];
           var parent = element.parent();
           var i, newScope, elements = [], block = {};
           scope.$watchCollection(dataString, function (data) {
               console.log("hello: ", data);
               if (elements.length > 0) {
                   for (i = 0; i < elements.length; i++) {
                       elements[i].el.remove();
                       elements[i].scope.$destroy();
                   }
                   elements = [];
               }
               for(i = 0; i < data.length; i++) {
                   newScope = scope.$new(true);
                   newScope[iterator] = data[i];
                   newScope.$newIndex  = i;
                   transclude(newScope, function(clone) {
                       parent.append(clone);
                       block.el = clone;
                       block.scope = newScope;
                       elements.push(block);
                       block = {};
                   });
               }
           });

       }


   }
}]);