updates = [
  {
    name: 'Snow Cone',
    release_date: '2021',
    bugs: '#456',
    feature: 'high resolution',
    author: 'madhu',
    type: 'major',
  },
  {
    name: 'Red Velvet Cake',
    release_date: '2021',
    bugs: '#12',
    feature: 'high resolution',
    'author': 'keerthika',
    type: 'major',
  },
  {
    name: 'Oatmeal Cookie',
    release_date: '2021',
    bugs: 'Skipping selector on buttons',
    feature: 'high resolution',
    author: 'keerthika',
    type: 'patch',
  },
  {
    name: 'Jelly Bean',
    release_date: '2013',
    bugs: 'Crash after tapping on button',
    feature: 'Improved Augmented Reality',
    author: 'sindhuja',
    type: 'enhancement',
  },
  {
    name: 'Honeycomb',
    release_date: '2022',
    bugs: 'Crash after tapping on button',
    feature: 'Improved Augmented Reality',
    author: 'keerthika',
    type: 'enhancement',
  }
]
console.table(updates);
console.log('------------------------------------------------------QUESTION NO.1------------------------------------------------------------------------------------------')

arr1 = updates.map(n => n.release_date)

function count() {
  obj = {}
  for (i of arr1) {
    if (i in obj) {
      obj[i] += 1
    } else {
      obj[i] = 1
    }

  } return obj
} count()


n = 2021
for (i in obj) {
  if (n == i) {
    console.log(`There are '${obj[i]}' updates were made in the year '${n}'.`);
  }
}
console.log('-------------------------------------------------------QUESTION NO.2-----------------------------------------------------------------------------------------')

arr2 = updates.map(n => n.author)

function count_author() {

  obj1 = {}

  for (i of arr2) {
    if (i in obj1) {
      obj1[i] += 1
    } else {
      obj1[i] = 1
    }

  } return obj1
}
count_author()
function toSort() {
  arr3 = []
  obj2 = {}
  for (i in obj1) {
    arr3.push(obj1[i])

  }
  arr3 = arr3.sort()
  for (j of arr3) {
    for (k in obj1) {
      if (j == obj1[k]) {
        obj2[k] = obj1[k]
      }
    }
  } return obj2
} toSort()
for (i in obj2) {
  obj3 = {}
  obj3[i] = obj2[i]
} console.log(`The author '${i}' has worked in ${obj3[i]} updates comparing with other authors.`);
console.log('------------------------------------------------------------QUESTION NO.3------------------------------------------------------------------------------------')
function bugs() {
  bug_arr = updates.map(n => n.bugs)
  console.log(bug_arr);
} bugs()
function find(x) {
  for (i = 0; i < updates.length; i++) {
    for (j in updates[i]) {
      if (updates[i][j] == x)
        console.log(updates[i]);
    }
  }
}
find('Crash after tapping on button')
find('major')
console.log('-------------------------------------------------------------QUESTION NO.4-----------------------------------------------------------------------------------')
type_arr = updates.map(n => n.type)
function count_type() {
  obj5 = {}
  for (i of type_arr) {
    if (i in obj5) {
      obj5[i] += 1
    } else {
      obj5[i] = 1
    }

  } return obj5
} count_type()
y = 'patch'
for (g in obj5) {
  if (g == y) {
    console.log(`There are '${obj5[g]}' updates made in the type '${y}'.`);
  }
}



console.log("___________________________________________________________TYPESCRIPT__________________________________________________________________")


interface versionInterface{
  name:string,
  release_date:string,
  bugs:any,
  feature:string,
  author:string,
  type:string
}
const updates:versionInterface[]=[
  {
    name:'Snow Cone',
    release_date:'2021',
    bugs:'#456',
    feature:'high resolution',
    author:'madhu',
    type:'major',
  },
  {
    name:'Red Velvet Cake',
     release_date:'2021',
    bugs:'#12',
    feature:'high resolution',
    'author':'keerthika',
    type:'major',
  },
 {
    name:'Oatmeal Cookie',
     release_date:'2021',
    bugs:'Skipping selector on buttons',
    feature:'high resolution',
    author:'keerthika',
    type:'patch',
  },
  {
    name:'Jelly Bean',
     release_date:'2013',
    bugs:'Crash after tapping on button',
    feature:'Improved Augmented Reality',
    author:'sindhuja',
    type:'enhancement',
  },
  {
    name:'Honeycomb',
     release_date:'2022',
    bugs:'Crash after tapping on button',
    feature:'Improved Augmented Reality',
    author:'keerthika',
    type:'enhancement',
  }
]
console.table(updates);
console.log('------------------------------------------------------QUESTION NO.1------------------------------------------------------------------------------------------')
let arr1=updates.map(n=>n.release_date)
function count(){
  let obj:any={}
  for(let i of arr1){
    if(i in obj){
      obj[i]+=1
    }else{
      obj[i]=1
    }
    
  }return obj
}
let obj=count()
const n='2021'
for(let i in obj){
  if(n==i){
    console.log(`There are '${obj[i]}' updates were made in the year '${n}'.`);
  }
}
console.log('-------------------------------------------------------QUESTION NO.2-----------------------------------------------------------------------------------------')
const arr2=updates.map(n=>n.author)
function count_author(){
  var obj1:any={}
  for(let i of arr2){
    if(i in obj1){
    obj1[i]+=1
    }else{
      obj1[i]=1
  }
  }return obj1
}
var obj1:any=count_author()
function toSort(){
  let arr3=[]
 var obj2:any={}
  for(let i in obj1){
    arr3.push(obj1[i])
  }
  arr3=arr3.sort()
  for(let j of arr3){
    for(let k in obj1){
      if(j==obj1[k]){
        obj2[k]=obj1[k]
      }
    }
  }return obj2
}
var obj2:any=toSort()
for (let h in obj2) {
  var obj3:any = {}
  obj3[h] = obj2[h]
} 
console.log(obj3);

console.log('------------------------------------------------------------QUESTION NO.3------------------------------------------------------------------------------------')
function bugs(){
  let bug_arr=updates.map(n=>n.bugs)
  console.log(bug_arr);
}bugs()
function find(x:any){
  for(let i=0;i<updates.length;i++){
    for(let j in updates[i]){
      if(j==x)
      console.log(updates[i]);
    }
    
  }}
  find('Crash after tapping on button')
  find('major')
  console.log('-------------------------------------------------------------QUESTION NO.4-----------------------------------------------------------------------------------')

  
let type_arr=updates.map(n=>n.type)
function count_type(){
  var obj5:any={}
  for(let i of type_arr){
    if(i in obj5){
      obj5[i]+=1
    }else{
      obj5[i]=1
    }
    
  }return obj5
}count_type()
var obj5=count_type()
let y='patch'
for(let g in obj5){
  if(g==y){
    console.log(`There are '${obj5[g]}' updates made in the type '${y}'.`);
  }
}


