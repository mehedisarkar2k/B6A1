# Interview Questions - Blog Task

## 1. What are some differences between interfaces and types in TypeScript?

- **Interface** মূলত object structure define করার জন্য।

```ts
interface User {
  name: string;
  age: number;
}
```

- **Type** দিয়ে object, primitive, union, intersection সবকিছু define করা যায়।

```ts
type UserRole = 'admin' | 'user' | 'guest';
```

- **Interface** অনেক সময় extend করা সহজ।

```ts
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}
```

- **Interface** declaration merging support করে, অর্থাৎ একই নামের multiple interface declare করলে সেগুলো merge হয়ে যায়।

```ts
interface Car {
  make: string;
}
interface Car {
  model: string;
}
// এখন Car interface এ make এবং model দুইটাই থাকবে। eg: final Car { make: string; model: string; }
```

- **Type** আবার utility type বা complex type বানাতে বেশি flexible।

```ts
type ApiResponse<T> = {
  data: T;
  error: string | null;
};
```

---

## 2. What is the use of the keyof keyword in TypeScript? Provide an example

`keyof` একটি object এর key গুলোকে union type হিসেবে দেয়।

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;
// 'name' | 'age'
```

---

## 3. Explain the difference between any, unknown, and never types in TypeScript

### any

- যেকোনো কিছুর মতো behave করে, জাভাস্ক্রিপ্টের মতো হয়ে যায়
- type safety হারিয়ে যায়

```ts
let a: any = 'hello';
a = 42; // কোনো সমস্যা নেই
```

### unknown

- `any` এর মতো কিন্তু safer
- ব্যবহার করার আগে type check করতে হয়

```ts
let b: unknown = 'hello';
b = 42; // কোনো সমস্যা নেই
```

```ts
if (typeof b === 'string') {
  console.log(b.toUpperCase()); // এখন safe
}
```

### never

- এমন জিনিস যেটা কখনো ঘটবে না
- যেমন error throw করে, infinite loop

```ts
function error(): never {
  throw new Error('Something went wrong');
}
```

---

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum

- `enum` দিয়ে constant values group করা যায়

### Numeric Enum

```ts
enum Status {
  Pending,
  Approved,
  Rejected,
}
```

### String Enum

```ts
enum Roles {
  Admin = 'admin',
  User = 'user',
}
```
