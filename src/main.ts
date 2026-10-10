// Functions Overload

//Exercise 2

function parse(value : number) : string
function parse (value : string) : number
function parse(value : number | string) : string | number {
    if (typeof value === "string") {
        return Number(value);
    }
    return value.toString();
}

let x = parse('2')