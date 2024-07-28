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
    <label>firstname</label>
    <input type="text" id="firstname" value="${firstname.innerHTML}">
    <label>lastname</label>
    <input type="text" id="lastname" value="${lastname.innerHTML}">
    <label>handel</label>
    <input type="text" id="handel" value="${handel.innerHTML}">
    `

}