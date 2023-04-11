function new1(msg) 
{
    let abc = document.createElement('p')
    let def = document.createTextNode(msg)
    abc.appendChild(def)
    document.body.appendChild(abc)
}
new1("Assalam u Alikum Ramadan Mubarak!")