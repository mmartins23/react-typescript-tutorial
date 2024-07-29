# React TypeScript Tutorial - 21 - Template Literals and Exclude

This documentation provides a detailed explanation of how to use template literal types and the `Exclude` utility type in TypeScript, demonstrated with a `Toast` notification component that restricts its `position` prop.

## Introduction to Template Literal Types

Template literal types in TypeScript build upon string literal types, enabling the creation of many string combinations using unions. This is particularly useful when you need to combine values to create new values dynamically.

### Example Scenario: Toast Notification

For this example, we have a `Toast` notification component that can pop up in various positions on the screen. The `position` prop needs to be restricted to specific values, such as `top-left`, `bottom-center`, and so on. 

## Implementing the Toast Component

### Type Definitions

We begin by defining horizontal and vertical position types:

```tsx
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';
```

#### Explanation
- **HorizontalPosition**: Can be either `left`, `center`, or `right`.
- **VerticalPosition**: Can be either `top`, `center`, or `bottom`.

Next, we combine these types using template literals to form the possible `position` values for the `Toast` component.

### Combining Types with Template Literals

We create a new type `ToastProps` which includes the combined values and uses the `Exclude` utility to remove invalid combinations.

```tsx
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center';
};
```

#### Explanation
- **`${HorizontalPosition}-${VerticalPosition}`**: Combines `HorizontalPosition` and `VerticalPosition` to form strings like `left-top`, `center-bottom`, etc.
- **Exclude**: Removes the invalid combination `center-center`.
- **| 'center'**: Adds `center` as a valid position separately.

### Toast Component Definition

```tsx
export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
```

#### Explanation
- The `Toast` component accepts `position` as a prop and displays it.

### Ensuring Type Safety

TypeScript ensures that only valid combinations can be used. For instance, `center-center` is excluded, and if attempted, TypeScript will throw an error.

### App Component Integration

We integrate the `Toast` component into the `App` component to demonstrate its usage.

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
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

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
      <RandomNumber value={10} isPositive />
      <Toast position={'center'} />
      <Toast position={'left-center'} />
    </div>
  );
}

export default App;
```

#### Explanation
- The `App` component includes various other components for demonstration.
- The `Toast` component is invoked with valid positions like `center` and `left-center`.

## Summary

### Key Points

- **Template Literal Types**: Combine string literal types dynamically to create new types.
- **Type Safety**: Ensures only valid combinations are allowed, reducing runtime errors.
- **Exclude Utility**: Excludes specific invalid combinations from the allowed types.
- **Component Flexibility**: Despite restrictions, components remain flexible and type-safe.

### Practical Usage

- Use template literal types to dynamically create type-safe string combinations.
- Leverage the `Exclude` utility to refine and control allowed values.
- Integrate these concepts into React components to enforce prop validation and improve type safety.

This tutorial demonstrates how to use template literal types and the `Exclude` utility in TypeScript to create type-safe and restricted props in React components, enhancing both developer experience and application reliability.