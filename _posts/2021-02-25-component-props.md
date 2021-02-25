---
title: Component & Props
categories:
    - React
tags:
    - React
---

## Component

Component란 재사용 가능한 UI 단위이다.

컴포넌트는 함수랑 비슷하다. React 컴포넌트에서는 input을 Props라 말하고 return은 보여져야할 React요소가 return된다.

## Component 만들기

### 함수로 컴포넌트 구현

```jsx
function Welcome(props) {
    return <h1>hello, {props.name}</h1>;
}
```

### class로 컴포넌트 구현

class로 컴포넌트를 만들려면 `React.Component` 를 extend해서 생성한다. 컴포넌트를 생성할 때 `render()` 메서드는 무조건 정의해야하고, return도 해주어야한다.

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

## Component 사용

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="A" />
            <Welcome name="B" />
            <Welcome name="C" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementByID('root'));
```
