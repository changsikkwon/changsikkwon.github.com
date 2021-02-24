---
title: "About Me"
layout: About Me
permalink: /profile/
author_profile: true
---

# 권창식 Kwon changsik

### **모든 사람의 일상에 자연스럽게 녹아든 서비스를 개발하고 싶습니다.**

```
    함께인 것을 중요하게 여기는 **백엔드 개발자 권창식**입니다.
    협업에서 오는 시너지의 매력에 빠져 개발을 시작하게 되었습니다. 
    커뮤니티 내에서 사람들과의 유대감에 비례해 저도 함께 성장할 수 있다고 생각합니다.

    '세상에 불가능한 일은 없다'는 말만큼 개발을 잘 표현하는 단어는 없습니다.
    새로운 경험을 좋아하기 때문에 현재에 만족하지않고 끊임없이 도전하는 개발을 지향합니다.
```

> Self Interview

- **어떤 회사를 찾고 있나요**

    현재에 만족하지 않고 끊임없이 발전하려는 의지를 가지고 있는 회사와 함께하고 싶습니다. 회사와 구성원의 생각이 일치한다면 회사의 폭발적인 발전은 곧 자신의 발전속도와 동일하다고 생각합니다.

- **일에 있어 가장 중요하게 생각하는 것이 있다면?**

    동료와의 소통이 가장 중요하다고 생각합니다. 3번의 프로젝트 동안 소통이 좋았던 팀과 그렇지 않은 팀의 결과를 지켜본 결과 개개인의 실력을 떠나서 과정과 결과물이 차이가 많이 나는 것을 봤습니다.

- **당신만의 강점이 있다면?**

    포기하지 않습니다. 어떤 어려운 상황이 다가왔을때 상황을 냉정히 판단하여 최적의 상황을 만들기 위해 포기하지 않고 끝까지 노력합니다.

- **스트레스는 어떻게 푸시나요?**

    보통 하고자 하는 일이 안 풀릴 때 스트레스를 받습니다. 하지만 기본적으로 스트레스에 큰 의미를 두지 않아 스트레스를 많이 받지 않습니다. 그럼에도 스트레스가 남아있는 경우 하루를 일찍 마무리해서 잠을 일찍 자고 일어나면 스트레스가 대부분 해소됩니다.

# Contact

📨 **Email**  kcs15987@gmail.com

📞 **Phone** 010-3530-9189

