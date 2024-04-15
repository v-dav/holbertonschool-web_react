# Typescript

[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

![image](https://github.com/v-dav/holbertonschool-web_react/assets/115344057/1f34fc4d-7040-4610-af4c-148ff7835b1d)


## 🧐 Project Description:

This repository is dedicated to learning and practicing TypeScript, a strongly typed superset of JavaScript that compiles to plain JavaScript. TypeScript offers static typing and modern language features to help build large-scale applications more maintainable and scalable.


## 📖 Learning Objectives:

- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript
- Understand the differences between JavaScript and TypeScript
- Learn TypeScript syntax, features, and best practices
- Explore static typing and how it enhances code quality and developer productivity
- Practice building projects with TypeScript to gain practical experience
- Familiarize yourself with TypeScript tooling and ecosystem

##  🙇 Author

[Vladimir Davidov](https://github.com/v-dav) - Holberton School

# Personal Notes

## Basic types in Typescript

1. **Number**: Represents numbers, whether they are integers or floating-point.
   ```typescript
   let age: number = 30;
   let price: number = 10.5;
   ```

2. **String**: Represents text.
   ```typescript
   let name: string = "John";
   ```

3. **Boolean**: Represents boolean values (true or false).
   ```typescript
   let isDone: boolean = false;
   ```

4. **Array**: Represents a collection of elements of the same type.
   ```typescript
   let numbers: number[] = [1, 2, 3, 4, 5];
   let fruits: Array<string> = ["Apple", "Banana", "Orange"];
   ```

5. **Tuple**: Represents an array with a fixed number of elements with known types, but not necessarily all of the same type.
   ```typescript
   let person: [string, number] = ["John", 30];
   ```

6. **Enum**: Defines sets of named constants.
   ```typescript
   enum Color {
       Red,
       Green,
       Blue,
   }

   let myColor: Color = Color.Red;
   ```

7. **Any**: Turns off type checking (used when the type of a variable is not known at compile time).
   ```typescript
   let notSure: any = 4;
   notSure = "might be a string";
   ```

8. **Void**: Represents the absence of type. Typically used for functions that return nothing.
   ```typescript
   function logMessage(): void {
       console.log("Hello, world!");
   }
   ```

9. **Null** and **Undefined**: Represents null and undefined values respectively.
   ```typescript
   let n: null = null;
   let u: undefined = undefined;
   ```

10. **Never**: Represents values that will never occur.
    ```typescript
    function throwError(message: string): never {
        throw new Error(message);
    }
    ```

## Interfaces:

Interfaces in TypeScript are used to define the structure of objects. They describe the properties and methods that an object should have. They are purely a compile-time construct and do not generate any JavaScript code.

```typescript
interface Person {
    name: string;
    age: number;
    greet(): void;
}

let person: Person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is John and I'm 30 years old.
```

## Classes:

Classes are used to create objects with properties and methods. They allow you to implement object-oriented programming concepts like inheritance, encapsulation, and polymorphism. Classes are a fundamental part of TypeScript, and they are compiled to JavaScript constructor functions.

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Buddy");
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Buddy moved 10m.
```

## Functions:

Functions in TypeScript are similar to JavaScript functions but with added support for type annotations and arrow function expressions. They can be assigned types to both their parameters and return values.

```typescript
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(3, 5)); // Output: 8

// Function type annotations
let myFunction: (x: number, y: number) => number;
myFunction = add;

console.log(myFunction(2, 3)); // Output: 5

// Arrow function expression
const multiply = (x: number, y: number): number => {
    return x * y;
};

console.log(multiply(2, 4)); // Output: 8
```


## Accessing DOM Elements:

You can access DOM elements using TypeScript's type assertion or casting. This allows TypeScript to know the type of the elements you are working with.

```typescript
// Type assertion
const myElement = document.getElementById("myElement") as HTMLInputElement;
myElement.value = "Hello, TypeScript!";

// Casting
const anotherElement = <HTMLInputElement>document.getElementById("anotherElement");
anotherElement.value = "Hello again!";
```

## Handling Events:

You can attach event listeners to DOM elements to respond to user interactions.

```typescript
const button = document.getElementById("myButton") as HTMLButtonElement;

button.addEventListener("click", (event: MouseEvent) => {
    console.log("Button clicked!");
});
```

## Manipulating DOM Elements:

You can manipulate DOM elements by changing their properties, attributes, or contents.

```typescript
const header = document.getElementById("header") as HTMLHeadingElement;
header.textContent = "Welcome to TypeScript!";

const paragraph = document.createElement("p");
paragraph.textContent = "This is a dynamically created paragraph.";
document.body.appendChild(paragraph);
```

## Working with Form Elements:

You can work with form elements to handle user input.

```typescript
const form = document.getElementById("myForm") as HTMLFormElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent form submission

    const input = document.getElementById("myInput") as HTMLInputElement;
    console.log("Input value:", input.value);
});
```

## TypeScript and the DOM:

TypeScript can improve your development experience by providing type checking and autocompletion support when working with the DOM.

```typescript
const myInput = document.getElementById("myInput") as HTMLInputElement;
myInput.addEventListener("input", (event: Event) => {
    const value: string = myInput.value; // TypeScript knows the type of 'value'
});
```

## Generic Types

Generic types in TypeScript allow you to create reusable and flexible components that can work with a variety of data types while maintaining type safety. They enable you to define placeholders for types that will be specified later when the component is used. Here's a basic overview of generic types:

### Introduction to Generics:

Generics are indicated by angle brackets (`< >`) and typically use single-letter names to represent the type parameter. For example:

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>("Hello, TypeScript");
// result is of type string

let anotherResult = identity<number>(42);
// anotherResult is of type number
```

