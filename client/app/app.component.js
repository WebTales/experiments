(function(app) {
  app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: '<h1>Angular 2 test</h1>'
      })
      .Class({
        constructor: function() {}
      });
})(window.app || (window.app = {}));
