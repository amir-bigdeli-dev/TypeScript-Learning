// Functions Overload

//Exercise 3

function format(value: unknown): unknown;
function format(value: string): string;
function format(value: unknown): string {
    if (typeof value === "string") return value.toUpperCase();
    return String(value);
}

const a = format("hello");
const b = format(42);