/**
 * Stores all of the songs. Used by both SongList and SongViewer
 */
Ext.define('SSW.store.Songs', {
    extend: 'Ext.data.Store',
    requires: [
        'SSW.model.Song'
    ],

    config: {
        autoLoad: false,
        model: 'SSW.model.Song',
        storeId: 'SongsStore',
        remoteFilter: false,
//        groupField: 'title',
        grouper: {
            groupFn: function(record) {
                return record.get('title').substr(0, 1);
            },
            sortProperty: 'title'
        },
        proxy: {
            type: 'rest',
            url: 'resources/data/songs.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        autoLoad: true
    }
});