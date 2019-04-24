Ext.define('fiado.view.login.LoginView', {
    extend: 'Ext.Container',
    xtype: 'form-login',
    controller: 'loginviewcontroller',    

    requires: [
        'Ext.layout.VBox',
        'Ext.Panel'
    ],

    defaults: {
        bodyPadding: 20,
    },

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'stretch'
    },

    items: [{
        layout: {
            type: 'vbox',
            //pack: 'center',
            //align: 'stretch'
        },
        autoSize: true,
        xtype: 'panel',
        shadow: 'true',
        margin: 50,
        height: 300,
        width: 500,
        title: 'Entrar',

        items: [{
            xtype: 'textfield',
            allowBlank: false,
            required: true,
            label: 'E-mail',
            name: 'user',
            placeholder: 'E-mail'
        }, {
            xtype: 'passwordfield',
            allowBlank: false,
            required: true,
            label: 'Senha',
            name: 'pass',
            placeholder: 'Senha'
        }, {
            xtype: 'checkbox',
            boxLabel: 'Lembrar-me',
            name: 'remember'
        }],

        buttons: [{
                text: 'Login',
                handler: 'onLogin'
            },{
                text: 'Cadastre-se',
                handler: 'onCadastre'
        }]
    }]
});