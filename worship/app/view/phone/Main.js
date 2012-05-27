Ext.define('SSW.view.phone.Main', {
    extend: 'Ext.Container',
    requires: [
       'SSW.view.SongList',
       'SSW.view.SongViewer'
   ],

    config: {
        layout: 'card',
        itemId: 'deck',
        items: [
            {
                xtype: 'songlist'
            },
            {
                xtype: 'songviewer'
            }
        ]
    }
});