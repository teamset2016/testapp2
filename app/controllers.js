/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";

angular.module("myApp.controllers", []).controller("songCtrl", function($scope, Song) {
  
  $scope.songs = Song.query();
  $scope.newSong = { };
  
  $scope.addSong = function(/** String */ artist, /** String */ title) {
    var song = new Song();
    song.artist = artist;
    song.title = title;
    song.score = 0;
    song.$save(function(response) {
      $scope.songs.push(response);
    });

    $scope.newSong.title = "";
    $scope.newSong.artist = "";
  };
  
  $scope.updateSong = function(song) {
    song.$update();
  };
  
  $scope.deleteSong = function(/** Song */ song) {
    var idx = $scope.songs.indexOf(song);
    if (idx >= 0) {
      $scope.songs.splice(idx, 1);
    }
    song.$remove();
  };
  
  $scope.isEmpty = function(/** String */ str) {
    return _.isBlank(str);
  };
});
