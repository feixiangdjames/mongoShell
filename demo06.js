/*
var db=connect('company');
db.test.find(
    {"skill.skillOne": "HTML+CSS"},
    {name: 1, _id:0}
);
*/
var db=connect('company');
var myModify={
    findAndModify:"test",
    query:{_id:'5dd155971f860d38822cb959'},
    update:{$set:{age:14}},
    fields:{age:'',name:''},//
    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
};
var ResultMessage=db.runCommand(myModify);
printjson(ResultMessage);