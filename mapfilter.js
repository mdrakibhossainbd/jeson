const students=[
    {id:41,name:'rakib'},
    {id:31,name:'manna'},
    {id:21,name:'purnima'},
    {id:71,name:'dipjol'}
];

const names=students.map(s=>s.name);
console.log(names);
const id=students.map(s=>s.id);
console.log(id);
const namefilter=students.filter(k=>k.id>31)
console.log(namefilter);
