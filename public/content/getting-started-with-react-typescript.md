# Getting Started with React and TypeScript

React is a popular JavaScript library for building user interfaces, and TypeScript is a strongly typed programming language that builds on JavaScript. Together, they provide a powerful combination for developing robust web applications.

## Why TypeScript with React?

TypeScript adds static type checking to JavaScript, which can help catch errors during development. When used with React, it provides:

- Better IDE support with autocompletion
- Type checking for props and state
- Early detection of common mistakes
- Improved code documentation

## Setting Up a New Project

You can create a new React application with TypeScript using Create React App:

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

## Basic Component with TypeScript

Here's a simple React component written in TypeScript:

```tsx
import React, { useState } from 'react';

interface GreetingProps {
  name: string;
  initialCount?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Greeting;
```

## Typing Hooks

TypeScript works well with React hooks. Here are some examples:

### useState

```tsx
const [user, setUser] = useState<User | null>(null);
```

### useEffect

```tsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data: ApiResponse = await response.json();
    setData(data);
  };
  
  fetchData();
}, []);
```

## Conclusion

Using TypeScript with React improves developer experience and code quality. It helps catch errors earlier in development and makes your codebase more maintainable, especially as it grows larger.

Start with simple type annotations and gradually increase complexity as you become more comfortable with TypeScript.
