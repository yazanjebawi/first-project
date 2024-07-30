function deleteRow(index){
    console.log('deleteRow',index)
    var tableRow =document .getElementsByClassName('tableRow')[index]
    tableRow.parentNode.removeChild(tableRow)
}
function ubdateRow(index){
    console.log(index)
    var tableRow=document. getElementsByClassName ('tableRow')[index]
    console.log(tableRow.children[1])
    var firstname=tableRow.children[1]
    var lastname=tableRow.children[2]
    var handel=tableRow.children[3]
    modalbody=document.getElementsByClassName('modal-body')[0]
    modalbody.innerHTML=`
    <input type="hidden" id="rowindex" value="${index}">
    <label>firstname</label>
    <input type="text" id="firstname" value="${firstname.innerHTML}">
    <label>lastname</label>
    <input type="text" id="lastname" value="${lastname.innerHTML}">
    <label>handel</label>
    <input type="text" id="handel" value="${handel.innerHTML}">
    `

}
function updateform(){
    var rowindex = document.getElementById('rowindex').value
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var handel = document.getElementById('handel').value
    console.log('up date',rowindex)
    console.log(firstname,lastname,handel)
    var tableRow =document.getElementsByClassName('tableRow')[parseInt(rowindex)]
    tableRow.innerHTML=`
    <td>${parseInt(rowindex)+1}</td>
    <td>${firstname}</td>
     <td>${lastname}</td>
      <td>${handel}</td>
       <td><button onclick="deleteRow(${rowindex})" >delet</button>
</td>
       <td><button onclick="updateform(${rowindex})" type="button" class="btn btn-primary">ubpdate</button>
</td>

`
      
}