Ext.define('HT.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users@HT.store'
        //'HT.store.Users'
    ],

    models: [
        //'User@HT.model'
        'HT.model.User'
    ],

    views: [
        //'Edit@HT.view.user',
        //'List@HT.view.user'
        'HT.view.user.Edit',
        'HT.view.user.List'
    ],

    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var edit = Ext.create('HT.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});