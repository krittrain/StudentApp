Ext.application({
    name: 'StudentApp',
    requires: [
        // 'StudentApp.view.main.Main'
    ],
    // extend:'StudentApp.Application',
    models: ['StudentApp.model.Customers',
     'StudentApp.view.person.PersonViewModel'],
    stores: ['StudentApp.store.Customers'],
    controllers: [
        'StudentApp.controller.AppController',
        'StudentApp.controller.LoginController',
        'StudentApp.controller.CustomerController'
    ],
    views: [
        'StudentApp.view.Main',
        'StudentApp.view.Login',
        'StudentApp.view.Customers',
        'StudentApp.view.person.PersonView',
        'StudentApp.view.Viewport'],

    launch: function () {

        //   'StudentApp.view.Login'
    },

    defaultToken: '/',
    enableRouter: true,
    autoCreateViewport: true,

    // mainView: 'StudentApp.view.Login',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
    routes: {
        '/': {
            action: 'goLogin',
            before: 'beforeLogin',
        },
        'main': {
            action: 'goMain',
            before: 'beforeMain',
        },
        'customers': {
            action: 'goCustomer',
            before: 'beforeCustomer',
        },
        'person': {
            action: 'goPerson',
            before: 'beforePerson',
        }
    },
    onUnmatchedRoute: function (hash) {
        
    },
    beforeLogin: function (action) {
        Ext.log(">> beforeLogin -- here check permissions");
        action.resume();
    },
    goLogin: function () {
        Ext.log(">> goLogin");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        menu.setHidden(true);
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('StudentApp.view.Login');
        target.add(view);
    },
    beforeMain: function (action) {
        Ext.log(">> beforeMain -- here check permissions");
        action.resume();
    },
    goMain: function () {
        Ext.log(">> goMain");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        menu.setHidden(false);
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('StudentApp.view.Main');
        target.add(view);
    },


    beforeCustomer: function (action) {
        Ext.log(">> beforeLogin -- here check permissions");
        action.resume();
    },
    goCustomer: function () {
        Ext.log(">> goLogin");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        menu.setHidden(true);
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('StudentApp.view.Customers');
        target.add(view);
    },


    // -----

    beforePerson: function (action) {
        Ext.log(">> beforePerson -- here check permissions");
        action.resume();
    },
    goPerson: function () {
        Ext.log(">> goPerson");
        viewport = Ext.getCmp('viewport');
        menu = viewport.down('#main-nav-toolbar');
        menu.setHidden(true);
        target = viewport.down('#viewport-target');
        target.removeAll();
        view = Ext.create('StudentApp.view.person.PersonView');
        target.add(view);
    },

});