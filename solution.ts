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

type Item = {
    title: string;
    rating: number;
};

const filterByRating = (items: Item[]): Item[] =>
    items.filter(
        (item) => item.rating >= 0 && item.rating <= 5 && item.rating >= 4
    );

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] =>
    users.filter((user) => user.isActive);

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
    );
};
