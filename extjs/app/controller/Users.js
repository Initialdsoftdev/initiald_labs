Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    // init: function() {
    //     console.log('Initialized Users! This happens before the Application launch function is called');
    // }

    views: [
        'user.List',
        'user.Edit'
    ],
    stores: [
        'User'
    ],
    models: [
      'User'
    ],

    init: function() {
        this.control({
            // 'userlist': {
            //       itemclick: this.editUser
            // },
            'viewport > userlist': {
              itemclick: this.editUser
                  // itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },
    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);

        // console.log('Single clicked on ' + record.get('name'));
        // alert("cellValue");
    },
    editUser2: function(grid, record, item, index, e, eOpts) {
        // console.log('Double clicked on ' + record.get('name'));
        alert("cellValue");
    },
  //   submit: function(value) {
  //   data = {"id": 100, "tdt": "rTk", "val": "445"}   // test data
  //   Ext.Ajax.request({
  //       url: 'http://test.myloc.com/providerSvc/dbproxy.php',
  //       params: {
  //         'do':'insert',
  //         'object': 'stk',
  //         'values': data
  //       },
  //       success: function(response){
  //           alert(response.responseText);
  //       }
  //   })
  // },
    updateUser: function(button) {
      // var store = this.getUsersStore();
      // var a = this.getUsersStore().sync(
      //   {
      //       success: function (batch, eOpts) {
      //           Ext.Msg.alert('Status', 'Changes saved successfully.');
      //       },
      //       failure: function (batch, eOpts) {
      //           Ext.Msg.alert('Tolong Edit Per Baris');
      //       }
      //   }
      // );
      // console.log(a);
      var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();

      record.set(values);
      win.close();
      // synchronize the store after editing the record
      // this.getUsersStore().sync();
        // console.log('clicked the Save button');

    },

    onPanelRendered: function() {
        //console.log('The panel was rendered');
    }
});
