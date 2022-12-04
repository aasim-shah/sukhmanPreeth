const mongoose = require('mongoose')

const articleSchema  = mongoose.Schema({
   title : String,
   user  : {type : mongoose.Schema.Types.ObjectId , ref : "user"},
   image : String,
   headLine : {type : String , required : true},
   subHeadLine : {type : String },
   authorName : {type : String , required : true},
   authorProfilPic : {type : String , required : true},
   content : {type : String , required : true},
   createdAt : {type : Date , default : Date.now()}

})


const articleModel = mongoose.model('article', articleSchema)
module.exports = articleModel;
