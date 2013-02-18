// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'settings', 'pageable', 'models/telefone', 'models/email', 'models/endereco', 'collections/telefones', 'collections/emails', 'collections/enderecos', 'backbone-forms-bootstrap'], function(Backbone, Settings, PageableCollection, Telefone, Email, Endereco, Telefones, Emails, Enderecos) {
    var Contato;
    return Contato = (function(_super) {

      __extends(Contato, _super);

      function Contato() {
        return Contato.__super__.constructor.apply(this, arguments);
      }

      Contato.prototype.urlRoot = "" + Settings.api.url + "/contatos";

      Contato.prototype.idAttribute = "id";

      Contato.prototype.parse = function(response) {
        if (response.data != null) {
          response = response.data;
        }
        this.set("telefones", new Telefones([], {
          contato: this
        }));
        this.set("enderecos", new Enderecos([], {
          contato: this
        }));
        this.set("emails", new Emails([], {
          contato: this
        }));
        if (response.telefones != null) {
          this.get("telefones").reset(response.telefones);
          delete response.telefones;
        }
        if (response.enderecos != null) {
          this.get("enderecos").reset(response.enderecos);
          delete response.enderecos;
        }
        if (response.emails != null) {
          this.get("emails").reset(response.emails);
          delete response.emails;
        }
        return response;
      };

      Contato.prototype.save = function(attrs, options) {
        return Contato.__super__.save.call(this, attrs, options);
      };

      return Contato;

    })(Backbone.Model);
  });

}).call(this);
