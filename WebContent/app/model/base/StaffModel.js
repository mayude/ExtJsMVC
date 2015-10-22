/**
 * Created by myd on 15/10/21.
 */

Ext.define('HT.model.base.StaffModel', {
    extend: 'Ext.data.Model',
    //requires: [
    //    'Ext.data.reader.Json'
    //],

    fields: [
        {name: 'staff_pk', type: 'string'},
        {name: 'staff_number', type: 'string'},
        {name: 'staff_name', type: 'string'},
        {name: 'staff_password', type: 'string'},
        {name: 'fk_roles_pk', type: 'string'},
        {name: 'staff_sex', type: 'string'},
        {name: 'staff_birthday', type: 'string'},
        {name: 'fk_station_pk', type: 'string'},
        {name: 'staff_phone', type: 'string'},
        {name: 'staff_email', type: 'string'},
        {name: 'staff_intime', type: 'string'}

    ]


});