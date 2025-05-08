# 📘 What is the Use of Enums in TypeScript?

## 🎯 Overview

TypeScript is a powerful superset of JavaScript that introduces static typing to make code more Easier and manageable. One of its useful features is the **enum**. This file explains what enums are, why they’re useful, and provides examples of both **numeric** and **string** enums.

---

## 🔍 What is an Enum?

An **enum** (short for _enumeration_) is a way to define a set of named constants. Enums help:

- Group related values
- Avoid magic numbers or strings
- Improve code readability and maintainability
- Enable better autocompletion and documentation

---

## 🔢 Numeric Enums

By default, TypeScript assigns numeric values starting from `0`.

### Example:

```ts
enum Direction {
  North, // 0
  East, // 1
  South, // 2
  West, // 3
}

let move: Direction = Direction.North;
console.log(move); // Output: 0
```

We can also manually assign values:

```ts
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(Status.NotFound);
```

---

## 🔤 String Enums

String enums require explicit values and are often more human-readable.

### Example:

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let selectedColor: Color = Color.Green;
console.log(selectedColor); // Output: "GREEN"
```

String enums are not auto-incremented. You have to explicitly define each value.

---

## ⚖️ When to Use Which?

- Numeric enums are compact and ideal when the values don’t matter much, or you want to save memory (e.g., HTTP status codes).
- Numeric enums are compact and ideal when the values don’t matter much, or you want to save memory (e.g., HTTP status codes).

---

Enums are a great tool in TypeScript to define a set of related values in a clean and organized way. Whether you choose numeric or string enums depends on your use case. They help you write safer, more expressive, and maintainable code.
So next time you're about to sprinkle magic strings or numbers across your code—think Enums!

---

# 🔑 What is the Use of the keyof Keyword in TypeScript?

## 🎯 Overview

TypeScript provides several powerful features that enhance JavaScript with static typing. One such feature is the **keyof** keyword—a utility type that helps us work more safely with object keys.
In this blog, you’ll learn what **keyof** is, why it’s useful, and how to use it effectively with a simple example.

---

## What is keyof?

In TypeScript, the **keyof** keyword is a **type operator** used to extract the keys of an object type as a union of string literal types.

- Helps enforce valid property access
- Enables generic utility types
- Reduces bugs related to misspelled object keys
- Works well with mapped and conditional types

---

## Basic Syntax

````ts
type Keys = keyof SomeType;
````

This will create a union of all property names (keys) of **SomeType**.

---

## Example: Using **keyof** in Practice

````ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User; 
// Equivalent to: "id" | "name" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const userName = getProperty(user, "name");
console.log(userName); // Output: "Alice"
````

## What’s Happening Here?

- **keyof** User gives us **"id" | "name" | "email"**
- **K extends keyof T** ensures **key** must be a valid key of the object
- **T[K]** dynamically returns the correct type based on the key

This means you can safely access properties of the object without worrying about typos or invalid keys.

---

## Without keyof: A Buggy Alternative

````ts
function getUserProp(obj: any, key: string) {
  return obj[key];
}

getUserProp(user, "nam"); // Typo, but no TypeScript error!
````

With **keyof**, TypeScript would alert you that **"nam"** is not a valid key—saving you from runtime errors.

## With keyof, TypeScript would alert you that "nam" is not a valid key—saving you from runtime errors.

- Form field validation
- Creating reusable utility functions
- Building flexible component props
- Strongly-typed Redux selectors or context helpers

---

The **keyof** keyword is a small but powerful tool in TypeScript’s type system. It helps you write more accurate, reusable, and type-safe code by giving you control over object keys.
Next time you're building a function that accesses object properties dynamically, try using **keyof**—you'll write safer and smarter code.


