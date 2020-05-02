angular
  .module("starter", ["ionic"])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
      })

      .state("login", {
        url: "/login",
        templateUrl: "templates/login.html",
      })

      .state("app.profile", {
        url: "/profile",
        views: {
          menuContent: {
            templateUrl: "templates/profile.html",
          },
        },
      })
      .state("app.home", {
        url: "/home",
        views: {
          menuContent: {
            templateUrl: "templates/home.html",
          },
        },
      })

      .state("app.settings", {
        url: "/settings",
        views: {
          menuContent: {
            templateUrl: "templates/settings.html",
          },
        },
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/login");
  });
