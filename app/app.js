/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";

angular.module("myApp", [
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.routes'
]);

_.mixin(_.string.exports());
