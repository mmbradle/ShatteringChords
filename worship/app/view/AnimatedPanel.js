Ext.define('SSW.view.AnimatedPanel', {
    extend: 'Ext.Container',
    alias: 'widget.animatedpanel',
    requires: ['Ext.Anim'],

    show: function(cfg) {
        var me = this;
        me.setHidden(false);
        Ext.Anim.run(me, 'slide', {
            out: false,
            direction: 'right',
            duration: 600,
            easing: 'ease-in-out',
            after: function() {
                if (cfg && cfg.after) {
                    cfg.after.call(me);
                }
            }
        });
    },

    hide: function(cfg) {
        var me = this;
        Ext.Anim.run(me, 'slide', {
            out: true,
            duration: 600,
            easing: 'ease-in-out',
            after: function() {
                me.setHidden(true);
                if (cfg && cfg.after) {
                    cfg.after.call(me);
                }
            }
        });
    }
});