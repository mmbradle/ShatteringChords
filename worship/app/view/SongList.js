Ext.define('SSW.view.SongList', {
    extend: 'Ext.List',
    alias: 'widget.songlist',
    requires: ['SSW.store.Songs'],
    config: {
        store: Ext.create('SSW.store.Songs'),
        itemTpl: '<div class="songtitle">{title}</div>',
        allowDeselect: false,
        grouped: false,
        indexBar: false
//        singleSelect: true
    }
});