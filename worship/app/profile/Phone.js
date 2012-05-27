Ext.define('SSW.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
        views: ['Main'],
        controllers: ['Main']
    },

    isActive: function() {
//        return true;
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.Logger.log('Phone-Profile Specific Launch Function');
        var main = Ext.create('SSW.view.phone.Main');
        Ext.Viewport.add(main);
    }
});