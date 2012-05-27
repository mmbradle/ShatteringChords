//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.require('Ext.data.proxy.Rest');
Ext.require('Ext.Img');

function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
};

app = Ext.application({
    name: 'SSW',

    requires: [
        'Ext.MessageBox'
    ],

    //controllers: ["Main"],
    profiles: ['Phone', 'Tablet'],
    //stores: ['Songs'],
    //views: [],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    init: function() {
        Ext.Logger.log('init');
        Ext.Logger.setConfig( {minPriority: "info"});
    },
    
    launch: function() {
        Ext.Logger.info('Application Launch Function');
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //Ext.Viewport.add(Ext.create('SSW.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
