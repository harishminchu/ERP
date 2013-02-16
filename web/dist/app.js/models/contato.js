(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define(["backbone","settings","pageable","models/telefone","models/email","models/endereco","collections/telefones","collections/emails","collections/enderecos"],function(e,n,r,i,s,o,u,a,f){var l;return l=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.idAttribute="id",n.prototype.schema={nome:{type:"Text",title:"Nome"},pessoaJurica:{title:"Espécie",type:"Radio",options:[{val:!0,label:"Pessoa Jurídica"},{val:!1,label:"Pessoa Física"}]},numeroDocumeno:{type:"Number",title:"CPF/CNPJ"},telefones:{type:"List",itemType:"InlineNestedModel",model:i},emails:{type:"List",itemType:"InlineNestedModel",model:s},enderecos:{type:"List",itemType:"InlineNestedModel",model:o},descricao:{type:"TextArea",title:"Anotações"}},n.prototype.parse=function(e){return e.data!=null&&(e=e.data),this.telefones=new u([],{contato:this}),this.enderecos=new f([],{contato:this}),this.emails=new a([],{contato:this}),e.telefones!=null&&e.telefones.length&&this.telefones.reset(e.telefones),e.enderecos!=null&&e.enderecos.length&&this.enderecos.reset(e.enderecos),e.emails!=null&&e.emails.length&&this.emails.reset(e.emails),e},n.prototype.save=function(e,t){return n.__super__.save.call(this,e,t)},n}(e.Model)})}).call(this);