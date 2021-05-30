function add(){
    var a = document.getElementById('txt')
    var b = document.createElement('li')
    var c = document.createTextNode(a.value)
    b.appendChild(c)
    var get = document.getElementById('list').appendChild(b)
    document.getElementById('txt').value = ""
    var dltbtn = document.createElement('button')
    var dltname = document.createTextNode('Delete')
    dltbtn.appendChild(dltname)
    b.appendChild(dltbtn)
    dltbtn.setAttribute('onclick','dlt(this)')
    var edtbtn = document.createElement('button')
    var edtname = document.createTextNode('Edit')
    edtbtn.appendChild(edtname)
    b.appendChild(edtbtn)
    edtbtn.setAttribute('onclick','edt(this)')
}
function delall(){
    document.getElementById('list').innerHTML=""
}
function dlt(j){
var u = j.parentNode.remove()
}
function edt(k){
    var i = prompt('Enter Your Item', k.parentNode.firstChild.nodeValue)
    k.parentNode.firstChild.nodeValue = i
}