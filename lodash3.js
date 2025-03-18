const _=require('lodash');

var users=[
    {'user':'barney','age':35,'active':'false'},
    {'user':'johny','age':25,'active':'true'},
    {'user':'tony','age':45,'active':'false'}
];
console.log(_.partition(users,['active','false']));
console.log(_.partition(users,{'age':25,'active':true}));

console.log(_.reduce([1,5],function(sum,n){
  return sum+n
}));

var array=[[0,1],[2,3],[4,5]];
console.log(_.reduceRight(array,function(flattened,other){
    return flattened.concat(other)
}));

var users2=[
    {'user':'mony','age':15,'active':'true'},
    {'user':'sony','age':18,'active':'false'},
    {'user':'rony','age':22,'active':'true'}
];
console.log(_.reject(users2,{'age':22,'active':'true'}));
console.log(_.reject(users2,["user","mony"]));

console.log(_.sample([1,2,5,7,8]));
console.log(_.sampleSize([2,5,7,9,11,13],2));
console.log(_.shuffle([,1,2,3,4,5]));
console.log(_.size([1,3,5,7,9,11]));
console.log(_.size([2,5,7,9,11]));
console.log(_.size({'a':1,'b':2,'c':5}));
console.log(_.some([null,'0','yes',false],Boolean));
var users3=[
    {'user':'barny','age':25,'active':true},
    {'user':'morny','age':22,'active':false}
];
console.log(_.some(users3,{'user':'barny','active':false}));
console.log(_.some(users3,{'age':25,'active':true}));

var users4=[
    {'user':'fred','age':48},
    {'user':'bred','age':25},
    {'user':"cred",'age':22}
];
console.log(_.sortBy(users4,['age']));
