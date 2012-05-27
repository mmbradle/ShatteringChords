/**
 * Represents metadata for an individual song
 */
Ext.define('SSW.model.Song', {
    extend: 'Ext.data.Model',
//    alias: 'model.SongModel',
    config: {
        fields: [
                 {name:'title', type:'string'},
                 {name:'html', type:'string'},
                 {name:'fileName', type:'string'}
       ]
    }
});
