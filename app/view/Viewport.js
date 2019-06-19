Ext.define('StudentApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'Ext.toolbar.Toolbar',
        'Ext.panel.Panel'
    ],

    id: 'viewport',
    layout: 'border',
    items: [{
        xtype: 'toolbar',
        region: 'north',
        itemId: 'main-nav-toolbar',
        defaults: {
            scale: 'large',
            padding: '0 20',
            toggleGroup: 'main-nav',
            allowDepress: false
        },
        items: [{
            text: 'Home',
            itemId: 'home',
            pressed: true
        }, {
            text: 'Users',
            itemId: 'users',
            handler: function () {
              
                Ext.History.add('#customers')
            }
        }, {
            text: 'Settings',
            itemId: 'settings'
        },
        {
            text: 'Person.....',
            itemId: 'person',
            handler: function () {
                alert("persomn")
                Ext.History.add('#person')
            }
        }]
    }, {
        xtype: 'container',
        itemId: 'viewport-target',
        region: 'center',
        layout: 'fit'
    }]
});
