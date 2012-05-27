Ext.define('SSW.view.tablet.Main', {
//    extend: 'SSW.view.Main',
    extend: 'Ext.Container',
    requires: [
        'SSW.view.SongList',
        'SSW.view.SongViewer',
        'SSW.view.AnimatedPanel'
    ],

//    config: {
//        title: 'Tablet-specific version'
//    }
    config: {
        layout: 'fit',
        items: [{
            xtype: 'animatedpanel',
            scrollable: false,
            itemId: 'navholder',
            hidden: false,
            layout: 'fit',
            docked: 'left',
            cls: 'nav-list',
            items: [
                {
                    xtype: 'songlist'
                }
            ]
        }, {
            xtype: 'songviewer'
        }]
    }
});
