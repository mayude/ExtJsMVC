/**
 * Created by myd on 15/10/21.
 */
Ext.define('HT.store.base.StaffStore',{
    extend:'Ext.data.Store',
    requires:'HT.model.base.StaffModel',
    model:'HT.model.base.StaffModel',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'/ExtJsMVC/staff/list.action',
        reader:{
            type:'json',
            rootProperty:'rows',
            successProperty: 'success'
        }
    }
});