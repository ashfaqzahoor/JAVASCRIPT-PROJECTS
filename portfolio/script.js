const user={
    name:"ashafq",
    age:20
}
console.log(user.age);

user.adhaar=1234;
console.log(user)

//delete user.age;

const user2=user;

user2.age=30;
console.log(user);

console.log(Object.keys(user))


for(let keys in user){
    console.log(keys,user[keys])
}

const{name,age}=user;
console.log(name,age)

