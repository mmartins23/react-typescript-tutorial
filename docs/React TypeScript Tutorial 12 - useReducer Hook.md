# React TypeScript Tutorial 12 - useReducer Hook

In this example, you've used the `useReducer` hook to manage the state of a counter in a React functional component named `Counter`. The `useReducer` hook is particularly useful for managing complex state logic that involves multiple actions.

Here's a breakdown of your code:

1. **Importing `useReducer`:**
   ```javascript
   import { useReducer } from 'react';
   ```

   You import the `useReducer` hook from the React library.

2. **Type Definitions:**
   ```typescript
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
   ```

   You've defined TypeScript types for the state (`CounterState`) and the actions (`UpdateAction`, `ResetAction`, and `CounterAction`).

3. **Initial State and Reducer:**
   ```typescript
   const initialState = { count: 0 };

   function reducer(state: CounterState, action: CounterAction) {
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

   You've defined an initial state (`initialState`) and a reducer function (`reducer`) that specifies how the state should be updated based on different actions.

4. **Functional Component (`Counter`):**
   ```javascript
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

   - The `Counter` component uses the `useReducer` hook, passing the `reducer` function and the `initialState`. It returns the current state (`state`) and the `dispatch` function to trigger actions.

   - The component renders the current count and three buttons. Each button triggers a specific action (`increment`, `decrement`, or `reset`) by calling the `dispatch` function with the appropriate action object.

   This example demonstrates how to manage state with the `useReducer` hook in a React functional component.