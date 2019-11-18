var db=connect('company');
db.test.update({name:'MinJie'},{$set:{"age":35}});
print('[updtate]:The data was updated successfully');