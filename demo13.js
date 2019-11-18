 var db=connect('company');
db.info.drop();
 /*db.info.drop.Index(db.info.getIndexes()[1].name);*/
db.info.insert({contextInfo:"我是斯斯，我有一个家，我们在keyrock"});
/*db.info.insert({contextInfo:"我是萌萌，我有一个家，我们在keyrock\""});
db.info.insert({contextInfo:"我是王成龙，我有一个家，我们在keyrock"})*/
/*
db.info.ensureIndex({contextInfo:'text'});*/
/*db.info.find({$text:{$search:"programmer -drink"}});*/

 db.collection.createIndex();
 db.createUser({
     user:"james",
     pwd:"123456",
     customData:{
         name:"James",
         email:"feixiangdjames@gamil.com",
         age:18
     },
     roles:[{
         role:"readWrite",
         db:"company"
     },
     'read']
 });

 db.auth("james","123456");