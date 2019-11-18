var db=connect('company');
var result=db.workmate.find({
    $where:'this.age>30'
},{name:1,age:1,_id:0});
while (result.hasNext()){
    printjson(result.next())
}