### Using Generic Functions:

Generic functions can work with any type. They allow you to define functions without specifying the exact type, making them more flexible and reusable.

```typescript
function printArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

printArray<string>(["apple", "banana", "orange"]);
printArray<number>([1, 2, 3, 4, 5]);
```

### Using Generic Classes:

You can also create generic classes, allowing the class to work with multiple types.

```typescript
class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

let stringBox = new Box<string>("Hello");
console.log(stringBox.getItem()); // Output: Hello

let numberBox = new Box<number>(42);
console.log(numberBox.getItem()); // Output: 42
```

### Constraining Generics:

You can constrain generics to specific types to enforce certain behaviors or properties.

```typescript
interface Lengthwise {
    length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

console.log(getLength("Hello")); // Output: 5
console.log(getLength([1, 2, 3])); // Output: 3
```

### Using Multiple Type Parameters:

You can define multiple type parameters in a generic type.

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let mergedObj = merge({ name: "John" }, { age: 30 });
// mergedObj is { name: "John", age: 30 }
```

## Namespaces

In TypeScript, namespaces (formerly known as internal modules) provide a way to organize and group related code. They help prevent naming conflicts and provide a logical structure to your codebase. Here's how you can use namespaces in TypeScript:

### Creating a Namespace:

You can declare a namespace using the `namespace` keyword followed by the namespace name.

```typescript
namespace MyNamespace {
    export const myVariable: number = 42;

    export function myFunction(): void {
        console.log("Hello from myFunction!");
    }

    export class MyClass {
        constructor() {
            console.log("MyClass instance created!");
        }
    }
}
```

### Accessing Members of a Namespace:

To access members (variables, functions, classes, etc.) inside a namespace, you use the namespace name followed by the member name, separated by a dot (`.`).

```typescript
console.log(MyNamespace.myVariable); // Output: 42

MyNamespace.myFunction(); // Output: Hello from myFunction!

const instance = new MyNamespace.MyClass(); // Output: MyClass instance created!
```

### Nested namespaces:

You can also nest namespaces within each other to create a hierarchical structure.

```typescript
namespace OuterNamespace {
    export namespace InnerNamespace {
        export const innerVariable: string = "Nested Namespace";
    }
}

console.log(OuterNamespace.InnerNamespace.innerVariable); // Output: Nested Namespace
```

### Importing and Exporting:

To use members of a namespace in other files, you need to export them using the `export` keyword. Then, you can import and use them in other files.

```typescript
// File1.ts
namespace MyNamespace {
    export const myVariable: number = 42;
}

// File2.ts
/// <reference path="File1.ts" />
import { MyNamespace } from "./File1";

console.log(MyNamespace.myVariable); // Output: 42
```


1. **Declaration Merging**: TypeScript allows you to declare multiple namespaces with the same name across different files. The declarations will be merged together.

2. **Avoid Overusing**: While namespaces are useful for organizing code, overusing them can lead to complex dependencies and maintainability issues. Consider using ES modules (`import` and `export`) for larger projects.


## Interface merging

In TypeScript, declaration merging is a powerful feature that allows you to extend interfaces, functions, classes, or enums across multiple declarations. This feature helps to combine multiple declarations of the same entity into a single definition. 

```typescript
// File1.ts
interface Person {
    name: string;
}

// File2.ts
interface Person {
    age: number;
}

// Merged Interface
// Both name and age properties are included
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "John",
    age: 30
};
```

### Namespace Merging:

Similarly, you can merge namespaces across multiple files or within the same file.

```typescript
// File1.ts
namespace MyNamespace {
    export const myVariable: number = 42;
}

// File2.ts
namespace MyNamespace {
    export function myFunction(): void {
        console.log("Hello from myFunction!");
    }
}

// Merged Namespace
namespace MyNamespace {
    export const myVariable: number = 42;
    export function myFunction(): void {
        console.log("Hello from myFunction!");
    }
}
```

### Class Merging:

You can merge classes by declaring them with the same name across different files or within the same file.

```typescript
// File1.ts
class MyClass {
    greet(): void {
        console.log("Hello");
    }
}

// File2.ts
class MyClass {
    farewell(): void {
        console.log("Goodbye");
    }
}

// Merged Class
// Contains both greet and farewell methods
class MyClass {
    greet(): void {
        console.log("Hello");
    }

