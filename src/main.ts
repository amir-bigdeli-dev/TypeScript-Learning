// Functions Overload

//Exercise 1
function createElementFunc (tag : string) : {tag : string}
function createElementFunc (tag : string , text : string) : {tag : string , text : string}
function createElementFunc ( tag : string , text ? : string) : {tag : string , text?: string} {
    if(text === undefined) return {tag}
    return {tag,text}
}

const d = createElementFunc('div')
const d2 = createElementFunc('div','hello')
