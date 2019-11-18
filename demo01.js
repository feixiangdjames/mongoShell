var startTime=(new Date()).getTime();
var db=connect('log');
var tempArray=[];
for(let i=0;i<1000;i++){
    tempArray.push({num:1})
}
db.test2.insert(tempArray);
/*for(let i=0;i<1000;i++){
    db.test.insert({num:i})
}*/
var runTime=(new Date()).getTime()-startTime;
print('[demo] run '+runTime+'ms');