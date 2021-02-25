---
title: Go 연산자
categories:
    - Go
tags:
    - Go
---

## 산술연산자

산술연산자는 사칙연산자(+, -, \*, /, % (Modulus))와 증감연산자(++, --)를 사용한다.

```go
package main

import "fmt"

func main() {
  a:=5
  b:=10
  c:=(a+b) / 5
  fmt.Println(c) // 3
}
```

## 관계연산자

관계연산자는 서로의 크기를 비교하거나 동일함을 체크하는데 사용된다.

```go
package main

import "fmt"

func main() {
  a:=5
  b:=10
  fmt.Println(a==b) // false
  fmt.Println(a!=b) // true
  fmt.Println(a<=b) // true
}
```

## 논리연산자

논리연산자는 AND, OR, NOT을 표현하는데 사용된다.

```go
A && B
A || !(C && B)
```

## Bitwise연산자

Bitwise연산자는 비트단위 연산을 위해 사용되는데, 바이너리 AND, OR, XOR과 바이너리 쉬프트 연산자가 있다.

```go
package main

import "fmt"

func main() {
  a:=3
  b:=2
  fmt.Printf("%08b", a&b) // 00000010
  fmt.Printf("%08b", a|b) // 00000011
  fmt.Printf("%08b", a^b) // 00000001
	fmt.Printf("%08b", a<<2)// 00001100
	fmt.Printf("%08b", a<<1)// 00000001
}
```

## 할당연산자

할당연산자는 값을 할당하는 = 연산자 외에 사칙연산, 비트연산을 축약한 +=, &=, <<= 같은 연산자들도 있다.

```go
a = 100
a *= 10
a >>=2
a |= 1
```

## 포인터연산자

포인터연산자는 &혹은 \*을 사용하여 해당 변수의 주소를 얻어내거나 이를 반대로 Dereference 할 때 사용한다. Go는 비록 포인터연산자를 제공하지만 포인터 산술 즉 포인터에 더하고 빼는 기능은 제공하지 않는다.

```go
package main

import "fmt"

func main() {
  a:=10
  p:=&a // a의 주소를 할당
  fmt.Println(*p) // p가 가르키는 주소에 있는 실제 내용출력
}
```
