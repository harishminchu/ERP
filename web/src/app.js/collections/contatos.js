// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'pageable', 'settings', 'models/contato'], function(Backbone, PageableCollection, Settings, Contato) {
    var Contatos;
    return Contatos = (function(_super) {

      __extends(Contatos, _super);

      function Contatos() {
        return Contatos.__super__.constructor.apply(this, arguments);
      }

      Contatos.prototype.model = Contato;

      Contatos.prototype.url = Settings.api.url + "/contatos";

      Contatos.prototype.parse = function(response) {
        if (!response.metadata.errors) {
          return response.data;
        }
      };

      return Contatos;

    })(PageableCollection);
  });

}).call(this);
