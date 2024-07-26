## React TypeScript Tutorial - 5 - Advanced Props

### Introduction
In this tutorial, we explore several advanced prop types when working with TypeScript in React. These include union types, children props, and optional props. By the end of this tutorial, you will have a better understanding of how to define and use these advanced types in your React components.

### Steps

#### 1. Union Types

- **Status Component:**
  - Create a `Status` component that conditionally renders messages based on a `status` prop.
  - Define `StatusProps` to allow only specific string literals (`'loading'`, `'success'`, `'error'`).

    ```tsx
    type StatusProps = {
        status: 'loading' | 'success' | 'error'
    }

    export const Status = ({ status }: StatusProps) => {
        let message;
        if (status === 'loading') {
            message = 'Loading...';
        } else if (status === 'success') {
            message = 'Data fetched successfully!';
        } else if (status === 'error') {
            message = 'Error fetching data';
        }
        return <h2>Status - {message}</h2>;
    }
    ```

- **Usage in `App` Component:**
  - Import and use the `Status` component with the `status` prop.
  
    ```tsx
    import { Status } from './components/Status';

    function App() {
        // Other code...

        return (
            <div className="App">
                {/* Other components */}
                <Status status='loading' />
            </div>
        );
    }

    export default App;
    ```

#### 2. Children Props

- **Heading Component:**
  - Create a `Heading` component that accepts `children` as a string prop.
  - Define the `HeadingProps` type.
  
    ```tsx
    type HeadingProps = {
        children: string;
    }

    export const Heading = ({ children }: HeadingProps) => {
        return <h2>{children}</h2>;
    }
    ```

- **Oscar Component:**
  - Create an `Oscar` component that accepts `children` as a `React.ReactNode`.
  - Define the `OscarProps` type.

    ```tsx
    type OscarProps = {
        children: React.ReactNode;
    }

    export const Oscar = (props: OscarProps) => {
        return <div>{props.children}</div>;
    }
    ```

- **Usage in `App` Component:**
  - Use the `Heading` and `Oscar` components, passing other components or text as children.
  
    ```tsx
    import { Heading } from './components/Heading';
    import { Oscar } from './components/Oscar';

    function App() {
        // Other code...

        return (
            <div className="App">
                {/* Other components */}
                <Heading>Placeholder text</Heading>
                <Oscar>
                    <Heading>Oscar goes to Dicaprio</Heading>
                </Oscar>
            </div>
        );
    }

    export default App;
    ```

#### 3. Optional Props

- **Greet Component:**
  - Modify the `Greet` component to make `messageCount` an optional prop.
  - Set a default value for `messageCount` if it's not provided.

    ```tsx
    type GreetProps = {
        name: string;
        messageCount?: number;
        isLoggedIn: boolean;
    }

    function Greet({ name, messageCount = 0, isLoggedIn }: GreetProps) {
        return (
            <div>
                {isLoggedIn 
                    ? `Good morning, ${name}! You have ${messageCount} unread messages.` 
                    : "Welcome Guest"}
            </div>
        )
    }

    export default Greet;
    ```

- **Usage in `App` Component:**
  - Use the `Greet` component with or without the `messageCount` prop.
  
    ```tsx
    import Greet from './components/Greet';

    function App() {
        // Other code...

        return (
            <div className="App">
                <Greet name="Hal Jordan" isLoggedIn={true} />
                <Greet name="Vishwas" messageCount={10} isLoggedIn={false} />
            </div>
        );
    }

    export default App;
    ```

### Conclusion
In this tutorial, we covered several advanced prop types:
- **Union Types** to restrict prop values to specific literals.
- **Children Props** to pass strings or other components as children.
- **Optional Props** to allow props to be optional with default values.

These advanced types enhance the robustness and clarity of your TypeScript React applications. In the next tutorial, we will look at passing events as props to a component with TypeScript. If you are enjoying these videos, please leave a like and subscribe to the channel. I'll see you in the next one!