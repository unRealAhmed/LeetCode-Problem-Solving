type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once<T extends (...args: any[]) => any>(fn: T): OnceFn {
    let called = false;
    return (...args) => {
        if (called) return undefined;
        called = true;
        return fn(...args);
    };
}