# React TypeScript Tutorial 18 - Component Prop

It seems like you've provided three React components: `Profile`, `Private`, and `Login`. Let me break down each component for you:

1. **Profile Component (Profile.tsx):**
   ```tsx
   export type ProfileProps = {
       name: string;
   }

   export default function Profile({ name }: ProfileProps) {
       return (
           <div>Private Profile Component. Name is {name}</div>
       );
   }
   ```
   - Defines a `Profile` component that takes a prop `name` of type string.

2. **Private Component (Private.tsx):**
   ```tsx
   import Login from "./Login";
   import { ProfileProps } from "./Profile";

   type PrivateProps = {
       isLoggedIn: boolean;
       component: React.ComponentType<ProfileProps>;
   }

   export default function Private({ isLoggedIn, component: Component }: PrivateProps) {
       if (isLoggedIn) {
           return <Component name={'John'} />
       } else {
           return <Login />
       }
   }
   ```
   - Imports `Login` component and `ProfileProps` type from their respective files.
   - Defines a `Private` component that takes `isLoggedIn` (a boolean) and `component` (a React component that takes `ProfileProps`).
   - If `isLoggedIn` is true, it renders the specified component (`<Component name={'John'} />`), passing a name prop.
   - If not logged in, it renders the `Login` component.

3. **Login Component (Login.tsx):**
   ```tsx
   export default function Login() {
       return (
           <div>Please login to continue</div>
       );
   }
   ```
   - Defines a simple `Login` component that renders a message prompting the user to login.

These components seem to work together to conditionally render either the `Profile` component with a specified name or the `Login` component based on the value of the `isLoggedIn` prop in the `Private` component.