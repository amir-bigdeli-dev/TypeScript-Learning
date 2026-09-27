// Call Signatures

type DescribableFunction = {
    description : string,
    (Arg : number) : boolean ;
}

function doSomething(fn : DescribableFunction) {
    console.log(`${fn.description} => ${fn(6)}`)
}

function myFunction(arg : number)  {
    return arg > 3;
}

myFunction.description = "Function answer : "

doSomething(myFunction)

//چالش ۲: Overloaded Call Signature

type Converter = {
    description : "Converting : ",
    (value : number) : string,
    (vale : string) : number
}

function convert (value : number):string
function convert (value : string) : number
function convert ( value : string | number) : number | string {
    if(typeof value === "string"){
        return Number(value)
    }else{
        return value.toString()
    }
}

console.log(convert('10'))

function greet(name: string): string
function greet(first: string, last: string): string
function greet(first: string, last?: string): string {
    return last ? `Hello, ${first} ${last}!` : `Hello, ${first}!`
}

console.log(greet('amir'))