var keystone = require('keystone');
var Report = new keystone.List('Report');
var Types = keystone.Field.Types;

Report.add({
    name: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true},
    content:{
        title1: {type: String },
        desc1: {type: String }, 
        title2: {type: String },
        desc2: {type: String }, 
        title3: {type: String },
        desc3: {type: String },
    },
    conclusion:{type:Types.Select, options:['检测到可以解释患者表型的(疑似)致病变异','检测到可以解释患者表型的致病变异','未检测到可以解释患者表型的致病变异']},
    result:{
        title:{type: String },
        table1_title:{type: String },
        table1_desc:{type: String },
        table1:{type: String}
    }
  });
  
  Report.schema.virtual('canAccessKeystone').get(function () {
    return true;
  });
  
  Report.defaultColumns = 'name,state,author,publishedDate';
  Report.register();