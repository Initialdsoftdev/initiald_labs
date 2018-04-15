// Ext.application({
//     name: 'HelloExt',
//     launch: function() {
//       // Ext.require('Ext.container.Viewport');
//         Ext.create('Ext.container.Viewport', {
//             layout: 'fit',
//             items: [
//                 {
//                     title: 'Hello Ext',
//                     html : 'Hello! Welcome to Ext JS.'
//                 }
//             ]
//         });
//     }
// });

//learn mvc
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items:{
                xtype:'userlist'
            }
            // items: [
            //     {
            //         xtype: 'panel',
            //         title: 'Users',
            //         html : 'List of users will go here'
            //     }
            // ]
        });
    }
});
//end learn mvc

// Ext.onReady(function () {
//     Ext.create("Ext.panel.Panel", {
//         title : 'Test',
//         width : '100%',
//         height: 500,
//         //border : false,
//         renderTo : Ext.getBody()
//     })
// })
/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
