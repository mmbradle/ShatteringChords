Ext.define('SSW.controller.phone.Main', {
    extend: 'SSW.controller.Main',

    config: {
        refs: {
            deck: '[itemId=deck]',
            backBtn: '[itemId=hideNavBtn]' // The button used to hide navigation.
        },
        control: {
            'backBtn': {
                tap: 'goBack'
            }
        }
    },

    init: function(){
        Ext.Logger.log('Phone controller init');
        this.callParent(arguments);
    },
    
    launch: function(app) {
        Ext.Logger.log('Phone controller launch');
        this.callParent(arguments);
    },

    /**
     * @override
     * @param list
     * @param record
     */
    onSongListSelect: function(list, record){
        //the control for this is in the parent
        this.getDeck().setActiveItem(1);
//        this.getDeck().animateActiveItem(1, {type: 'slide', direction: 'left'});
        this.callParent(arguments);
    },
    
    /**
     * 
     * @param btn
     * @param e
     */
    goBack: function(btn, e) {
//        this.getDeck().animateActiveItem(0, {type: 'slide', direction: 'right'});
        this.getDeck().setActiveItem(0);
    }
});