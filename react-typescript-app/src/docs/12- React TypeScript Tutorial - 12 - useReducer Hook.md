# React TypeScript Tutorial - 12 - useReducer Hook

## Introduction

In this tutorial, we explore how to type the `useReducer` hook in React with TypeScript. The `useReducer` hook is preferred for managing complex state logic where the next state depends on the previous state.

## Example: Counter Component

### Initial Setup

1. **Create the Component File**:
   - Create a file named `counter.tsx` inside the `state` folder.
   - This file contains a simple counter component.

2. **Initial State and Reducer Function**:
   - Define the initial state and the reducer function to manage state updates.

### Step-by-Step Guide

### Define State and Actions

1. **Define State Type**:
   - Define the state type `CounterState` which includes a `count` property.

   ```tsx
   type CounterState = {
     count: number;
   };
   ```

2. **Define Action Types**:
   - Define action types for updating and resetting the counter.

   ```tsx
   type UpdateAction = {
     type: 'increment' | 'decrement';
     payload: number;
   };

   type ResetAction = {
     type: 'reset';
   };

   type CounterAction = UpdateAction | ResetAction;
   ```

### Reducer Function

3. **Implement Reducer Function**:
   - Implement the reducer function to handle different action types and update the state accordingly.

   ```tsx
   const initialState: CounterState = { count: 0 };

   function reducer(state: CounterState, action: CounterAction): CounterState {
     switch (action.type) {
       case 'increment':
         return { count: state.count + action.payload };
       case 'decrement':
         return { count: state.count - action.payload };
       case 'reset':
         return initialState;
       default:
         return state;
     }
   }
   ```

### Counter Component

4. **Create Counter Component**:
   - Use the `useReducer` hook in the `Counter` component, passing the reducer function and initial state.

   ```tsx
   import { useReducer } from 'react';

   export const Counter = () => {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
       <>
         Count: {state.count}
         <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
           Increment 10
         </button>
         <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
           Decrement 10
         </button>
         <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
       </>
     );
   };
   ```

### Explanation

- **State and Action Types**: 
  - The `CounterState` type defines the structure of the state.
  - The `CounterAction` type includes possible actions: `UpdateAction` and `ResetAction`.

- **Reducer Function**: 
  - The reducer function updates the state based on the action type.
  - Handles `increment`, `decrement`, and `reset` actions.

- **useReducer Hook**: 
  - The `useReducer` hook is used to manage state and dispatch actions in the `Counter` component.

### Type Checking

- **TypeScript Checks**:
  - TypeScript will enforce type checks for state and actions.
  - If an incorrect type is used, TypeScript will show errors.

```tsx
// Example Errors:
// dispatch({ type: false }); // Error: Type 'false' is not assignable to type 'string'.
// dispatch({ type: 'increment', payload: '10' }); // Error: Type 'string' is not assignable to type 'number'.
```

### Conclusion

Typing the `useReducer` hook in React with TypeScript involves defining types for state and actions, and ensuring the reducer function updates the state correctly based on these types. This helps maintain type safety and clarity in your React components.

### Full Component Code

```tsx
import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

type CounterAction = UpdateAction | ResetAction;

const initialState: CounterState = { count: 0 };

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
};
```