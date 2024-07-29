# React TypeScript Tutorial - 16 - useRef Hook

In this tutorial, we will learn how to use the `useRef` hook in React with TypeScript. We will create two components, `DomRef` and `MutableRef`, to demonstrate the use of `useRef` for accessing DOM elements and mutable variables.

## Components Overview

### DomRef Component

This component demonstrates how to use `useRef` to access and manipulate a DOM element, such as an input field.

```tsx
// DomRef.tsx
import { useRef, useEffect } from 'react';

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
};
```

#### Explanation
- `useRef` is used to create a reference to an input element.
- The `useEffect` hook is used to focus on the input element when the component mounts.
- The `inputRef` variable is assigned to the `ref` attribute of the input element, allowing us to directly manipulate the DOM element.

### MutableRef Component

This component demonstrates how to use `useRef` to create a mutable reference that persists across renders. We use it to control a timer.

```tsx
// MutableRef.tsx
import { useState, useRef, useEffect } from 'react';

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
    }
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
```

#### Explanation
- `useState` is used to manage the timer state.
- `useRef` is used to create a mutable reference (`interValRef`) to store the interval ID.
- The `stopTimer` function clears the interval using the `interValRef`.
- `useEffect` is used to set up the interval when the component mounts and to clear the interval when the component unmounts.
- The timer value is displayed and updated every second.

## App Component

The `App` component is the root component of our application. It imports and uses the `DomRef` and `MutableRef` components along with other example components.

```tsx
// App.tsx
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
    </div>
  );
}

export default App;
```

## Detailed Explanation

### Using `useRef` with DOM Elements

1. **DomRef Component**
   - `useRef<HTMLInputElement>(null!)` creates a reference to an HTML input element, initialized to `null`.
   - `useEffect` is used to focus on the input element when the component mounts.
   - The `inputRef` reference is passed to the `ref` attribute of the input element, allowing us to directly interact with the DOM element.

### Using `useRef` for Mutable Variables

2. **MutableRef Component**
   - `useRef<number | null>(null)` creates a mutable reference to store the interval ID, initialized to `null`.
   - `useEffect` sets up an interval that updates the `timer` state every second.
   - The `stopTimer` function clears the interval using the `interValRef`.
   - The component displays the current timer value and provides a button to stop the timer.

### App Component Integration

- **Context Providers**: Wrapping components with `ThemeContextProvider` and `UserContextProvider` to provide context values.
- **Conditional Rendering**: Using the `Private` component to conditionally render the `Profile` component based on the `isLoggedIn` prop.
- **useRef Demonstration**: Integrating `DomRef` and `MutableRef` components to demonstrate the use of `useRef` for DOM manipulation and managing mutable references.

### Key Points

- **Type Safety**: TypeScript ensures type safety, preventing common mistakes such as null references and incorrect prop types.
- **DOM Manipulation**: `useRef` provides a way to directly interact with DOM elements, bypassing the React state and lifecycle.
- **Mutable References**: `useRef` is useful for storing mutable values that persist across renders without causing re-renders.

This detailed explanation covers how to effectively use the `useRef` hook in React with TypeScript for both DOM manipulation and managing mutable references.