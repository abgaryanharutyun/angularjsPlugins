/**
 *
 * @author Harutyun Abgaryan harutyunAbgaryan@gmail.com
 *
 * @version 0.1 v
 * Directive hideOnBlur for toggle open and Close
 *
 * @example
 * <script src="../directives/hideOnBlur.js"></script>
 * for clicked item set  class
 * <div class="clickedClass">
 *   <div hide-on-blure="clickedClass hide" >
 * </div>
 *</div>
 * @class hide
 * for display:none;
 */
angular.module('App')
  .directive('hideOnBlur', function () {
    return {
      restrict: 'ECMA',
      link: function (scope, element, attrs) {
        angular.element(document).ready(function () {
          var clicked = true;
          angular.element(document).click(function (e) {
            angular.element(element).removeClass('hide');
            angular.element(element).hide();
            if (jQuery(e.target).hasClass(attrs.hideOnBlur)) {
              if (clicked) {
                angular.element(element).show();
                clicked=false;
              }else{
                clicked=true;
              }
            }
            if (!jQuery(e.target).hasClass(attrs.hideOnBlur)){
              clicked=true;
            }
            if (jQuery(element).find(e.target).length){
              angular.element(element).show();
              clicked=false;
            }
          })
        });
      }
    }
  });

