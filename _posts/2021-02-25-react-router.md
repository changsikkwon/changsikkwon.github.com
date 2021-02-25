---
title: React Router
categories:
    - React
tags:
    - React
---

## Routing

-   Routing이란 다른 경로(url 주소)에 따라 다른 View를 보여주는 것이다.
-   React 자체에는 이러한 기능이 내장되어 있지 않다.

### React가 framework가 아닌 library로 분류되는 이유

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/202f43c3-298e-4264-9441-101e2c023a43/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/202f43c3-298e-4264-9441-101e2c023a43/Untitled.png)

## React Router

CRA(Create React App)에 특별히 routing을 위한 로직이 들어있지 않기 때문에, 가장 인기있는 `react-router` 를 추가하여 routing을 구현하겠다.

### react-router 설치

```jsx
npm install react-router-dom --save
```

### Routes 컴포넌트 구현하기

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact paht="/signup" component={Signup} />
                    <Route exact path="/main" component={Main} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
```

### index.js

```jsx
ReactDOM.render(<Routes />, document.getElementByID('root'));
```

## Route 이동하기

Route 이동하는 방법은 두 가지가 있다.

1. <Link> 컴포넌트 사용
2. withRouterHOC로 구현

### <Link> 컴포넌트 사용 방법

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Link to="/signup">회원가입</Link>
            </div>
        );
    }
}

export default Login;
```

-   `Route.js` 에서 설정한 path로 이동하는 첫 번째 방법은 `<Link>` 컴포넌트를 사용하는 방법이다.
-   `react-router-dom` 에서 제공하는 `<Link>` 컴포넌트는 DOM에서 `<a>` 태그로 변환된다.
-   `<a>` 태그와 마찬가지로 `<Link>` 태그도 지정한 경로로 바로 이동 시켜주는 기능을 한다.
-   cf) `<a>` vs `<Link>`
    -   `<a>` : 외부 사이트로 이동하는 경우
    -   `<Link>` : 프로젝트 내에서 페이지 전환하는 경우

### withRouterHoc로 구현 방법

```jsx
import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    goToMain = () => {
        this.props.history.push('/signup');
    };

    render() {
        return (
            <div>
                <button className="loginBtn" onClick={this.goToMain}>
                    로그인
                </button>
            </div>
        );
    }
}

export default withRouter(Login);
```

-   `<Link />` 를 사용하지 않고 요소에 `onClick` 이벤트를 통해 페이지를 이동하는 방법도 있다.
-   `goToMain` 이라는 event handler에서 구현한 것 처럼 props 객체의 history에 접근해서 이동할 수 있다.
-   받은 history의 `push` 메서더의 인자로 `Routes.js` 에서 설정한 path를 넘겨주면, 해당 route로 이동할 수 있다.
-   이 컴포넌트에서 props에 route 정보를 받으려면 `export`하는 컴포넌트에 `withRouter`로 감싸주어야 한다.
-   이렇게 `withRouter` 와 같이 해당 컴포넌트를 감싸주는 것을 **HOC(Higher Order Component)** 라고 한다.

### 두 방법의 활용법

1. **<Link>**
    - 클릭 시 바로 이동하는 로직 구현 시에 사용한다.
    - ex) Nav Bar, Aside Menu, item list 페이지에서 item 클릭시 > 상세 페이지로 이동
2. **withRouterHOC**
    - 페이지 전환 시 추가로 처리해야 하는 로직이 있는 경우 withRouterHOC 방법으로 구현한다.
    - ex)
        - Backend API로 데이터 전송
        - User Data 인증/인가
        - response message
        - Case 1 : 회원 가입되어 있는 사용자 > 메인 페이지로 이동
        - Case 2 : 회원 가입이 되어 있지 않은 사용자 > Signup 페이지로 이동
