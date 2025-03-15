//==================
const _ = require('lodash');
//.============_.countBy===========
console.log(_.countBy([6.1,4.2,6.3,4.5,6.7,5.1],Math.floor));// counts the each number how many times they come

console.log(_.every([true,1,null,'yes'],Boolean));// check the boolean valur for each element of an array
//.=============_.every===========
var users=[
    {'user':'ankush','age':35,'active':'false','gender':'male'},
    {'user':'charley','age':25,'active':'false'}
];
console.log(_.every(users,['active','false']));
console.log(_.every(users,'age'));
console.log(_.every(users,'gender'));

//.============_.filter()=========

var users2=[
    {'user':'tony','age':11,'active':'true','gender':'female'},
    {'user':'mony','age':22,'active':'true','gender':'male'}
];
console.log(_.filter(users,['active','true']));// finds the user where active status is true

//.===========_.find()==========
var users3=[
    {'name':'monu','age':25,'city':'noida'},
    {"name":"sonu",'age':23,"city":"delhi"},
    {"name":"tonu","age":35,"city":"pune"}
]
;
console.log(_.find(users3,['age',25]));// finds the user whose age is 25
console.log(_.find(users3,["city","pune"]));// find the user whose city is pune

//.===========_.findLast()=====
console.log(_.findLast([1,2,3,4,5],function(num){
  return num%2===1;
}));// retuns the last value when divide by 2 gives remainder of 1

//.=============_.flatMap()========

function duplicate(n){
    return [n,n,n]
};
console.log(_.flatMap([1,2,3,4],duplicate));// returns the new flatten array i.e here it creates a new array and duplicate the number

//.======_.flatMapDeep()========

function duplicate2(n){
    return [[[n,n,n,n]]]
};

console.log(_.flatMapDeep([1,2,5],duplicate2));// flattens the array to deepens upto last

//.============_.flatMapDepth()====

function duplicate3(m){
    return [[[m,m,m]]]
};
console.log(_.flatMapDepth([2,22,33],duplicate3,3));// flattens the array upto given depth

//.===========_.forEach()==========
(_.forEach([2,30,50],function(value){
    console.log(value)
}));

//.===========_.forEachRight()====
(_.forEachRight([10,20,30,40],function(data){ // console the data starting from right
    console.log(data)
}));

//========_.groupBy()=========
console.log(_.groupBy([ 6.1,4.2,5.3,5.5],Math.floor));// group the data by the value of array

//.=============_.includes()========
console.log(_.includes([1,2,5,8,10],11))// returns the value that have present in array
console.log(_.includes([1,1,2,2,3],1,3));// checks only one value

//.==============_.invokeMap()========

console.log(_.invokeMap([[1,5,3], [7,8,6]], 'sort'));
console.log(_.invokeMap([123,455],String.prototype.split,''));

//.===========_.map()========
function square(n){
    return n*n
};
console.log(_.map([4,8],square));// return the value of square of each number``

//.=========_.orderBy()======
var user4=[
    {'user':'arif','age':25},
    {'user':'john','age':52},
    {'user':'barney','age':35},
    {'user':'barney','age':42}
];
console.log(_.orderBy(user4['user','age'],['asec','desc']));
