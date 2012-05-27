Ext.define('SSW.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {            
            toolbar: 'songbar', //The toolbar that contains the song title
            songViewer: 'songviewer',
            songList: 'songlist'
        },
        control: {
            'songList': {
                select: 'onSongListSelect'
            }
        },
        routes: {
            //:location': 'navigate
            '': 'navigateToStart',  // handles root Url
            'home': 'navigateToHome',
            'song/:songName': 'navigateToSong'
        },
    },

    init: function(){
        Ext.Logger.log('Main controller init');
    },
    
    launch: function(app) {
        Ext.Logger.log('Main controller launch');
        Ext.Viewport.on({
            orientationchange: this.onOrientationChange,
            scope: this
        });
        this.getSongViewer().addCls(Ext.Viewport.getOrientation());
    },
    
    onOrientationChange: function(viewport, orientation, width, height){
        if(orientation==="landscape"){
            this.getSongViewer().removeCls('portrait');
            this.getSongViewer().addCls('landscape');
            //alert(orientation);
        }
        else{
            this.getSongViewer().removeCls('landscape');
            this.getSongViewer().addCls('portrait');
            //alert(orientation);
        }
    },
    
    navigateToStart: function(){
        Ext.Logger.log('navigateToStart');
        this.redirectTo("home");
    },
    
    navigateToHome: function(){
        Ext.Logger.log('navigateToHome');
        this.getSongViewer().resetHtml();
    },
    
    navigateToSong: function(songName){
        Ext.Logger.log('navigateToSong');
        var store = this.getSongList().getStore();
        var index = store.findExact( "fileName", songName+".html");
        var record = store.getAt(index);
        if (!this.getSongList().isSelected(index)) {
            this.getSongList().select(index, false /*keepExisting*/, true /*suppressEvent*/);
        }
        this.setSongViewerContent(record.get('fileName'), record.get('title'));
    },
    
    /**
     * 
     * @param list
     * @param record
     */
    onSongListSelect: function(list, record){
        var fileName = record.get('fileName');
        //fileName = fileName.slice(0, -5); //take off the .html
        fileName = fileName.substr(0, fileName.lastIndexOf('.')) || fileName;
        this.redirectTo("song/"+fileName);
    },
    
    /**
     * Blah
     */
    setSongViewerContent: function(fileName, title){
        var me = this;
        if (fileName) {
            //var fileName = record.get('fileName');
            me.getSongViewer().setMasked({xtpye:'loadmask', message : 'Loading...'});
            Ext.Ajax.request({
                url: 'resources/data/songs/' + fileName,
                success: function(response){
                    var text = response.responseText;
                    if (!me.getSongViewer().getIsChordMode())
                        text = text.replace(/ *- */g,""); //Get rid of the hyphens
                    me.getSongViewer().setData({'content': text});
                    me.getToolbar().setTitle(title);
                    me.getSongViewer().setMasked(false);
                }
            });
        }
//        else
//        {
//            record = parseRecord(record);
//            page.update(record.data);
//            page.getEl().unmask();
//            toolbar.setTitle(record.get('title'));
//            viewport.doLayout();
//            viewport.showingPage = true;
//            viewport.showingSplash = false;
//            if (app.getProfile()=='portraitPhone') {
//                backButton.show();
//            }
//        }
    },
    
    /**
     * 
     * @param name
     */
    showUserById: function(name) {
        MyApp.model.User.load(id, {
            scope: this,
            success: function(user) {
                this.getMain().add({
                    xtype: 'userprofile',
                    user: user
                });
            }
        });
    }
});