Ext.define('fiado.Application', {
	extend: 'Ext.app.Application',
	name: 'fiado',
	requires: ['fiado.*'],
	//defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
        this.removeSplash()

        var loggedIn;
        
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        var whichView = loggedIn ? 'mainview' : 'form-login'
        Ext.Viewport.add([{ xtype: whichView }])
    },

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
