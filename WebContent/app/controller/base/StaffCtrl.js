/**
 * Created by myd on 15/10/21.
 */
Ext.define('HT.controller.base.StaffCtrl',{
    extend:'Ext.app.Controller',
    stores:['StaffStore@HT.store.base'],
    models:['HT.model.base.StaffModel'],
    views: ['HT.view.base.StaffView'],

    init:function(){
      this.control({
          'viewport > staffview': {
              //itemdblclick: this.editUser
          },

          'useredit button[action=save]': {
              //click: this.updateUser
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