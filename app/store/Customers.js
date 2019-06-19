Ext.define('StudentApp.store.Customers',
    {
        extend: 'Ext.data.Store',
        model: 'StudentApp.model.Customers',
        
        autoLoad: false,
        storeId: 'Customers'
    });