// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'models/contato', 'models/telefone', 'models/email', 'models/endereco', 'collections/contatos', 'text!templates/contatos/editor.html', 'backbone-forms-list', 'backbone-forms-inline-nestedmodels'], function($, _, Backbone, Contato, Telefone, Email, Endereco, Contatos, ContatosEditorTemplate) {
    var ContatoEditorView, UFs;
    UFs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    return ContatoEditorView = (function(_super) {

      __extends(ContatoEditorView, _super);

      function ContatoEditorView() {
        return ContatoEditorView.__super__.constructor.apply(this, arguments);
      }

      ContatoEditorView.prototype.className = 'editor modal fade';

      ContatoEditorView.prototype.events = {
        'click [data-action="save"]': 'save'
      };

      ContatoEditorView.prototype.template = _.template(ContatosEditorTemplate);

      ContatoEditorView.prototype.initialize = function(options) {
        if (!(this.model != null)) {
          this.model = new Contato();
        }
        return this.form = new Backbone.Form({
          model: this.model,
          /*
          				#	Campos do Formulário
          */

          schema: {
            nome: {
              type: "Text",
              title: "Nome / Razão Social"
            },
            pessoaJuridica: {
              title: "Espécie",
              help: "Determina o tipo do cadastro",
              type: "Select",
              options: [
                {
                  val: true,
                  label: "Pessoa Jurídica"
                }, {
                  val: false,
                  label: "Pessoa Física"
                }
              ]
            },
            numeroDocumento: {
              type: "Text",
              title: "CPF/CNPJ"
            },
            telefones: {
              type: "List",
              itemType: "InlineNestedModel",
              template: "listField",
              model: Telefone,
              subSchema: {
                identificacao: {
                  type: "Select",
                  title: "Identificação",
                  options: ["Empresarial", "Residencial", "Profissional", "Pessoal"]
                },
                numero: {
                  type: "Text",
                  dataType: "tel",
                  title: "Número"
                },
                operadora: {
                  type: "Select",
                  title: "Operadora",
                  options: ['Claro', 'Tim', 'Vivo', 'Oi', 'GVT', 'Nextel', 'NET Virtual']
                }
              }
            },
            emails: {
              type: "List",
              itemType: "InlineNestedModel",
              template: "listField",
              model: Email,
              subSchema: {
                identificacao: {
                  type: "Select",
                  title: "Identificação",
                  options: ["Profissional", "Pessoal"]
                },
                email: {
                  type: "Text",
                  dataType: "email",
                  title: "E-mail"
                }
              }
            },
            enderecos: {
              type: "List",
              itemType: "InlineNestedModel",
              template: "listField",
              model: Endereco,
              subSchema: {
                identificacao: {
                  type: "Select",
                  title: "Identificação",
                  options: ["Empresarial", "Residencial", "Celular"]
                },
                cep: {
                  type: "Text",
                  title: "CEP"
                },
                numero: {
                  type: "Text",
                  title: "Número"
                },
                logradouro: {
                  type: "Text",
                  title: "Logradouro"
                },
                localidade: {
                  type: "Text",
                  title: "Localidade"
                },
                uf: {
                  type: "Select",
                  title: "UF",
                  options: UFs
                }
              }
            },
            descricao: {
              type: "TextArea",
              template: "listField",
              title: "Anotações"
            }
          },
          /*
          				#	Fieldsets que agrupa	ordena os campos
          */

          fieldsets: [
            {
              legend: '<i class="icon-user"></i> Dados Gerais',
              fields: ["nome", "pessoaJuridica", "numeroDocumento"]
            }, {
              legend: '<i class="icon-phone"></i> Telefone(s)',
              fields: ['telefones']
            }, {
              legend: '<i class="icon-envelope"></i> E-mail(s)',
              fields: ['emails']
            }, {
              legend: '<i class="icon-pushpin"></i> Endereco(s)',
              fields: ['enderecos']
            }, {
              legend: '<i class="icon-edit"></i> Anotaçoes',
              fields: ['descricao']
            }
          ]
        });
      };

      ContatoEditorView.prototype.render = function() {
        this.$el.html(this.template({
          contato: this.model.toJSON()
        }));
        this.$el.modal({
          backdrop: true
        });
        this.$('.modal-body').html(this.form.render().el);
        return this;
      };

      ContatoEditorView.prototype.save = function() {
        console.log(this.form.commit());
        console.log(this.model);
        return this.model.save();
      };

      return ContatoEditorView;

    })(Backbone.View);
  });

}).call(this);
