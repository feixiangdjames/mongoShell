var userName="chenglong"; //声明一个登录名
var timeStamp=Date.parse(new Date());//声明登录时间戳
var jsonDdatabase={"loginUnser":userName,"loginTime":timeStamp};//JSON字符串
var db=connect('log');//链接数据库
db.login.insert(jsonDdatabase)//插入数据
print('[demo]log print success');