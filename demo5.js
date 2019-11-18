/*
var db=connect('company');
db.test.update({sex:1},{$set:{money:1000}},false,true);
var resultMessage=db.runCommand({getLastError:1});
printjson(resultMessage);
*/
/*
var db=connect('company');
var resultMessage=db.runCommand({ping:1});
printjson(resultMessage);*/
var db=connect('company');
var myModify={
    findAndModify:"test",
    query:{name:'MinJie'},
    update:{$set:{age:12}},
    fields:{age:'',name:''},//
    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
};
var ResultMessage=db.runCommand(myModify);
printjson(ResultMessage.value);