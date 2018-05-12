// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'dcbImgFallback', 'ngCordova'])
        .run(function ($ionicPlatform, $ionicConfig) {
            $ionicPlatform.ready(function () {
                if (ionic.Platform.grade.toLowerCase() != 'a') {
                    $ionicConfig.views.transition('none');
//                    console.log('Ionic Platform Grade is not A, disabling views transitions ');
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('startercon', {
                        url: '/start',
                        controller: 'starterCtrl'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'templates/login.html',
                        controller: 'loginCtrl'
                    })
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'AppCtrl'
                    })
                    .state('app.player', {
                        url: '/player',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/player.html',
                                controller: 'playerController'
                            }
                        }
                    })
                    .state('app.about', {
                        url: '/about',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/about.html',
                                controller: 'aboutController'
                            }
                        }
                    })
                    .state('app.msgtorj', {
                        url: '/msgtorj',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/messagetorj.html',
                                controller: 'msgtorjController'
                            }
                        }
                    })
                    .state('app.singlenews', {
                        url: '/singlenews',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/single-news.html',
                                controller: 'singlenewsController'
                            }
                        }
                    })
                    .state('app.podcast', {
                        url: '/podcast',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/podcast.html',
                                controller: 'podcastController'
                            }
                        }
                    })

                    .state('app.news_single', {
                        url: '/newslist/:id',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/single-news.html',
                                controller: 'singlenewsController'
                            }
                        }
                    })
                    .state('app.single_podcast', {
                        cache: false,
                        url: '/podcast/:id',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/singlepodcast.html',
                                controller: 'singlepodcastCtrl'
                            }
                        }
                    })
                    .state('app.programmes', {
                        url: '/programmes',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/programmes.html',
                                controller: 'programmesController'
                            }
                        }
                    })
                    .state('app.newslist', {
                        url: '/newslist',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/newslist.html',
                                controller: 'newslistController'
                            }
                        }
                    })
                    .state('app.singlepodcast', {
                        url: '/singlepodcast',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/singlepodcast.html',
                                controller: 'singlepodcastCtrl'
                            }
                        }
                    })

                    ;

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/player');
        });
