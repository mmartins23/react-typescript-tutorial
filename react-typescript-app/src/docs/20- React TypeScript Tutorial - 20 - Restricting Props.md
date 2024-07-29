# React TypeScript Tutorial - 20 - Restricting Props

This documentation provides a detailed explanation of how to restrict props in React components using TypeScript. We'll demonstrate this with a `RandomNumber` component that restricts its props to ensure consistent and valid usage.

## RandomNumber Component with Restricted Props

The `RandomNumber` component displays a number along with its type (positive, negative, or zero). To ensure only one type is provided at a time, we restrict the props using TypeScript.

### Type Definitions

We define several types to ensure only valid combinations of props can be passed to the component.

```tsx
type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;
```

#### Explanation
- **RandomNumberType**: Base type containing the `value` property.
- **PositiveNumber**: Extends `RandomNumberType` and adds `isPositive` property. Ensures `isNegative` and `isZero` are never present.
- **NegativeNumber**: Extends `RandomNumberType` and adds `isNegative` property. Ensures `isPositive` and `isZero` are never present.
- **Zero**: Extends `RandomNumberType` and adds `isZero` property. Ensures `isPositive` and `isNegative` are never present.
- **RandomNumberProps**: Union type that can be either `PositiveNumber`, `NegativeNumber`, or `Zero`.

### Component Definition

```tsx
export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
    </div>
  );
};
```

#### Explanation
- The `RandomNumber` component accepts `RandomNumberProps` which ensures only one of `isPositive`, `isNegative`, or `isZero` can be true at a time.
- It renders the `value` followed by its type based on the props provided.

## App Component Integration

The `App` component integrates the `RandomNumber` component along with other example components.

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
import { RandomNumber } from './components/restriction/RandomNumber';

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
    </div>
  );
}

export default App;
```

#### Explanation
- The `App` component includes various components to demonstrate different React and TypeScript features.
- The `RandomNumber` component is used with a `value` and `isPositive` prop to demonstrate the restricted props functionality.

## Detailed Explanation

### Restricting Props in React Components

1. **Type Definition**
   - Define a base type and several extended types to represent different valid states.
   - Use TypeScript’s union and intersection types to restrict props.

2. **Component Definition**
   - Accept props that conform to the restricted types.
   - Use conditional rendering to display different outputs based on the props provided.

3. **App Component Integration**
   - Demonstrate the usage of the component with restricted props in a larger application context.

### Key Points

- **Type Safety**: Ensures only valid combinations of props can be passed, preventing runtime errors and logical inconsistencies.
- **Conditional Rendering**: Uses TypeScript’s type system to conditionally render content based on the provided props.
- **Component Flexibility**: Despite the restrictions, the component remains flexible and can handle different valid states effectively.

This detailed documentation covers how to restrict props in React components using TypeScript, ensuring type safety and logical consistency while maintaining component flexibility.