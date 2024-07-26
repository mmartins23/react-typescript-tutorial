## React TypeScript Tutorial - 3 - Typing Props

### Introduction
In this part of the tutorial, we will explore how to define prop types for React components using TypeScript. Props are essential in building any practical React application, and TypeScript provides strong typing for these props, enhancing code quality and development experience.

### Approach
For each video in this series, we will predefine some React components in plain JavaScript. This allows us to focus on adding TypeScript types, thereby saving time on writing basic React code and concentrating on TypeScript concepts.

### Basic Prop Types

1. **Setting Up the Component:**
   - Create a component named `Greet` in the `components` folder.
   - Initially, it renders a hardcoded message:
     ```jsx
     <div>Welcome Vishwas! You have 10 unread messages.</div>
     ```

2. **Adding a Prop:**
   - Modify the `Greet` component to accept a `name` prop:
     ```jsx
     function Greet({ name }) {
         return (
             <div>Good morning, {name}! You have 10 unread messages.</div>
         )
     }
     ```

3. **TypeScript Error:**
   - TypeScript will raise an error because the type of `props` is not defined:
     ```
     Parameter 'props' implicitly has an 'any' type.
     ```

4. **Defining Prop Types:**
   - Use the `type` keyword to define the shape of the props:
     ```typescript
     type GreetProps = {
         name: string;
     }
     ```
   - Inform TypeScript about the prop type in the component:
     ```typescript
     function Greet({ name }: GreetProps) {
         return (
             <div>Good morning, {name}! You have 10 unread messages.</div>
         )
     }
     ```

5. **Benefits of Typing Props:**
   - **Autocomplete:** When typing `props.` in the component, the IDE suggests possible properties, reducing errors and improving speed.
   - **Type Safety:** TypeScript catches incorrect prop types during development, preventing runtime errors. For example, passing a number instead of a string to `name` will cause an error:
     ```
     Type 'number' is not assignable to type 'string'.
     ```

6. **Types vs. Interfaces:**
   - While both `types` and `interfaces` can be used for defining prop types, the tutorial recommends using `types` for easier understanding and consistency. There is minimal difference between them in recent TypeScript versions.

### Example Code
Here is the complete example of the `Greet` component with TypeScript prop types:
```typescript
type GreetProps = {
    name: string;
}

function Greet({ name }: GreetProps) {
    return (
        <div>Good morning, {name}! You have 10 unread messages.</div>
    )
}

export default Greet;
```

### Conclusion
This tutorial covered the basics of adding TypeScript types to React component props. Proper typing enhances code readability, provides better tooling support, and catches errors early in the development process. In the next part, we will explore more complex prop types to further solidify our understanding.