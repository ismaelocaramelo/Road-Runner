angular
  .module('RoadRunner')
  .directive('homeMenu', homeMenu);

function homeMenu(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "js/views/home.html";
  // directive.scope = {
  //     question: '='
  // };
  return directive;
}
