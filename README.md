<div align="center">
  <img src="https://github.com/user-attachments/assets/291a0310-4cfc-4268-b31a-24d847b89e11" width="200" height="200" alt="로고 이미지" />
  <h1>Devrium</h1>
  <p> 개발자들을 위한 SNS 플랫폼</p>
</div>

# 서비스 소개
개발자들을 위한 SNS 플랫폼입니다. 
직관적인 UI와 간편한 글쓰기 방식, 풍부한 사용자 프로필 제공 기능으로 개발자들이 지식을 공유하고
네트워크를 형성하며 자유로운 커뮤니티 분위기를 형성을 할 수 있는 환경을 제공합니다. 

# 서비스를 만든 계기 
개발자들을 위한 기존 플랫폼들이 가진 강점과 단점을 분석해, 보다 효율적이고 사용하기 쉬운 서비스를 만들고자 했습니다. 

**1. x.com의 장점**
  - 직관적인 UI 덕분에 처음 접하는 사용자들에게도 부담이 없음(UX)
    
**2. Reddit의 장점**
  - 간편한 글쓰기 양식 제공
  - 풍부한 사용자 프로필 제공
    
**3. Velog의 장점**
  - 마크다운으로 글을 작성하면서 동시에 어떻게 작성되는지 보여줘 사용자 경험을 크게 개선함
    
**4. Stack Overflow의 단점 개선**
  - 글을 작성하기 위해선 제목을 입력하고 유사 질문을 찾아보는 번거로운 절차가 필요
  - 질문을 작성하는데 시간이 많이 걸리는 불편한 글쓰기 양식

이러한 문제를 해결하기 위해, Stack Overflow의 복잡한 글쓰기 방식을 Reddit과 Velog 스타일로 간소화 하였고
X.com의 직관적인 UI를 도입하여 누구나 쉽게 사용할 수 있는 플랫폼을 구현하였습니다.

# 개발 기간 
| 기간(4주)| 내용|
|-|-|
| 2024.12.18 ~ 2024.12.21| ERD, 와이어프레임, API 명세서 작성 |
| 2023.12.22 ~ 2023.12.25 | 로그인 구현|
| 2023.12.26 ~ 2024.01.08 | 기능 구현 및 디자인|
| 2024.01.09 ~ 2024.01.13 | 최적화 및 리팩토링|

# 🛠️ Stack

### ✔️ Language & Framework

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white">

### ✔️ State management

<img src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=for-the-badge&logo=TanstackQuery&logoColor=white">

### ✔️ Authentication

<img src="https://img.shields.io/badge/Auth.js-191919?style=for-the-badge&logo=nextauth&logoColor=black">

### ✔️ Design System & Style

<img src="https://img.shields.io/badge/shadcnui-000000?style=for-the-badge&logo=shadcnui&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### ✔️ Database & ORM

<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"> <img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">

### ✔️ form Validation
<img src="https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white"> <img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">

# 기술 스택 선정 이유
### 📌Next.js
**1. SSR을 통한 빠른 로딩과 SEO 최적화**
  - SSR을 통해 초기 로딩 속도를 계선하고, UX 측면에서 이점을 얻기 위해 사용하였다.
  - SEO 친화적인 환경을 제공해 SNS 서비스의 접근성을 높혔다.

**2. Turbopack**
  - Next.js의 개발 도구인 Turbopack을 활용해 기존 webpack 방식보다 더 빠른 속도로 개발이 가능하기에 DX를 향상시킨다.

### 📌tailwindcss & shadcn/ui
**1. 재사용 가능한 컴포넌트**
  - Shadcn/UI는 재사용 가능한 컴포넌트를 복사하여 사용하는 방식으로 타 UI 라이브러리에 비해 패키지 크기가 작아 성능이 더 우수하다.
  - Tailwindcss 와의 조합으로 일관된 디자인 시스템과 빠른 스타일링 작업이 가능하다.

### 📌TanStack Query 
**1. 효율적인 서버 상태 관리**
  - 무한스크롤과, 쿼리무효화, 요청 상태 관리, 리페칭 기능을 제공해 서버 상태관리를 보다 효율적으로 관리할 수 있다.

### 📌Auth.js 
**1. 소셜 로그인 통합**
  - 다양한 소셜 로그인 옵션을 간편하게 구현할 수 있다.
 
**2. 세션, JWT**
  - 세션 및 JWT 토큰을 활용해 인증과 보안 기능을 제공할 수 있다. 

### 📌Prisma & Supabase
**1. 타입 안전성과 효율적인 테이블 관리**
  - Prisma Client를 통한 테이블 엔터티 타입 빌더 옵션과 데이터 베이스를 보다 빠르게 편집할 수 있는 GUI 편집기 기능 제공
**2. DX 향상**
  - Prisma를 활용해 테이블 스키마 변경 및 관리 용이성을 높힘   

### 📌zustand 
**1. 경량 전역 상태 관리**
  - 모듈의 크기가 작아 클라이언트 상태 관리에 적합

###  react-hook-from & zod 
**1. 스키마 기반 검증**
  - zod를 통해 가독성 높은 스키마 기반 검증을 구현하여 보일러플레이트 코드를 줄입니다.
**2. 간결하고 효율적인 폼 관리**
  - react-hook-form을 사용해 최소한의 코드로 폼 상태를 관리

# 기능
## Auth
  - Auth.js를 활용한 Google 소셜 로그인 기능 구현
  - JWT를 통한 사용자 세션 관리
  - 미들웨어를 통해 특정 페이지에 대한 사용자 접근 제한 
    
## 게시글 작성 및 조회
 - 마크다운을 활용한 자유로운 형식의 게시글 작성
 - 다양한 게시글 카테고리 기능 제공 (팀원 모집, 질문, 코드리뷰 및 공유, 개발 밈 등)
 - 게시글 조회시 TanStack Query를 활용한 무한스크롤 구현
 - SEO 최적화를 위해 페이지별로 동적 메타데이터 제공
 - 작성된 게시글과 댓글 기반의 랭킹 기능 제공

## 기타 
- Shadcn/ui를 활용한 다크모드 제공
- 모바일 반응형 적용
- 스켈레톤 UI 적용
- Toast 알림을 통한 즉각적인 피드백 제공

# 화면 구성 
| Landing | Login |
| - | - |
|  ![landing](https://github.com/user-attachments/assets/69d31526-e57a-491e-8c50-982f9c5cdfa8) |![login](https://github.com/user-attachments/assets/147bb849-3425-4f6e-9bad-83dab18dab09)|

| Home | Profile |
| - | - |
|![home](https://github.com/user-attachments/assets/e622de5d-dafa-4338-9dca-4d94b57ad336) | ![profile](https://github.com/user-attachments/assets/388497d9-f4b3-4f4d-8b56-d3a57feb3970)|

| Post | Write |
| - | - |
| ![postdetail](https://github.com/user-attachments/assets/4ab8eafa-86ad-4b1b-a1b2-616bafe11473) | ![write](https://github.com/user-attachments/assets/82a03fce-54c4-40a6-8c31-20cec3b5c254) |


