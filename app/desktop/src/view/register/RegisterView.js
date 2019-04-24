Ext.define('fiado.view.register.RegisterView', {
    extend: 'Ext.Container',
    //extend: 'Ext.form.Panel',
    xtype: 'form-register',
    controller: 'registerviewcontroller',
    title: 'Registro',

    requires: [
        'Ext.layout.VBox',
        'Ext.Panel'
        //'fiado.model.State',
        //'fiado.store.States'
    ],

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
        margin: 40,
        height: 580,
        width: 700,
        title: 'Cadastro',
        scrollable: 'y',

        items: [{
            xtype: 'fieldset',
            margin: 10,
            title: 'Dados do usuário',
            defaultType: 'passwordfield',
            defaults: {
                required: true
            },
            items: [
                { xtype: 'emailfield', label: 'E-mail', name: 'email', allowBlank: false, validators: 'email' },
                { label: 'Senha', name: 'pass' },
                { label: 'Repetir senha', name: 'pass_verify' }
            ]
        }, {
            xtype: 'fieldset',
            title: 'Informações de contato',
            margin: 10,
            defaultType: 'textfield',            
            items: [{
                label: 'CPF',
                name: 'cpf'
            }, {
                label: 'CNPJ',
                name: 'cnpj'
            }, {
                label: 'Nome',
                name: 'nome'
            }/*, {
                xtype: 'combobox',
                label: 'State',
                name: 'state',
                valueField: 'abbr',
                displayField: 'state',
                forceSelection: true,
                queryMode: 'local',
                clearable: true,
                placeholder: 'Select a state...',
                store: {
                    type: 'states'
                }
            }, {
                xtype: 'datepickerfield',
                label: 'Date of Birth',
                name: 'dob',
                maxValue: new Date()
            }, {
                xtype: 'selectfield',
                label: 'Skills',
                name: 'skills',
                multiSelect: true,
                autoSelect: false,
                clearable: true,
                options: [
                    'ExtJS',
                    'Javascript',
                    'CSS',
                    'Git',
                    'Java',
                    'PHP',
                    'COBOL',
                    'Node.js',
                    'JSON',
                    'HTML5',
                    'RIA',
                    'OOP',
                    'Scrum',
                    'REST',
                    'MVC'
                ],
                chipView: {
                    plugins: {
                        dataviewtip: {
                            align: 'tl-br',
                            constrainToView: false,
                            delegate: '.x-close-el',
                            allowOver: true,
                            anchor: false,
                            anchorToTarget: false,
                            bind: '{record}',
                            tpl: 'Remove skill {text}'
                        }
                    }
                }
            }, {
                xtype: 'filefield',
                label: 'Profile pic',
                name: 'pic'
            }*/]
            }],
        buttons: [{
            text: 'Cadastrar',
            handler: 'onRegister'
        }]
    }],

    
});