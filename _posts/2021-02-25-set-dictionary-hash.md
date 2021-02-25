---
title: Set, Dictionary, Hash
categories:
    - 자료구조
    - Data Structure
tags:
    - 자료구조
    - Data Structure
---

# Set

set는 list처럼 순열 자료구조이다. 하지만 set는 순서라는 개념이 존재하지 않는다.

### 특징

-   데이터를 비순차적으로 저장할 수 있는 순열 자료구조이다.
-   삽입 순서대로 저장되지 않는다.
-   수정가능하다.
-   동일한 값을 여러번 삽입 불가능하다. 동일한값이 여러번 삽입 되면 하나의 값만 저장된다.
-   Fast Lookup이 필요할 때 주로 쓰인다.

### 구조

![https://images.velog.io/images/kcs15987/post/0f3e5c2e-e950-4ac8-a6c6-09d2fd2c27f4/image.png](https://images.velog.io/images/kcs15987/post/0f3e5c2e-e950-4ac8-a6c6-09d2fd2c27f4/image.png)

-   set요소들이 저장될 때 순서는 다음과 같다.
    -   저장할 요소읙 값의 hash 값을 구한다.
    -   hash값에 해당하는 공간(bucket)에 값을 저장한다.
-   이렇게 set는 저장하고자 하는 값의 해쉬값에 해당하는 bucket에 값을 저장하기 때문에 순서가 없다. 순서가 없기 때문에 indexing도 없다.
-   hash값을 기반으로 저장하기 때문에 look up이 굉장히 빠르다.

# Dictionary

Dictionary는 key-value 형태의 값을 저장할 수 있는 자료구조이다.

### 특징

-   set와 마찬가지로 특정 순서대로 데이터를 리턴하지 않는다.
-   key의 값은 중복될수 없다.(만일 중복된 key가 있으면 먼저 있던 key와 value를 대체한다.)
-   수정 가능하다.

### 구조

![https://images.velog.io/images/kcs15987/post/1472d860-6766-44cd-a754-53925ac9748c/image.png](https://images.velog.io/images/kcs15987/post/1472d860-6766-44cd-a754-53925ac9748c/image.png)

-   set와 비슷하게 key값의 hash값을 구한 후 hash값에 속해있는 bucket에 값을 저장한다.

# Hash

hash란 단 방향 암호화이다. 입력 데이터를 변환하여 원본 데이터로 복호화할 수 없도록 하는 과정이다.
