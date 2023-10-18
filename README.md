# Understanding the Fundamentals in React

- A refresher course

# useCallback

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.

The useCallback and useMemo Hooks are similar.
The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

- One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

`referential equality`.

Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

- To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

# useReducer

The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

- The useReducer Hook returns the current stateand a dispatchmethod.

# useRef

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

The useRef Hook can also be used to keep track of previous state values.

- useRef() only returns one item. It returns an Object called current.

# UseMemo Hook

The React useMemo Hook returns a memoized value.

The useMemo Hook only runs when one of its dependencies update.

This can improve performance.

The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
