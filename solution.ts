type InputType = string | number | boolean;
const formatValue = (input: InputType): InputType => {
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input === 'number') {
        return input * 10;
    } else if (typeof input === 'boolean') {
        return !input;
    }

    return input;
};

const getLength = (input: string | any[]): number => {
    if (typeof input === 'string') {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    }
    return 0;
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
