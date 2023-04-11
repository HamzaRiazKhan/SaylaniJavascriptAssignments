function addition(a)
{
    return function(b)
    {
        console.log(a + b)
    }
}
let a=+prompt("Write your number");
let add1 = addition(a);
add1(10);