## React TypeScript Tutorial - 8 - Prop Types and Tips

In this tutorial, we will cover three important tips related to handling props and types in React with TypeScript.

### Tip 1: Destructuring Props

When defining a component, you can destructure props directly in the function signature. This approach can make the code cleaner and more readable.

- **Before**: Accessing properties through `props` object.
  ```tsx
  const Input = (props: InputProps) => {
      return <input type="text" value={props.value} onChange={props.handleChange} />
  }
  ```

- **After**: Destructuring `value` and `handleChange` from `props`.
  ```tsx
  const Input = ({ value, handleChange }: InputProps) => {
      return <input type="text" value={value} onChange={handleChange} />
  }
  ```

### Tip 2: Exporting Types

For better organization, especially in larger components, move your type definitions to a separate file and import them as needed.

- **Before**: Type defined at the top of the component file.
  ```tsx
  type PersonProps = {
      name: {
          first: string;
          last: string;
      }
  }

  const Person = ({ name }: PersonProps) => {
      return <div>{name.first} {name.last}</div>
  }
  ```

- **After**: Type moved to a separate file (`person.types.ts`).
  ```tsx
  // person.types.ts
  export type PersonProps = {
      name: {
          first: string;
          last: string;
      }
  }

  // person.tsx
  import { PersonProps } from './person.types';

  const Person = ({ name }: PersonProps) => {
      return <div>{name.first} {name.last}</div>
  }
  ```

### Tip 3: Reusing Types

Extract common types to be reused across multiple components. This ensures reusability and avoids duplication.

- **Before**: Types defined separately in each file.
  ```tsx
  type Name = {
      first: string;
      last: string;
  }

  type PersonProps = {
      name: Name;
  }

  type PersonListProps = {
      names: Name[];
  }
  ```

- **After**: Common type extracted and reused.
  ```tsx
  // person.types.ts
  export type Name = {
      first: string;
      last: string;
  }

  export type PersonProps = {
      name: Name;
  }

  export type PersonListProps = {
      names: Name[];
  }

  // person.tsx
  import { PersonProps } from './person.types';

  const Person = ({ name }: PersonProps) => {
      return <div>{name.first} {name.last}</div>
  }

  // personList.tsx
  import { Name, PersonListProps } from './person.types';

  const PersonList = ({ names }: PersonListProps) => {
      return (
          <div>
              {names.map(name => (
                  <div key={name.first}>{name.first} {name.last}</div>
              ))}
          </div>
      )
  }
  ```

### Conclusion

By following these tips, you can make your TypeScript code in React applications more organized, maintainable, and reusable. Destructuring props, exporting types to separate files, and reusing types across multiple components are essential practices for clean and efficient code. Thank you for watching, and make sure to subscribe to the channel for more tips and tutorials!