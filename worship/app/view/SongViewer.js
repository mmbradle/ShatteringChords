Ext.define('SSW.view.SongViewer', {
    extend: 'Ext.Panel',
    alias: 'widget.songviewer',
    requires: ['SSW.view.SongBar'],

    config:{
        isChordMode: !Ext.os.is.Phone,
        layout: {
            type: 'vbox',
            align: 'center'
        },
        width: '100%',
        cls: 'page',
        styleHtmlContent: false,
        tpl: '{content}',
        scrollable: {
            direction: 'vertical'
        },
        items: [{
            xtype: 'songbar'
        }],
        listeners: {
            initialize: function(me) {
                me.resetHtml();
                if(Ext.os.is.Phone)
                    this.addCls('phone-style');
                else
                    this.addCls('tablet-style');
            }
        }        

//        masked: {
//            xtype: 'loadmask',
//            hidden: true,
//            message: 'Loading...'
//        }
    },
    
    /**
     * Serves as the apps homepage
     */
    resetHtml: function(){
        var text = '<img class="photo" src="resources/images/cover.jpg">';
        this.setData({'content': text});
//        this.setHtml('<img class="photo" src="resources/images/cover.jpg">');
    },
    resizeText: function (multiplier) {
        if (!this._fontSize) {
            this._fontSize = "1.0em";
        }
        this._fontSize = parseFloat(this._fontSize) + (multiplier * 0.2) + "em";
        this.setStyle('font-size:'+this._fontSize);
    },
//    incFont: function(){
//        this.setFontSize(this.getFontSize() + 1);
//        this.setStyle('font-size:'+this.getFontSize()+'px');
//    },
//    decFont: function(){
//        this.setFontSize(this.getFontSize() - 1);
//        this.setStyle('font-size:'+this.getFontSize()+'px');
//    }
});