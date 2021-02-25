---
title: Go 변수와 상수
categories:
    - Go
tags:
    - Go
---

## 변수

변수는 Go 키워드 var를 사용하여 선언한다. var 키워드 뒤에 변수명을 적고, 그 뒤에 변수 타입을 적는다.

```go
var a int
```

변수 선언문에서 변수 초기값을 할당할 수도 있다.

```go
var a int = 0
var b float32 = 11.0
```

일단 선언된 변수는 그 뒤의 문장에서 해당 타입의 값을 할당할 수 있다.

```go
a = 10
f = 12.0
```

만약 선언된 변수가 Go 프로그램 내에서 사용되지 않는다면, 에러를 발생시킨다.

동일한 타입의 변수가 여러개 있을 경우, 변수들을 나열하고 마지막에 타입을 한번만 지정할 수 있다.

```go
var a, b, c int
```

마찬가지로 복수 변수들이 선언된 상황에서 초기값을 지정할 수 있다. 초기값은 순서대로 변수에 할당된다.

```go
var a, b, c int = 1, 2, 3
```

변수를 선언하면서 초기값을 지정하지 않으면, Go는 0을 기본적으로 할당한다.

숫자형에는 0, bool타입에는 false, string타입에는 ""(빈문자열)을 할당한다.

변수를 선언하는 또 다른 방식으로 Short Assignment Statement ( := ) 를 사용할 수 있다. var i =1을 쓰는 대신 i:=1 이라고 var를 생략하고 사용할 수 있다. 하지만 이러한 표현은 함수 내에서만 사용할 수 있고, 함수 밖에서는 var를 사용해야한다.

## 상수

상수는 Go 키워드 const를 사용하여 선언한다. const 키워드 뒤에 상수명을 적고, 그 뒤에 상수타입, 그리고 상수값을 할당한다.

```go
const a int = 10
const b string = "Hello world"
```

Go에서는 할당되는 값을보고 그 타입을 추론하는 기능이 자주 사용된다. 위의 경우 타입 int, string을 생략하면 Go에서 자동으로 그 타입을 추론하게 된다.

```go
const a = 10
const b = "Hello world"
```

여러 개의 상수들을 묶어서 지정할 수 있는데, 아래와 같이 괄호 안에 상수들을 나열하여 사용할 수 있다.

```go
const (
		Hello = "Hello"
		world = "world"
		Go = "Go"
)
```

상수값을 0부터 순차적으로 부여하기 위해 iota라를 identifier를 사용할 수 있다.

```go
const (
		a = iota // 0
		b        // 1
		c        // 2
)
```

## 3. Go 키워드

Go 프로그래밍 언어는 다음과 같은 25개의 예약 키워드들을 갖는다. Go 키워드들은 변수명, 상수명, 함수명 등의 identifier로 사용할 수 없다.

```go
break     default      func     interface   select
case      defer        go       map         struct
chan      else         goto     package     switch
const     fallthrough  if       range       type
continue  for          import   return      var
```
