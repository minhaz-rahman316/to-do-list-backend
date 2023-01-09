const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
FirstName : {type:String},
LastName : {type:String},
EmailAddress : {type:String,unique:true},
PhoneNumber : {type:String,unique:true},
UserName : {type:String,unique:true},
Password : {type:String},
},
{ versionKey: false });


const profileModel = mongoose.model('profile', ProfileSchema);
module.exports = profileModel;