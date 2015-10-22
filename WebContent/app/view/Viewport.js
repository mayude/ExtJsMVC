/**
 * 主界面viewport.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('HT.view.Viewport',{ 
	extend : 'Ext.Viewport',
	layout : 'border',
	hideBorders : true,
	requires : [ 
	    'HT.view.main.HeaderView', 
	    'HT.view.main.MenuView',
		'HT.view.main.TabView', 
		'HT.view.main.FooterView' 
	],
	items : [ {
		region : 'north',
		xtype : 'headerview'
	}, {
		region : 'center',
		xtype : 'tabview'
	}, {
		region : 'south',
		xtype : 'footerview'
	}, {
		region : 'west',
		xtype : 'menuview'
	} ]
});