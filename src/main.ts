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