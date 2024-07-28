# TypeScript Tutorial - 13 - useReducer Strict Action Types

## Introduction

In this tutorial, we enhance our previous `useReducer` hook implementation by strictly typing the action types to prevent invalid actions. This ensures our reducer only handles predefined actions, enhancing type safety and preventing runtime errors.

## Problem with Loose Action Types

In the previous implementation, the action type was set to `string`, which allowed any string to be dispatched, even invalid ones like `'reset'`. This required handling unexpected actions in the reducer function's default case. However, this is not ideal for strict type safety.

## Solution: Template Literal Types

### Step-by-Step Guide

### Define Strict Action Types

1. **Define State and Initial State**:
   - Define the `CounterState` type with a `count` property and set the initial state.

   ```tsx
   type CounterState = {
     count: number;
   };

   const initialState: CounterState = { count: 0 };
   ```

2. **Define Action Types with Template Literals**:
   - Use template literal types to strictly define valid action types.

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

3. **Update Reducer Function**:
   - Implement the reducer function to handle these strict action types.

   ```tsx
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

### Update Counter Component

4. **Implement Counter Component**:
   - Use the `useReducer` hook in the `Counter` component and dispatch actions with strict types.

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

### Handle Optional Payload

5. **Address Optional Payload Issue**:
   - Make `payload` optional in the `UpdateAction` type.
   - Ensure `payload` is present when needed.

   ```tsx
   type UpdateAction = {
     type: 'increment' | 'decrement';
     payload?: number;
   };

   function reducer(state: CounterState, action: CounterAction): CounterState {
     switch (action.type) {
       case 'increment':
         return { count: state.count + (action.payload || 0) };
       case 'decrement':
         return { count: state.count - (action.payload || 0) };
       case 'reset':
         return initialState;
       default:
         return state;
     }
   }
   ```

### Strict Action Types Using Discriminated Unions

6. **Use Discriminated Unions for Strict Action Types**:
   - Separate `UpdateAction` and `ResetAction` for stricter typing.

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

### Benefits of Strict Action Types

- **Type Safety**: Prevents invalid actions from being dispatched.
- **Better Developer Experience**: Autocomplete and type checking help catch errors early.
- **Clearer Code**: Explicit action types make the code more readable and maintainable.

## Conclusion

By using template literals and discriminated unions, we can strictly type our actions in the `useReducer` hook, enhancing type safety and preventing runtime errors. This approach ensures our reducer only handles valid actions, leading to more robust and maintainable code.

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

By following this approach, you can ensure that your `useReducer` hooks are typed correctly, providing a more robust and error-resistant codebase.