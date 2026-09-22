// in operator narrowing

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) : void {
    if ("swim" in animal) {
        animal.swim?.()
    } else {
        animal.fly?.()
    }
}

move({ swim: () => undefined });
move({ fly: () => console.log("flying") });
move({ swim: () => console.log("swimming"), fly: () => console.log("flying") });
move({});


// type Success = {data : string[]};
// type Failure = {error : string , code: number};

const  handleResponse = (res : Success | Failure) => {
    if( "data" in res){
        return res.data.join(" , ")
    }
    return res.error
}

// console.log(handleResponse({data : ['a','b','c']}))

//Discriminated Union

interface Success  {
    status : "success",
    data : string[]
}

interface Failure {
    status: "Failure",
    error : string,
    code : number
}

const DiscriminatedHandleResponse = (res : Success | Failure)  => {
    if(res.status === "success"){
        return res.data.join(", ")
    }
    return `${res.error} : ${ res.code }`
}


console.log(DiscriminatedHandleResponse({status : 'success' , data : ['a','b','c']}))
console.log(DiscriminatedHandleResponse({ status : "Failure" , code : 403 , error : "Page Not Found !!"}))



type Circle = { radius: number };
type Rectangle = { width: number; height: number };
type Square = { side: number };
type Triangle = { base : number , height : number}

const area = (shape : Circle | Rectangle | Square | Triangle): number => {
   if( "radius" in shape) {
       return (Math.PI * (shape.radius)**2)
   }else if(  "width" in shape){
       return shape.width * shape.height
   }else if("side" in shape){
       return shape.side**2
   }else{
       const _exhaustive : never = shape
       return _exhaustive
   }
}


console.log(area({radius:5}))
console.log(area({side : 20}))

//Invalid Input

const GetUserName = (input : unknown) : string => {
    if(
        typeof input === "object" &&
        input !== null &&
        "name" in input &&
        typeof input.name === "string"
    ){
        return input.name
    }else{
        return "Anonymouse"
    }
}

console.log(GetUserName("amir"))
console.log(GetUserName({name : "Amirhossein"}))

//Type Guard

type User = { name: string };
type Admin = { name: string; permissions: string[] };

function isAdmin(user : User | Admin) : user is Admin { 
    return "permissions" in user
}

const people: (User | Admin)[] = [
    { name: "Ali" },
    { name: "Sara", permissions: ["read", "write"] },
    { name: "Reza" },
];

const admins = people.filter(isAdmin);

const weird = { name: "Ali", permissions: undefined };
console.log("permissions" in weird);              // true
console.log(weird.permissions !== undefined);      // false