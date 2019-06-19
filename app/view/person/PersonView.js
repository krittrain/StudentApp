Ext.define('StudentApp.view.person.PersonView', {
    extend: 'Ext.panel.Panel',
    layout: 'form',
    // Always use this form when defining a view class. This
    // allows the creator of the component to pass data without
    // erasing the ViewModel type that we want.+
    // listeners: {
    //     render: function () {
    //         console.log("render is called")
    //     }
    // },
    // onRender: function () {

    //     // console.log("onrender is called ",this.callParent())
    // },
    onRemoved:function () {
        console.log("onrender is called onRemoved ")
    },
    onDestroy:function () {
        console.log("onrender is called onDestroy ")
    },
    viewModel: {
        type: 'person'  // references alias "viewmodel.person"
    },

    bind: {
        title: 'Hello {name}'
    },

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        bind: '{firstName}'
    }, {
        fieldLabel: 'Last Name',
        bind: '{lastName}'
    }, {
        fieldLabel: 'Last Name2',
        bind: '{lastName}'
    }, {
        xtype: 'button',
        text: 'Submit',
        bind: {
            hidden: '{!name}'
        }
    }]
});