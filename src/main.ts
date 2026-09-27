// Generic functions

function wrapInArray<T>(value: T): T[] | undefined{
    return [value]
}

function getLastElement<T>(arr : T[]) : T | undefined {
  return arr.at(-1)
}

console.log(wrapInArray(['a','b','c']))
console.log(wrapInArray('5'))
console.log(getLastElement(['a','b','c']))


function pair <A,B> (first : A , second : B) : [A,B] {
    return [first,second]
}

function swap <A,B> (t:[A,B]) : [B,A]{
    return [t[1],t[0]]
}

const p = pair(true,[1,2,3,4])
console.log(p)
console.log(swap(p))

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
}

interface User  {
    name : string,
    age: number
}
const user : User = {name : "Ali",age : 18}

console.log(getProperty(user,'name'))
console.log(getProperty(user,'age'))
console.log(getProperty(user,'email'))