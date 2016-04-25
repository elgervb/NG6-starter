import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import TestComponent from './components/test/test.component';
import 'normalize.css';

angular.module('app', [
    uiRouter
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
