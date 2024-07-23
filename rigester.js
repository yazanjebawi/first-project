var registerform =document.getElementById('registerform')
var alluser= JSON.parse(localStorage.getItem('user'))||[]
registerform .addEventListener('submit',function(event){
event.preventDefault();
var name=document.getElementById('name').value
var email=document.getElementById('email').value
var password=document.getElementById('password').value
var confirmpassword=document.getElementById('password1').value
if(password!=confirmpassword){
    alert('password dont match')
return
}
var user={
    name:name,
    email:email,
    password:password,
}
console.log(user)
alluser.push(user)
localStorage.setItem('user',JSON.stringify(alluser))})