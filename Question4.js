let ul = document.getElementById('list')
function add(a){
    let lis = document.createElement('li')
    let li1 = document.createTextNode(a)
    lis.appendChild(li1)
    ul.appendChild(lis)
}
add("Assalam U Alikum I am Hamza Riaz");