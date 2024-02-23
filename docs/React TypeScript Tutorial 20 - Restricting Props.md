# React TypeScript Tutorial 20 - Restricting Props

It seems like you've provided a React component named `RandomNumber` that uses TypeScript to define and restrict its props based on different number types. Let me explain the code:

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

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
      {isZero && 'zero'}
    </div>
  );
};
```

Here's a breakdown of the code:

1. **Type Definitions:**
   - `RandomNumberType` defines a type with a `value` property of type `number`.
   - `PositiveNumber`, `NegativeNumber`, and `Zero` are types that extend `RandomNumberType` and add specific boolean properties (`isPositive`, `isNegative`, and `isZero` respectively).
     - Each type restricts the presence of other boolean properties using `never`. For example, `isPositive?: never` in `NegativeNumber` means that `isPositive` cannot be present in `NegativeNumber`.

2. **Union Type `RandomNumberProps`:**
   - `RandomNumberProps` is a union type that can be either `PositiveNumber`, `NegativeNumber`, or `Zero`.

3. **Component Function (`RandomNumber`):**
   - `RandomNumber` is a functional component that takes the `RandomNumberProps` as its props.
   - It renders a `<div>` with the provided `value` and conditionally renders the string 'positive', 'negative', or 'zero' based on the boolean properties (`isPositive`, `isNegative`, `isZero`).

4. **Usage Example:**
   ```tsx
   <RandomNumber value={10} isPositive />
   ```
   - An example of using the `RandomNumber` component where the `value` is set to `10` and the `isPositive` prop is provided.

This component allows you to specify the type of number (positive, negative, or zero) through its props, providing a way to enforce specific conditions on the properties.