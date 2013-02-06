// Generated by CoffeeScript 1.4.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'sprintf', 'subroute'], function($, _, Backbone) {
    var Core;
    return Core = (function(_super) {

      __extends(Core, _super);

      function Core() {
        this.handleError = __bind(this.handleError, this);
        return Core.__super__.constructor.apply(this, arguments);
      }

      Core.prototype.routes = {
        ":controller(/*path)": 'loadModuleRouter'
      };

      Core.prototype.subRouters = {};

      Core.prototype.initialize = function() {
        Core.__super__.initialize.call(this);
        this.setResponseCachers();
        return Backbone.history.start();
      };

      Core.prototype.loadModuleRouter = function(controller) {
        var controllerName,
          _this = this;
        controller = controller.toLowerCase();
        controllerName = controller.substr(0, 1).toUpperCase() + controller.substr(1).toLowerCase();
        if (!(this.subRouters[controller] != null) && controller !== "core") {
          return require(["controllers/" + controller + "/router"], function(Controller) {
            console.log(sprintf("Starting controller %$1s ...", controllerName));
            return _this.subRouters[controller] = new Controller(controller);
          }, function(error) {
            console.error(sprintf("%$1s controller required but not found", controllerName));
            return _this.handleError(error);
          });
        } else {
          return subRouters[controller];
        }
      };

      Core.prototype.handleError = function(error) {};

      Core.prototype.setResponseCachers = function() {
        var _this = this;
        return $.ajaxSetup({
          statusCode: {
            401: function() {
              return _this.navigate("login", {
                trigger: true
              });
            }
          }
        });
      };

      return Core;

    })(Backbone.SubRouter);
  });

}).call(this);
