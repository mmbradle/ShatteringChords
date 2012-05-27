Ext.define('SSW.view.SongBar', {
    extend: 'Ext.Toolbar',
    alias: 'widget.songbar',
    config: {
        docked: 'top',
        title: 'Worship Chords',
        items: [{
                xtype: 'image',
                itemId: 'showNavBtn',
                docked: 'left',
                hidden: true,
                cls: [
                    'toggle-nav-button',
                    'show'
                ],
                html: '<span class="toggle-nav-icon"></span>'
            },
            {
                xtype: 'image',
                itemId: 'hideNavBtn',
                docked: 'left',
                cls: [
                    'toggle-nav-button',
                    'hide'
                ],
                html: '<span class="toggle-nav-icon"></span>'
            },
            {xtype: 'spacer'},                
            {
                xtype: 'button', iconCls: 'minus2', iconMask: true,
                listeners: {tap: function(me) {me.up('songviewer').resizeText(-1);}}
            },                
            {
                xtype: 'button', iconCls: 'add1', iconMask: true,
                listeners: {tap: function(me) {me.up('songviewer').resizeText(1);}}
            },               
            {xtype: 'button', iconCls: 'info', iconMask: true}                
        ]
    }
});