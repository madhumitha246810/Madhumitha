version = [
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
console.table(version);
console.log('------------------------------------------------------QUESTION NO.1------------------------------------------------------------------------------------------')
  arOfReleaseDate = version.map(n => n.release_date)
function countYear(){
    obj = {}
    for(key1 of arOfReleaseDate){
        if(key1 in obj){
            obj[key1] += 1
        } 
        else{
            obj[key1] = 1
        }
    } 
    return obj
} countYear()
function findYear(){
    n = 2021
    for (key2 in obj){
        if (n == key2){
            console.log(`There are '${obj[key2]}' version were made in the year '${n}'.`);
        }
    }
}
findYear()
console.log('-------------------------------------------------------QUESTION NO.2-----------------------------------------------------------------------------------------')
arOfAuthor = version.map(n => n.author)
function count_author(){
    obj1 = {}
    for(value of arOfAuthor){
        if (value in obj1){
            obj1[value] += 1
        } 
        else{
            obj1[value] = 1
      }
    }return obj1
}
count_author()
//console.log(count_author());
a=[]
for(key3 in obj1){
   a.push(obj1[key3])
}
const max=a.reduce((a,b)=>Math.max(a,b))
for(key4 in obj1){
    if(max===obj1[key4]){
    console.log(`The author '${key4}' has worked in ${obj1[key4]} versions comparing with other authors.`)
    }
}
console.log('------------------------------------------------------------QUESTION NO.3------------------------------------------------------------------------------------')
function bugs() {
    bug_arr = version.map(n=>n.bugs)
    
}bugs()
function find(x) {
    for (i = 0; i < version.length; i++) {
      for (key5 in version[i]) {
        if (version[i][key5] == x)
          console.log(version[i]);
      }
    }
}
find('Crash after tapping on button')
console.log('-------------------------------------------------------------QUESTION NO.4-----------------------------------------------------------------------------------')
type_arr = version.map(n => n.type)
function countTypeOfVersion() {
    obj5 = {}
    for (key of type_arr){
      if (key in obj5) {
        obj5[key] += 1
      } else {
        obj5[key] = 1
      }
  
    } return obj5
} 
countTypeOfVersion()
function findTypeOfVersion(){
    entrTheTypeOfVersion = 'patch'
    for (gkey in obj5){
        if (gkey === entrTheTypeOfVersion){
            console.log(`There are '${obj5[gkey]}' version made in the type '${entrTheTypeOfVersion}'.`);
        }
    }
}
findTypeOfVersion()
