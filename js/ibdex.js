console.log('hdkdk')
var c='thes is new var'
console.log(c)
c=10
console.log(c)
let d ='thes is d'
console.log(d)
const b ='thes is b'
console.log(b)
var x=null
console.log(x)
var boolNew =true
console.log(boolNew)
var list1=[1,2,3,4,5,6,7,8,9]
list1[5]=10
console.log(list1)
var obj1={name:'yazan',age:25}
console.log(obj1['age'])
console.log(obj1.name)
m=2
if(m>2){
    console.log('m is greater than>2')

}
else{
    console.log('m is not greater than 2')
}

var li =document.getElementsByTagName('li')
console.log(li)
var h1 =document.getElementsByClassName('h1')
console.log(h1)
var move =document.getElementById('move')
console.log(move)
var modb=document.getElementById('modb')
var body=document.getElementsByTagName('body')

function moodchang(){
    console.log(body[0].style.backgroundColor)
    if(body[0].style.backgroundColor==''|| body[0].style.backgroundColor=='black'){
         body[0].style.backgroundColor='white'
         modb.innerHTML = 'change to dark mode'}
    else{
         body[0].style.backgroundColor = 'black'
         modb.innerHTML = 'change to light mode'
    }
}



const button = document.getElementById('bch');
let isOldImage = true;

function toggleBackground() {
    if (isOldImage) {
        document.body.style.backgroundImage = 'url("../media/bgn.jpg")'
    } else {
        document.body.style.backgroundImage = 'url("../media/gym.jpg")'
    }
    isOldImage = !isOldImage
}

button.addEventListener('click', toggleBackground)

var min = document.getElementsByClassName('min')[0]
function display(){
    console.log(min.style.display)
    if(min.style.display=='none'||min.style.display==''){
        min.style.display ='block'

    }
    else{
         min.style.display ='none'
    }
}