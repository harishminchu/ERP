// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone', 'settings', 'models/telefone'], function(_, Backbone, Settings, Telefone) {
    /*
    	#	Collection do Telefone
    */

    var Telefones;
    Telefones = (function(_super) {

      __extends(Telefones, _super);

      function Telefones() {
        return Telefones.__super__.constructor.apply(this, arguments);
      }

      Telefones.prototype.model = Telefone;

      Telefones.prototype.initialize = function(items, options) {
        if (options.contato != null) {
          return this.contato = options.contato;
        }
      };

      Telefones.prototype.url = function() {
        var base;
        base = this.contato != null ? "" + (this.contato.url()) : Settings.api.url;
        return base += "/telefones";
      };

      return Telefones;

    })(Backbone.Collection);
    Telefones.format = {
      fromRaw: function(rawData) {
        return rawData = _(rawData).map(Telefone.format.fromRaw);
      },
      toRaw: function(formattedData) {
        return _(formattedData).map(Telefone.format.toRaw);
      }
    };
    Telefones.prototype.formatToRaw = function() {
      return Telefones.format.toRaw(this.toJSON());
    };
    Telefones.prototype.formatFromRaw = function() {
      return Telefones.format.fromRaw(this.toJSON());
    };
    return Telefones;
  });

}).call(this);
