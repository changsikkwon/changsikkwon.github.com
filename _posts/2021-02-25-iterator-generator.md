---
title: Iterator, Generator
categories:
    - Python
tags:
    - Python
---

## Iterator

list, set, dictionary와 같은 컬렉션이나 문자열과 같은 문자 Sequence 등은 for 문을 써서 하나씩 데이터를 처리할 수 있는데, 이렇게 하나하나 처리할 수 있는 컬렉션이나 Sequence 들을 Iterable 객체라 부른다.

```python
for n in [1,2,3,4,5]:
    print(n)

for c in "Hello World":
   print(c)
```

내장 함수 iter()는 "iter(iterable객체)"와 같이 사용하여 그 Iterable 객체의 iterator를 리턴한다. Iterable 객체에서 실제 Iteration을 실행하는 것은 iterator로서, iterator는 next 메서드를 사용하여 다음 요소를 가져온다. 만약 더이상 next 요소가 없으면 StopIteration Exception을 발생시킨다.

Iterator의 next 메서드로서 Python2에서는 "iterator객체.next()"를 사용하고, python 3에서는 "iterator객체.**next**()" 메서드를 사용한다. 또한, 버전에 관계없이 사용할 수 있는 방식으로 내장 함수 "next(iterator객체)"를 사용할 수 있다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/954a486a-780c-4af0-bb30-20c7a6f9994c/_2021-01-03__5.23.02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/954a486a-780c-4af0-bb30-20c7a6f9994c/_2021-01-03__5.23.02.png)

어떤 클래스를 Iterable하게 하려면, 그 클래스의 iterator를 리턴하는 `__iter__()` 메서드를 작성해야 한다. 이 `__iter__()` 메서드를 리턴하는 iterator는 동일한 클래스 객체가 될 수도 있고, 별도로 작성된 iterator 클래스의 객채가 될 수도 있다. 어떠한 경우든 Iterator가 되는 클래스는 `__next__()` 메서드를 구현해야 한다. 실제 for 루프에 Iterable 객체를 사용하면, 해당 Iterable의 `__iter__()` 메서드를 호출하여 iterator를 가져온 후 그 iterator의 `__next__()` 메서드를 호출하여 루프를 돌게 된다.

```python
class MyCollection:
    def __init__(self):
        self.size = 10
        self.data = list(range(self.size))

    def __iter__(self):
        self.index = 0
        return self

    def __next__(self):
        if self.index >= self.size:
            raise StopIteration

        n = self.data[self.index]
        self.index += 1
        return n

for i in MyCollection():
    print(i)
```

## Generator

Generator는 iterator의 특수한 한 형태이다.

Generator 함수는 함수안에 yield를 사용하여 데이터를 하나씩 리턴하는 함수이다. Generator 함수가 처음 호출되면, 그 함수 실행 중 처음으로 만나는 yield에서 값을 리턴한다.

Generator 함수가 다시 호출되면, 직전에 실행되었던 yield문 다음부터 다음 yield문을 만날 때까지 문장들을 실행하게 된다. 이러한 Generator 함수를 변수에 할당하면 그 변수는 generator 클래스 객체가 된다.

```python
def gen():
    yield 1
    yield 2
    yield 3

g = gen()
print(type(g)) # <class 'generator'>

n = g.__next__(); print(n) #1
n = g.__next__(); print(n) #2
n = g.__next__(); print(n) #3

#for 루프 사용 가능
for i in gen():
    print(i)
```

list나 set과 같은 컬렉션에 대한 iterator는 해당 컬렉션이 이미 모든 값을 가지고 있는 경우이나, Generator는 모든 데이터를 갖지 않은 상태에서 yield에 의해 하나씩만 데이터를 만들어 가져온다는 차이점이 있다. 이러한 Generator는 데이터가 무제한이어서 모든 데이터를 리턴할 수 없는 경우나, 데이터가 대량이어서 일부러 처리하는 것이 필요한 경우, 혹은 모든 데이터를 미리 계산하면 속도가 느려서 그때그때 on demand로 처리하는 것이 좋은 경우 등에 종종 사용되나.

## Generator Expression

Generator Expression은 Generator Comprehension으로도 불리는데, List Comprehension광 외관상 유사하다. List Comprehension은 앞뒤를 []처럼 대괄호로 표현한다면, Generator Comprehension은 ()처럼 둥근 괄호를 사용한다. 하지만 Generator Comprehension은 List Comprehension과 달리 실제 리스트 컬렉션 데이터 전체를 리턴하지 않고, 그 표현식만 갖는 Generator 객체만 리턴한다. 즉 실제 실행은 하지 않고, 표현식만 가지며 위의 yield 방식으로 Lazy Operation을 수행하는 것이다.

```python
g = (n*n for n in range(1001))

print(type(g)) #<class 'generator'>

#리스트로 일괄 변환시
#mylist = list(g)

for i in range(10):
    value = g.__next__()
    print(value)

# 나머지 모두 출력
for i in g:
    print(i)
```
