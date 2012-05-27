Ext.define('SSW.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['Main'],
        controllers: ['Main']
    },

    isActive: function() {
        return !Ext.os.is.Phone;
    },

    launch: function() {
        Ext.Logger.log('Tablet-Profile Specific Launch Function');
        var main = Ext.create('SSW.view.tablet.Main');
        Ext.Viewport.add(main);
    }
});