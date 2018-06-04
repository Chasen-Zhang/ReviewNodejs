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

//插入文档

// personModel.create({
//     name: "谢霆锋",
//     age: 40,
//     chat: "xtingfenghahha"
// },(err)=>{
//     if(!err){
//         console.log("插入成功");
//     }else{
//         throw err;
//     }
// });
//
// personModel.create({
//     name: "王菲",
//     age: 48,
//     chat: "红豆",
//     sex:"女"
// },(err)=>{
//     if(!err){
//         console.log("插入成功");
//     }else{
//         throw err;
//     }
// });

//增删改查

//增
/*personModel.create([
    { name: "胡可可",age: 18,chat: "可可公主",sex:"女" },
    { name: "刘德寰",age: 58,chat: "华仔"},
    { name: "那英",age: 50,chat: "我是那英",sex:"女" },
    { name: "李德",age: 38,chat: "jay" }
],(err)=>{
    if(!err){
        console.log("插入成功");
    }else{
        throw err;
    }
});*/

//查
personModel.find({name:"王菲"}, (err,docs)=>{
    if(!err){
        console.log(err);
    }else{
        console.log(docs);
    }
});




