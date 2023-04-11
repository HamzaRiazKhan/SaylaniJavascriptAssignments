function save(_name, _rollNo)
{
    let stringify=JSON.stringify(person);
    localStorage.setItem("a",stringify);
    let b= localStorage.getItem("a");
    return JSON.parse(b);
}
let person ={
    name :"Hamza",
    rollNo :123,
};
let c=save("person" , person)
let d=c;
console.log(d);