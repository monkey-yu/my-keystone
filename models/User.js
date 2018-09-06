var keystone = require('keystone');
var User = new keystone.List('User');

User.add({
  name: { type: String, required: true },  
  displayName: {type: String },
  email: { type: keystone.Field.Types.Email, unique: true },
  password: { type: keystone.Field.Types.Password },
});

User.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

User.defaultColumns = 'name,id, email'; 
User.register();