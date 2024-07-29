# React TypeScript Tutorial - 19 - Generic Props

This documentation provides a detailed explanation of using generic props in React components with TypeScript. We will create a `List` component that can handle items of various types, as long as they adhere to a specified structure.

## List Component with Generic Props

The `List` component uses TypeScript generics to define the type of its props. This allows the component to be flexible and reusable for different types of data.

### Type Definition

```tsx
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
```

#### Explanation
- `ListProps<T>`: A generic type that accepts a type parameter `T`.
- `items`: An array of type `T`.
- `onClick`: A function that takes a value of type `T` as an argument.

### Component Definition

```tsx
export const List = <T extends { id: number }>({
  items,
  onClick
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map(item => (
        <div key={item.id} onClick={() => onClick(item)}>
          {item.id}
        </div>
      ))}
    </div>
  );
};
```

#### Explanation
- `T extends { id: number }`: The type parameter `T` must have an `id` property of type `number`.
- The component renders a list of items. Each item is rendered inside a `div` element with an `onClick` handler.
- The `key` prop ensures that each item is uniquely identified.

## App Component Integration

The `App` component integrates the `List` component along with other example components.

### App Component

```tsx
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import Greet from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import Person from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { List } from './components/generics/List';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ];

  return (
    <div className="App">
      <Greet name={'Hal Jordan'} messageCnt={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Button handleClick={(e, id) => {
        console.log('Button clicked', e, id);
      }} />
      <Input value='' handleChange={e => console.log(e)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Private isLoggedIn={true} component={Profile} />
      <DomRef />
      <MutableRef />
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
    </div>
  );
}

export default App;
```

#### Explanation
- The `App` component includes various other components to demonstrate a range of React features and TypeScript integration.
- The `List` component is used with a list of items, each having an `id`, `first`, and `last` name.
- The `onClick` handler for the `List` component logs the clicked item to the console.

## Detailed Explanation

### Using Generics in React Components

1. **Type Definition**
   - `ListProps<T>` defines the type of the props for the `List` component using a generic parameter `T`.
   - This makes the `List` component flexible and reusable for any type that meets the requirements.

2. **Component Definition**
   - `T extends { id: number }` ensures that the items in the list have an `id` property, which is used as the key for rendering the list.

3. **App Component Integration**
   - The `List` component is integrated into the `App` component and used with a specific type of items (objects with `id`, `first`, and `last` properties).
   - The `onClick` handler demonstrates how to handle item clicks, showcasing the use of generics in event handlers.

### Key Points

- **Flexibility**: Using generics allows the `List` component to be reused with different types of items, improving code reusability and maintainability.
- **Type Safety**: TypeScript ensures that the items passed to the `List` component conform to the expected structure, preventing runtime errors.
- **Event Handling**: The generic `onClick` handler demonstrates how to work with generics in event handling, ensuring type safety.

This detailed documentation covers how to effectively use generic props in React components with TypeScript, providing flexibility and type safety.