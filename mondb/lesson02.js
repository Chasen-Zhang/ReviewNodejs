// 链接数据库
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/company');

let db = mongoose.connection;

db.on('error',()=>{
    console.log("connected failed!");
});

db.once('open', function() {
    console.log(" we're connected!");
});

db.once('close', function() {
    console.log("connecte close!");
});
//创建schema（模式对象）
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "男"
    },
    chat: String
});

//创建模型Model 对象
let personModel = mongoose.model("person", personSchema);
//查 所有
/*personModel.find({}, (err,docs)=>{
    if(!err){
        console.log(docs);
    }else{
        console.log(err);
    }
});*/

//查 名字为李德
/*
personModel.find({name:"李德"},{name:1}, (err,docs)=>{
    if(!err){
        console.log(docs);
    }else{
        console.log(err);
    }
});
*/
/*
personModel.find({},"name",{skip:0,limit:2} ,(err,docs)=>{
    if(!err){
        console.log(docs);
    }else{
        console.log(err);
    }
});
*/
//改
/*personModel.update({name:"李德"},{$set:{age:2}}, {multi:true},err=>{
    if(!err){
        console.log("修改成功");
    }else{
        console.log(err);
    }
});*/
//删
/*personModel.remove({name:"那英"}, (err)=>{

    if(!err){
        console.log("删除成功");
    }else{
        console.log(err);
    }
});*/

//统计文档个数
/*console.log(mongoose);
personModel.count({}, (err, count)=>{
    if(!err){
        console.log(count);
    }
});*/


let person = new personModel({
    name: "宋小宝",
    age: 40,
    chat: "我是宋小宝"
});
person.save((err,product)=>{
    if(err){
        return console.error(err);
    }
    console.log(product); //1
});

