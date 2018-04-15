Ext.define('AM.store.User', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    // fields: ['name', 'email'],
    autoLoad: true,

    proxy: {
      type: 'ajax',
      api: {
          read: 'data/users.json',
          update: 'data/updateUsers.json'
      },
      reader: {
          type: 'json',
          root: 'users',
          successProperty: 'success'
      }
        // type: 'ajax',
        // url: 'data/users.json',
        // reader: {
        //     type: 'json',
        //     root: 'users',
        //     successProperty: 'success'
        // }
    }

    // data: [
    //     {name: 'Ed',    email: 'ed@sencha.com'},
    //     {name: 'Tommy', email: 'tommy@sencha.com'}
    // ]
});
