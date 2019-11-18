var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'JavaScript',
        SkillThree:'PHP'
    },
    regeditTime:new Date()
}
var workmate2={
    name:'ShengLei',
    age:30,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'J2EE',
        SkillThree:'PPT'
    },
    regeditTime:new Date()
}
var workmate3={
    name:'MinJie',
    age:20,
    sex:0,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
};
var db=connect('company');
var personArray=[workmate1,workmate2,workmate3];
/*db.test.insert(personArray);*/
db.test.update({name:'MinJie'},workmate3);
print('[SUCCESS]:the data was updated successfully.');