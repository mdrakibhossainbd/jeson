const user={id:123,
name:'rakib',
phone:01796004975,
home:'1no bania nogor'};

console.log(user);


//convert object to string
const userToString=JSON.stringify(user);
console.log(userToString);

//convert string to object

const stringToObject=JSON.parse(userToString);
console.log(stringToObject);

