var startTime=(new Date()).getTime();
var db=connect('company');
var rs=db.randomInfo.find({userName:"vva2hw9lb3"});
rs.forEach(rs=>{
    printjson(rs)
});
var runTime=new Date().getTime()-startTime;
print('[SUCCESS] This run time is:'+runTime+"ms");
//建立索引
/*
db.randomInfo.ensureIndex({userName:1});*/
