---
path: "/react-memo"
date: "2020-06-22"
title: "React Memo"
titleSlug: "react-memo"
thumbnail: "react.svg"
---

## How to prevent re-renders on React functional components with `React.memo()`

If you’re using a React class component (and you should be) you can use the `shouldComponentUpdate` method or a `React.PureComponent` class extension. First, a couple basic things about React functional components.

### Memoization a React functional component with React.memo()

```javascript
// Original script
const Greeting = props => {
  console.log('Greeting Comp render');
  return <h1>Hi {props.name}!</h1>
};

function App() {
  const [counter, setCounter] = React.useState(0);

  // Update state variable `counter`
  // every 2 seconds.
  React.useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
  }, []);

  console.log('App render')
  return <Greeting name="Ruben" />
}
```

Update the functional `Greeting` component:

```javascript
const Greeting = React.memo(props => {
  console.log("Greeting Comp render");
  return <h1>Hi {props.name}!</h1>;
});
```

Note: **Don’t confuse `React.memo()` vs `React.useMemo()`**

#### References

- [How to prevent re-renders on React functional components with `React.memo()`](https://linguinecode.com/post/prevent-re-renders-react-functional-components-react-memo)
