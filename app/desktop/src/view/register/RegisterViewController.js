Ext.define('fiado.view.register.RegisterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registerviewcontroller',

    onRegister: function () {
        var form = this.getView();

        /*if (form.validate()) {
            Ext.Msg.alert('Registration Complete', 'You have successfully registered');
        } else {
            Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
        }*/

        this.getView().destroy();
        Ext.Viewport.add([{ xtype: 'form-login' }])
    }

});