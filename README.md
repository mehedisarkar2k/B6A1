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
