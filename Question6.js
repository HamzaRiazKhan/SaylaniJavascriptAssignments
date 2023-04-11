function save(_name, _rollNo)
{
    let stringify=JSON.stringify(person);
    localStorage.setItem("a",stringify);
}
let person ={
    name :"Hamza",
    rollNo :123,
};
let a=save("person" , person)