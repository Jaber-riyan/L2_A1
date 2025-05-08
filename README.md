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

## Final Thoughts

Enums are a great tool in TypeScript to define a set of related values in a clean and organized way. Whether you choose numeric or string enums depends on your use case. They help you write safer, more expressive, and maintainable code.
So next time you're about to sprinkle magic strings or numbers across your code—think Enums!


