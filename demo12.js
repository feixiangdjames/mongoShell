var startTime=new Date().getTime();
var db=connect('company');
var rs=db.randomInfo.find({userName:'r1ih6jcc',random0:296552}).hint({random0: 1});
rs.forEach(
    rs=>{
        printjson(rs);
    }
);

var runTime=new Date().getTime()-startTime;
print('[demo]---'+runTime+'ms');