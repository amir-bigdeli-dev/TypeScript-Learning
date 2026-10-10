// Functions Overload

//Exercise 4

function log(message : string) : void
function log(message : string , level : "info" | "warning" | "error") : void
function log(message : string , level ?: string) : void {
    if  ( level !== undefined ) {
        console.log(`[${level} : ${message}]`)
    }else {
        console.log(message)
    }
}

// log("hello")
log("amir","error")
