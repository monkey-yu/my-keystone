var keystone = require('keystone');
var User = keystone.list('User');

exports.create = {
  User: [
    {
      name: 'zhaoyu', 
      email: 'zhaoyu@keystone.com',
      password: 'zhaoyu01', 
    }, 
  ], 
};
