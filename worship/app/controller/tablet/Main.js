Ext.define('SSW.controller.tablet.Main', {
    extend: 'SSW.controller.Main',

    config: {
        refs: {
            showNavBtn: '[itemId=showNavBtn]', // The button used to show navigation.
            hideNavBtn: '[itemId=hideNavBtn]', // The button used to hide navigation.
            navContainer: '[itemId=navholder]' // The main application navigation container.
        },
        control: {
            'showNavBtn': {
                tap: 'toggleNav'
            },
            'hideNavBtn': {
                tap: 'toggleNav'
            }
        } 
    },
    
    init: function(){
        Ext.Logger.log('Tablet controller init');
        this.callParent(arguments);
    },
    
    launch: function(app) {
        Ext.Logger.log('Tablet controller launch');
        this.callParent(arguments);
    },
    
    /**
     * Show/Hide the Navigation bar
     * @param {Ext.Button} btn The button tapped.
     * @param {Ext.EventObject} e The event object.
     */
    toggleNav: function(btn, e) {
        var me = this;
        try {
            var container = this.getNavContainer();
            if (container.isHidden()) {
                me.getShowNavBtn().hide();
                me.getHideNavBtn().show();
                container.show();
            } else {
                container.hide({
                    after: function() {
                        me.getHideNavBtn().hide();
                        me.getShowNavBtn().show();
                    }
                });
            }
        } catch(e) {
            Ext.Logger.error('[ ' + Ext.getDisplayName(arguments.callee) + '] : ' + e.message);
        }
    },
});