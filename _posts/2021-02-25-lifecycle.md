---
title: Component의 Lifecycle
categories:
    - React
tags:
    - React
---

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/847f6771-4a65-4f24-ab42-d5b41c252500/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/847f6771-4a65-4f24-ab42-d5b41c252500/Untitled.png)

`render`, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 등의 함수는 `React.Component` class 에서 제공하는 메서드이다. 컴포넌트를 만들 때 class로 생성하면 위의 메서드를 사용할 수 있고, 컴포넌트가 lifecycle에 따라 각자의 메서드가 호출된다.

```jsx
class Clock extends React.Component {
    constructor() {
        super();

        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
```

1. `ReactDOM.render()` 에서 첫 인자로 `<Clock />` 을 넘길 때, React는 Clock 컴포넌트의 `constructor` 를 호출한다.
2. Clock에서 초기 시간이 필요하므로 `this.state` 에 현재 시간으로 초기화 한다.
3. Clock 컴포넌트의 `render()` 메서드가 호출된다.
4. DOM에 `render()` 의 return된 요소가 추가되면 `componentDidMount` 함수가 호출된다.
5. Clock 컴포넌트의 `tick` 메서드가 매 초 호출될 수 있도록 timer를 추가한다.
6. 매 초 브라우저가 `tick` 메서드를 호출하면서 [`this.state.date`](http://this.state.date) 값이 변한다.
7. state가 변경되면 원래 `componentDidUpdate` 함수가 호출되지만, 위에서 정의하지 않았으므로 `render()` 가 다시 호출되면서 바뀐 부분이 변경된다.
8. DOM에서 Clock 컴포넌트가 삭제될 때, `componentWillUnmount` 가 호출되고 timer도 같이 멈추게 된다.
