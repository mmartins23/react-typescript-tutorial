# React TypeScript Tutorial - 18 - Component Prop

## Introduction

In this tutorial, we explore how to use component props in React with TypeScript. We will implement a `Private` component that conditionally renders a `Profile` component based on the user's login status. If the user is not logged in, the `Private` component will render a `Login` component instead.

## Components Overview

### Login Component

This component is a simple stateless functional component that displays a login message.

```tsx
// Login.tsx
export const Login = () => {
  return (
    <div>Please login to continue</div>
  );
}
```

### Profile Component

This component accepts a prop `name` and displays a personalized message. The prop type is defined using TypeScript.

```tsx
// Profile.tsx
export type ProfileProps = {
  name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>Private Profile Component. Name is {name}</div>
  );
}
```

### Private Component

This component conditionally renders the `Profile` component if the user is logged in. Otherwise, it renders the `Login` component. The `Private` component accepts two props: `isLoggedIn` (a boolean indicating if the user is logged in) and `component` (a React component type).

```tsx
// Private.tsx
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Wade Wilson" />;
  } else {
    return <Login />;
  }
}
```

## App Component

The `App` component is the root component of our application. It imports and uses the `Private` component along with other example components.

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
    </div>
  );
}

export default App;
```

## Detailed Explanation

### TypeScript Component Types

1. **Profile Component**
   - `ProfileProps` defines the type for props.
   - The `Profile` component destructures the `name` prop and uses it in the JSX.

2. **Private Component**
   - `PrivateProps` defines the types for `isLoggedIn` and `component` props.
   - `React.ComponentType<ProfileProps>` ensures the component passed to `Private` has the same props as `Profile`.
   - Depending on `isLoggedIn`, it conditionally renders either the `Profile` component (with a hardcoded `name` prop) or the `Login` component.

### App Component Usage

- **Context Providers**: The `ThemeContextProvider` and `UserContextProvider` wrap the components that need access to these contexts.
- **Conditional Rendering**: The `Private` component is used to render the `Profile` component only if the user is logged in.

### Key Points

- **Type Safety**: TypeScript ensures that components receive the correct props, catching errors at compile time.
- **Conditional Rendering**: The `Private` component demonstrates how to conditionally render components based on prop values.
- **Component Reusability**: By using `React.ComponentType`, the `Private` component can be reused with any component that matches the expected prop types.

This detailed explanation helps understand how to use TypeScript to enforce type safety in React components, particularly when dealing with conditional rendering and component props.