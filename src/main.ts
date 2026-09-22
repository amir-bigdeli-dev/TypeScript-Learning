// Using type predicates

type Cat = { meow: () => void };
type Dog = { bark: () => void };

function isCatWrong(pet : Cat | Dog) : pet is Cat {
  return "meow" in pet
}

const PetList : (Cat | Dog)[] = [
    {meow : () => console.log("meow")},
    { bark : () => console.log("Barrrk")}
]

const Cats  = PetList.filter(isCatWrong)

console.log(Cats)

//چالش ۲: Predicate روی unknown

function isNumber(input : unknown) : input is number {
    return typeof input === "number"
}
function isString ( input : unknown) : input is string {
    return typeof input === "string"
}

const inputs : unknown[] = [1, "two", 3, null, 4, undefined,"three"]

function numSum (input : unknown []) : number {
    const nums = input.filter(isNumber)
    return nums.reduce((a,b) => a + b , 0)
}

console.log(numSum(inputs))
console.log(inputs.filter(isString).join(" ,"))

// چالش ۳: Predicate ترکیبی برای Object کامل

type Point = { x: number; y: number };

function isPoint(value: unknown): value is Point {
    return (
        typeof value === "object" &&
        value !== null &&
        "x" in value &&
        "y" in value &&
        typeof value.x === "number" &&
        typeof value.y === "number"
    );
}

const candidates: unknown[] = [
    { x: 1, y: 2 },
    { x: 1 },
    { x: "1", y: 2 },
    null,
    { x: 1, y: 2, z: 3 },
];

const points = candidates.filter(isPoint);
console.log(points);


function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every((a) => typeof a === "string");
}

const mixed: unknown = ['a', 'b', '1'];

if (isStringArray(mixed)) {
    console.log(mixed[0].toUpperCase());
}


function isNotNullish<T>(value: T): value is NonNullable<T> {
    return value !== null && value !== undefined;
}

const numbers: (number | null)[] = [1, null, 2, null, 3];
const cleanNumbers = numbers.filter(isNotNullish);   // number[]



console.log(cleanNumbers)