    farewell(): void {
        console.log("Goodbye");
    }
}
```

### Function Merging:

You can also merge function declarations by declaring them with the same name across different files or within the same file.

```typescript
// File1.ts
function myFunction(): void {
    console.log("Function declaration 1");
}

// File2.ts
function myFunction(): void {
    console.log("Function declaration 2");
}

// Merged Function
// Both function declarations are included
function myFunction(): void {
    console.log("Function declaration 1");
    console.log("Function declaration 2");
}
```

### Enum Merging:

Enum members are automatically merged across multiple declarations.

```typescript
// File1.ts
enum Color {
    Red,
    Green
}

// File2.ts
enum Color {
    Blue
}

// Merged Enum
// Contains Red, Green, and Blue members
enum Color {
    Red,
    Green,
    Blue
}
```

## How to use an ambient Namespace to import an external library

To import an external library using an ambient namespace in TypeScript, you first need to define the shape of the library's types without actually importing the library itself. This is useful when you're working with libraries that are already available at runtime (like JavaScript libraries). Here's how you can use an ambient namespace to import an external library:

### 1. Install Type Definitions (if available):

If the library you want to use has type definitions available, you can install them using npm.

```bash
npm install @types/library-name --save-dev
```

Replace `library-name` with the name of the library you want to install type definitions for.

### 2. Declare Ambient Namespace:

Create a TypeScript file (e.g., `typings.d.ts`) in your project and declare an ambient namespace with the same name as the library.

```typescript
// typings.d.ts

declare namespace LibraryName {
    // Define types and interfaces for the library
    interface SomeInterface {
        // Define properties and methods
    }

    // Declare functions and variables
    function someFunction(): void;
}
```

Replace `LibraryName` with the name of the library you're importing and define the types, interfaces, functions, and variables that the library provides.

### 3. Use the Ambient Namespace:

Once you've declared the ambient namespace, you can use it in your TypeScript code without importing the actual library.

```typescript
// Your TypeScript file

// Use the ambient namespace
LibraryName.someFunction();

let obj: LibraryName.SomeInterface = {
    // Initialize object properties
};
```

### 4. Include the Library in Your HTML:

Make sure to include the actual library (JavaScript file) in your HTML file.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My TypeScript App</title>
</head>
<body>
    <!-- Include the library script -->
    <script src="path/to/library.js"></script>
    <!-- Include your TypeScript script -->
    <script src="path/to/your-typescript-file.js"></script>
</body>
</html>
```

Replace `"path/to/library.js"` with the path to the library's JavaScript file.

## Basic nominal typing with Typescript

Nominal typing in TypeScript refers to the ability to create distinct types based on their names, rather than their structure. This can be useful for creating types that are semantically distinct even if their structures are identical. However, TypeScript primarily uses structural typing, meaning that two types are considered compatible if their structures are compatible.

### Using Type Aliases:

You can create distinct types using type aliases with unique names, even if their structures are the same.

```typescript
type CustomerId = string & { readonly brand: unique symbol };
type OrderId = string & { readonly brand: unique symbol };

function processCustomer(id: CustomerId): void {
    // Process customer with the given ID
}

function processOrder(id: OrderId): void {
    // Process order with the given ID
}

// Usage
const customerId: CustomerId = "C123";
const orderId: OrderId = "O456";

processCustomer(customerId); // OK
processCustomer(orderId); // Error: Argument of type 'OrderId' is not assignable to parameter of type 'CustomerId'

processOrder(orderId); // OK
processOrder(customerId); // Error: Argument of type 'CustomerId' is not assignable to parameter of type 'OrderId'
```

In this example, `CustomerId` and `OrderId` are distinct types based on their unique names, even though they are both aliases of `string`. TypeScript treats them as incompatible types, ensuring type safety.

### Using Classes:

You can also achieve nominal typing using classes by creating distinct classes with unique names.

```typescript
class CustomerId {
    private _value: string;

    constructor(value: string) {
        this._value = value;
    }

    getValue(): string {
        return this._value;
    }
}

class OrderId {
    private _value: string;

    constructor(value: string) {
        this._value = value;
    }

    getValue(): string {
        return this._value;
    }
}

function processCustomer(id: CustomerId):

```typescript
void {
    // Process customer with the given ID
}

function processOrder(id: OrderId): void {
    // Process order with the given ID
}

// Usage
const customerId = new CustomerId("C123");
const orderId = new OrderId("O456");

processCustomer(customerId); // OK
processCustomer(orderId); // Error: Argument of type 'OrderId' is not assignable to parameter of type 'CustomerId'

processOrder(orderId); // OK
processOrder(customerId); // Error: Argument of type 'CustomerId' is not assignable to parameter of type 'OrderId'
```

In this example, `CustomerId` and `OrderId` are distinct classes with unique names, ensuring that instances of one class cannot be passed to functions expecting the other class.

Using nominal typing can provide stronger guarantees about the intent of your code and help prevent unintended errors, especially in situations where different types should not be used interchangeably despite having the same structure.
