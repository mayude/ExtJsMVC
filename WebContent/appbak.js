/**
 * 主程序application.
 * @author 奚志敏
 * @version 1.0.0, 2015-07-07
 */
Ext.Loader.setConfig({enabled:true});//必须加这句，否则会报错
Ext.application({
	requires: ['Ext.container.Viewport'],
	name: 'WMS',
	appFolder: 'app',
	autoCreateViewport: true,
	controllers: [
	    'MainCtl',
	    'MenuCtl'
	]
});