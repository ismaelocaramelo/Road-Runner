angular
.module('RoadRunner')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/js/views/about-page/index.html'
  })
  .state('jobs', {
    url: '/jobs',
    templateUrl: '/js/views/jobs/index.html'
  })
  .state('valves', {
    url: '/valves',
    templateUrl: '/js/views/valves/index.html'
  })
  .state('404',{
    templateUrl: '/js/views/errors/404.html'
  });

  $urlRouterProvider
    .otherwise(function($injector ){
      var state = $injector.get('$state');
      state.go('404');
    });
}
