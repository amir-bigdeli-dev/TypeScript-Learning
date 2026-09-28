// Constraints
function longest<T>(a: T, b: T): T {
    return a.length >= b.length ? a : b;
}

longest([1, 2], [1, 2, 3]);
longest("abc", "de");
longest({ length: 10 }, { length: 3 });
longest(10, 20);  
