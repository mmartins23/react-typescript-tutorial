# React TypeScript Tutorial 19 - Generic Props

It looks like you have a TypeScript React component called `List` that utilizes generics to specify the structure of the items in the list. Let me break down the code:

```tsx
// List.tsx

type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
}

export const List = <T extends { id: number, first: string, last: string }>({
    items,
    onClick
}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map(item => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.first} {item.last}
                    </div>
                );
            })}
        </div>
    );
};
```

1. **Type Definition (`ListProps<T>`):**
   - `ListProps` is a generic type that takes a type parameter `T`.
   - It has two properties:
      - `items`: An array of items of type `T`.
      - `onClick`: A function that takes a value of type `T` and returns `void`.

2. **List Component Function:**
   - `List` is a functional component that takes a generic type `T` as its type parameter. The generic constraint `{ id: number, first: string, last: string }` specifies that the items in the list must have these properties.
   - It destructures the `items` and `onClick` props from the `ListProps<T>` type.
   - The component returns a JSX structure with a title (`<h2>`) and a list of items.
   - The `items.map` function is used to iterate over each item in the array. For each item, a `<div>` is rendered with a key set to `item.id`.
   - The `onClick` handler is attached to each `<div>`, calling the `onClick` function with the corresponding item.
   - The content of the `<div>` is a combination of `item.first` and `item.last`.

3. **Importing the List Component:**
   ```tsx
   // Importing the List component in another file
   import { List } from './components/generics/List';
   ```

   This line shows how you would import the `List` component in another file.

4. **Usage Example:**
   ```tsx
   // Example usage of the List component
   <List
       items={[
           { id: 1, first: 'Bruce', last: 'Wayne' },
           { id: 2, first: 'Clark', last: 'Kent' },
           { id: 3, first: 'Princess', last: 'Diana' }
       ]}
       onClick={(item) => console.log(item)}
   />
   ```

   An example of how you might use the `List` component, passing an array of items with the specified properties and providing an `onClick` function.

This component enforces that the items in the list must have specific properties (`id`, `first`, and `last`), providing type safety.