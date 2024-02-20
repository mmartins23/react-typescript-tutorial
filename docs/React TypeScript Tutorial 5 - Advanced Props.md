# React TypeScript Tutorial - 5 - Advanced Props

In this example, you've created a React functional component named `Person` that takes a prop named `name` of type `PersonProps`. The `PersonProps` type defines a property named `name`, which is an object containing `first` and `last` properties, both of type string.

Here's a breakdown of your code:

1. **Type Definition (`PersonProps`):**
   ```typescript
   type PersonProps = {
     name: {
       first: string;
       last: string;
     }
   }
   ```

   You've defined a type `PersonProps` which specifies that the `name` prop should be an object with `first` and `last` properties, both of type string.

2. **Functional Component (`Person`):**
   ```typescript
   export default function Person({ name }: PersonProps) {
     return (
       <div>
         <h2>{name.first} {name.last}</h2>
       </div>
     )
   }
   ```

   - The `Person` component receives the `name` prop using destructuring directly in the function parameters.
   - It then renders the `first` and `last` properties of the `name` object inside an `<h2>` element, displaying the full name.

This example showcases using more complex structures as props, ensuring that the `name` prop is an object with specific properties. TypeScript helps catch potential errors and provides better development assistance by enforcing such type constraints.

***

In this example, you've created a React functional component named `PersonList` that takes a prop named `names` of type `PersonListProps`. The `PersonListProps` type defines a property named `names`, which is an array of objects where each object has `first` and `last` properties, both of type string.

Here's a breakdown of your code:

1. **Type Definition (`PersonListProps`):**
   ```typescript
   type PersonListProps = {
     names: {
       first: string;
       last: string;
     }[];
   }
   ```

   You've defined a type `PersonListProps` which specifies that the `names` prop should be an array of objects, where each object has `first` and `last` properties, both of type string.

2. **Functional Component (`PersonList`):**
   ```typescript
   export default function PersonList({ names }: PersonListProps) {
     return (
       <div>
         {names.map(name => <h2 key={`${name.first}-${name.last}`}>{name.first} {name.last}</h2>)}
       </div>
     )
   }
   ```

   - The `PersonList` component receives the `names` prop using destructuring directly in the function parameters.
   - It then uses the `map` function to iterate over the `names` array, rendering an `<h2>` element for each name object.
   - The `key` prop is added to each `<h2>` element to provide a unique identifier for React's reconciliation process. In this case, a combination of `first` and `last` properties is used for the key.

This example demonstrates how to work with an array of objects as props and render each item in the array. The use of TypeScript ensures that the structure of each object in the array adheres to the specified type.

***