👨🏻‍💻 **Blog**  [https://www.notion.so/print-3484506cf9ee4358bb0549100cea8e74](https://www.notion.so/print-3484506cf9ee4358bb0549100cea8e74)

✅ **Github**  [**https://github.com/changsikkwon**](https://github.com/changsikkwon)

🚀 **Rocket Punch**  [**https://www.rocketpunch.com/@kcs15987**](https://www.rocketpunch.com/@kcs15987)

# Skills

- Python3
- Django
- Flask
- Mysql
- Graphql
- AWS EC2/RDS
- Git/Github

# Work Experience

### 브랜디 - 개발인턴

📆   2020.09.14 - 2020.10.15

위코드 과정 진행중 약 5주간 브랜디에서 인턴 과정을 진행했습니다.

인턴과정에서는 쇼핑몰 페이지인 Service 페이지와 Admin 페이지인 BackOffice 페이지를 클론하는 프로젝트를 진행하였습니다.

주 2회 코드리뷰를 진행하며 SQL 작성, 예외에 따른 트랜잭션 처리 및 실시간 데이터 조회를 위해 RDBMS에 대한 깊은 이해와, 튜닝이 필요하다는 것을 알게 되었습니다

### 심원개발 - Laser Machine Operator

📆   2017.08 - 2019.05

차량의 프레임을 절단하는 Laser Machine Operator로 근무를 하였습니다.

장비의 잦은 고장을 고치고 각종 제품의 제원을 이해하고 해당 제품을 커팅하는 도면 파일을 수정했습니다.

# Project

### 브랜디 스테이징 서비스 & 백오피스 클론 프로젝트

**모바일에 최적화된 쇼핑 환경을 구현하는 패션 커머스 기업**

10명이 한 팀이 되어 서비스 & 백오피스 클론을 각 5명씩 진행하였습니다.

📆   2020.09.14 - 2020.10.15

### Github Repository

✅   [https://github.com/changsikkwon/Service-backend](https://github.com/changsikkwon/Service-backend)

[https://youtu.be/oJ5L4m9CAvk](https://youtu.be/oJ5L4m9CAvk)

### **담당 기능**

**구글 소셜 로그인 및 회원가입, 로그인**

- 구글 오픈소스 api를 활용하여 구글 회원정보 요청
- 회원 유무 파악 후 jwt를 사용하여 access_token 발행하여 권한 인가
- bcrypt를 사용하여 비밀번호 암호화

**배송지 정보 CRUD**

- Login Decorator를 사용하여 access_token에 해당하는 User의 배송지 정보 데이터 CRUD
- 기존의 배송지 정보 이력은 soft delete를 적용하여 이력 관리

**마이페이지 주문한 상품리스트**

- Login Decorator를 사용하여 access_token에 해당하는 User의 장바구니 데이터 출력
- 상품의 구매취소, 환불요청, 환불요청취소 주문상태변경
- 기존의 주문상태 이력은 soft delete 를 적용하여 이력 관리

**이벤트 목록**

- Querystring을 사용한 filtering 기능 및 pagination구현

**이벤트 상세 정보 반환**

- pathparameter를 사용하여 어떤 데이터에 접근할 것인지 관리

### 사용한 기술

- Python3
- Flask
- Sqlalchemy
- MySQL
- AWS EC2 | RDS
- PostMan
- Git | GitHub

---

## Hyunlaneige **프로젝트**

**피부 수분에 대한 연구를 기초로 한 화장품 브랜드인 Laneige 사이트 클론 프로젝트**

Front-end 3명 Back-end2명이 한 팀이 되어 진행하였습니다.

📆   2020.08.31 - 2020.09.11

### Github Repository

✅   [https://github.com/changsikkwon/2nd-project](https://github.com/changsikkwon/2nd-project)

[https://www.youtube.com/watch?v=qiS5dv2H8Yo](https://www.youtube.com/watch?v=qiS5dv2H8Yo)

### **담당 기능**

- 모든 API에 대한 Unit Test 구현
- 중복되어 불필요한 query로 인한 DB hit를 막기위해 select_related 또는 prefetch_related를 사용

**카카오 소셜 로그인 및 회원가입, 로그인**

- 카카오 오픈소스 api를 활용하여 카카오 회원정보 요청
- 회원 유무 파악 후 jwt를 사용하여 access_token 발행하여 권한 인가
- bcrypt를 사용하여 비밀번호 암호화

**장바구니 상품리스트 CRUD**

- Login Decorator를 사용하여 access_token에 해당하는 User의 장바구니 데이터 CRUD

상품 **리뷰 CRUD**

- Login Decorator를 사용하여 accee_token에 해당하는 User의 상품 리뷰 데이터 CUD
- Read의 경우 해당 상품인 경우만 확인 후 데이터 출력

### 사용한 기술

- Python3
- Django
- Django-extensions
- MySQL

- AWS EC2 | RDS
- PostMan
- Git | GitHub

---

## Kibon 프로젝트

**본죽, 본죽&비빔밥cafe, 본도시락 등의 음식을 판매하는 프랜차이즈 본죽 사이트 클론 프로젝트**

Front-end 4명 Back-end2명이 한 팀이 되어 진행하였습니다.

📆   2020.08.18 - 2020.09.28

### Github Repository

✅   [https://github.com/changsikkwon/1st-project](https://github.com/changsikkwon/1st-project)

[https://www.youtube.com/watch?v=f84czHkMht8&feature=youtu.be](https://www.youtube.com/watch?v=f84czHkMht8&feature=youtu.be)

### **담당 기능**

- 중복되어 불필요한 query로 인한 DB hit를 막기위해 select_related 또는 prefetch_related를 사용

**Crawling**

- Selenium을 통한 상품에 대한 Data Crawling
- csv file을 DB upload script file 작성

**카테고리 별 상품 목록**

- QueryString을 활용하여 카테고리 별 상품 목록 데이터 출력

**숙소 상세 페이지**

- PathParameter를 사용하여 해당 상품의 데이터만 출력

상품 **검색**

- Q객체를 활용하여 상품목록과 같은 View에 작성
- QueryString을 활용하여 해당 단어나 글자에 해당하는 모든 데이터 출력

### 사용한 기술

- Python3
- Django
- Django-extensions
- Selenium
- MySQL
- AWS EC2 | RDS
- PostMan
- Git | GitHub

# Education

### **WECODE 11기**

**전문가와 오프라인 중심의 실무위주 커리큘럼으로 구성된 코딩 부트캠프**

📆   2020.07.20 - 2020.10.16

3개월 동안 프로그래밍의 기본지식과 더불어 백엔드의 기본을 갖추는 것에 집중하였습니다.

총 2개의 프로젝트를 진행하며 프론트엔드와 백엔드의 소통방법에 대해 많은 지식을 습득하였습니다.