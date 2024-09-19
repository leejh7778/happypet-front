<h1 align="center">AICC Project 1 - HappyPet </h1>
<h3 align="center">동물병원 조회 및 예약문의 서비스</h3>

## 프로젝트 소개

이 프로젝트는 [펫트라슈](https://www.petraschu.com/)라는 실제 사이트를 참조하여 만든 동물병원 조회 및 예약문의 서비스입니다.

- 이 Repository에서는 **프론트엔드**에 관한 내용만 담고 있습니다.
- 개발 기간: 24.08.20 ~ 24.09.03
- 프론트엔드 배포: <https://happypet.aiccchant.com>

## 시작 가이드

### Requirements

1. **Node.js**: 20.15.1
2. **npm**: 10.7.0

### Installation

```bash
1. $ git clone https://github.com/leejh7778/happypet-front.git
2. $ npm install
3. $ npm start
```

- 로컬 서버는 기본적으로 http://localhost:3000 에서 실행됩니다.

## Stacks 🐈


### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Node.JS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white")
![AWS](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white")

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development
![Html](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white")
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)


## 주요기능

- 로그인&회원가입
  - 아이디&이메일 중복불가
  - 비로그인 상태에서 마이페이지 & 병원 예약/1대1문의 접근불가
- 현재 위치 기반 주변 병원조회, 원하는 지역 검색
  - 네이버 지도 API가 더이상 서비스되지 않는 관계로, 구체적인 주소 입력 불가. 도/시/구/동 등의 단위로만 검색가능
  - 마우스 드래그 & 휠 사용으로 지역 이동 가능
- 예약 및 1대1문의 신청
  - 병원 마커를 누르면 Modal 창에서 정보입력 가능
  - 현재 날짜 이전의 일자는 선택불가
- 마이페이지에서 내역 조회/수정/삭제
- 마이페이지에서 회원탈퇴 가능
