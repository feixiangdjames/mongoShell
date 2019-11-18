let getVal1 = (function () {
    function GetRandomNum(min,max){
        let range = max-min; //得到随机数区间
        let rand = Math.random(); //得到随机值
        return (min + Math.round(rand *range)); //最小值+随机数取整
    }
//console.log(GetRandomNum(10000,99999));
//生成随机用户名
    function GetRadomUserName(min,max){
        let tempStringArray= "123456789qwertyuiopasdfghjklzxcvbnm".split("");//构造生成时的字母库数组
        let outPuttext = ""; //最后输出的变量
//进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
        for(let i=1 ;i<GetRandomNum(min,max);i++){
//随机抽取字母，拼装成需要的用户名
            outPuttext=outPuttext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
        }
        return outPuttext;
    }

    return {
        GetRandomNum,
        GetRadomUserName,
    }
})();
var startTime=(new Date()).getTime();
var db=connect('company');
db.randomInfo.drop();
var tempInfo=[];
for(var i=0;i<2000000;i++){
    var obj={
        userName:getVal1.GetRadomUserName(7,16),registerTime:new Date()
    };
    for(var m=0;m<10;m++){obj['random'+m]=getVal1.GetRandomNum(10000,999999);}
    tempInfo.push(obj);
}
db.randomInfo.insert(tempInfo);
var endTime=(new Date()).getTime()-startTime;
print("[demo]---------"+endTime+"ms");
