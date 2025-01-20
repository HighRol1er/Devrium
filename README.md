<div align="center">
  <img src="https://github.com/user-attachments/assets/291a0310-4cfc-4268-b31a-24d847b89e11" width="200" height="200" alt="로고 이미지" />
  <h1>Devrium</h1>
  <p> 개발자들을 위한 AI SNS 플랫폼</p>
</div>

# 서비스 소개
개발자들을 위한 AI SNS 플랫폼입니다. 
직관적인 UI와 간편한 글쓰기 방식, 풍부한 사용자 프로필 제공 기능으로 개발자들이 지식을 공유하고
네트워크를 형성하며 자유로운 커뮤니티 분위기를 형성을 할 수 있는 환경을 제공합니다. 

게시글에 AI 답글을 함께 볼 수 있어 특정 주제에 더 풍부한 논의를 즐길 수 있습니다.

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
  - 질문에 대한 답글이 달리기까지 생각보다 오랜 시간이 걸림

## 문제 해결
이러한 문제를 해결하기 위해, Stack Overflow의 복잡한 글쓰기 방식을 Reddit과 Velog 스타일로 간소화 하였고,
AI를 활용하여 특정 시간 내에 답글이 달리지 않을 경우 AI가 자동으로 답변을 제공하도록 하여 사용자들이 빠르게 도움을 받을 수 있는 환경을 마련했습니다. 
X.com의 직관적인 UI를 도입하여 누구나 쉽게 접근하고 사용할 수 있는 플랫폼을 구현했습니다.

# 🛠️ Stack

<details>
<summary>📁 package.json (version)</summary>
<div markdown="1">

```json
{
  "dependencies": {
    "-": "^0.0.1",
    "@auth/prisma-adapter": "^2.7.4",
    "@eslint/eslintrc": "^3.2.0",
    "@hookform/resolvers": "^3.9.1",
    "@next/bundle-analyzer": "^15.1.4",
    "@prisma/client": "^6.1.0",
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.4",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.47.9",
    "@tanstack/react-query": "^5.62.8",
    "@tanstack/react-query-devtools": "^5.62.10",
    "bcryptjs": "^2.4.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.468.0",
    "next": "15.1.0",
    "next-auth": "^5.0.0-beta.25",
    "next-themes": "^0.4.4",
    "openai": "^4.78.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-dropzone": "^14.3.5",
    "react-hook-form": "^7.54.1",
    "react-markdown": "^9.0.1",
    "react-syntax-highlighter": "^15.6.1",
    "remark-gfm": "^4.0.0",
    "save": "^2.9.0",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.1",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@tanstack/eslint-plugin-query": "^5.62.1",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/react": "^16.1.0",
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/react-syntax-highlighter": "^15.5.13",
    "@typescript-eslint/eslint-plugin": "^8.18.1",
    "@typescript-eslint/parser": "^8.18.1",
    "@vitejs/plugin-react": "^4.3.4",
    "cross-env": "^7.0.3",
    "eslint": "^8.57.1",
    "eslint-config-next": "^15.1.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-storybook": "^0.11.2",
    "jsdom": "^26.0.0",
    "postcss": "^8",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.9",
    "prisma": "^6.1.0",
    "tailwindcss": "^3.4.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.7.2",
    "vite-tsconfig-paths": "^5.1.4",
    "vitest": "^2.1.8"
  }
}
```
  </div> 
</details>

### ✔️ Language & Framework

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white">

### ✔️ AI 
<img src="https://img.shields.io/badge/openai-412991?style=for-the-badge&logo=openai&logoColor=white">

### ✔️ State management

<img src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">

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
  - SSR을 통해 초기 로딩 속도를 계선하고, UX 측면에서 이점을 얻기 위해 사용
  - SEO 친화적인 환경을 제공해 SNS 서비스의 접근성을 높힘

**2. Turbopack**
  - Next.js의 개발 도구인 Turbopack을 활용해 기존 webpack 방식보다 더 빠른 속도로 개발이 가능하기에 DX을 높힘

### 📌OpenAI
**1. OpenAI의 기술 활용 이유 및 장점**
  - AI를 활용한 자동 댓글 생성
  - 댓글이 없는 경우의 유동성 제공

### 📌TanStack Query 
**1. 효율적인 서버 상태 관리**
  - 무한스크롤과, 쿼리무효화, 요청 상태 관리, 리페칭 기능을 제공해 서버 상태관리를 보다 효율적으로 관리할 수 있다

### 📌Auth.js 
**1. 소셜 로그인 통합**
  - 다양한 소셜 로그인 옵션을 간편하게 구현할 수 있다
 
**2. 세션, JWT**
  - 세션 및 JWT 토큰을 활용해 인증과 보안 기능을 제공할 수 있다

### 📌Prisma & Supabase
**1. 타입 안전성과 효율적인 테이블 관리**
  - Prisma Client를 통한 테이블 엔터티 타입 빌더 옵션과 DB를 보다 빠르게 편집할 수 있는 GUI 편집기 기능 제공

**2. DX 향상**
  - Prisma를 활용해 테이블 스키마 변경 및 관리 용이성을 높힘

### 📌tailwindcss & shadcn/ui
**1. 재사용 가능한 컴포넌트**
  - Shadcn/UI는 재사용 가능한 컴포넌트를 복사하여 사용하는 방식으로 타 UI 라이브러리에 비해 패키지 크기가 작아 성능적으로 더 우수
  - Tailwindcss 와의 조합으로 일관된 디자인 시스템과 빠른 스타일링 작업이 가능

### 📌zustand 
**1. 가볍고 효율적인 전역 상태 관리**
  - React Context API에 비해 성능 부하가 적고, 불필요한 리렌더링을 방지하는 구조로 클라이언트 상태 관리에 적합
  - 패키지의 크기가 작아 초기 로딩 속도 과정에서 타 상태 관리 라이브러리보다 우수

###  📌react-hook-from & zod 
**1. 스키마 기반 검증**
  - zod를 통해 가독성 높은 스키마 기반 검증을 구현하여 보일러플레이트 코드를 줄임

**2. 간결하고 효율적인 폼 관리**
  - react-hook-form을 사용해 최소한의 코드로 폼 상태를 관리

# 주요 기능 구현
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

## 댓글 
  - OpenAI를 활용해 사용자 게시글에 자동 댓글 생성 기능을 제공해 커뮤니티 내 논의가 더 풍부해지고 활성화됨
  - 특정 시간 내에 댓글이 달리지 않은 게시글에 AI가 자동으로 답변을 제공함으로써 사용자의 사이트 재방문율을 높힘
  - 초기 사용자나 활성도가 낮은 게시글에 AI의 기초적인 답변을 제공해 커뮤니티의 균형을 유지

## UI 
- Shadcn/ui를 활용한 다크모드 제공
- 모바일 반응형 적용
- 스켈레톤 UI 적용
- Toast 알림을 통한 즉각적인 피드백 제공

# 트러블 슈팅 및 구현 경험

## 1. 미들웨어를 통한 인증 흐름 최적화
- `set-tagName page`에서 사용자가 태그 이름(Tag name)을 지정한 후, 사용자가 수동으로 재 로그인하여 JWT를 갱신해야 하는 문제가 있었습니다.

이를 해결하기 위해 setTagName POST API를 통해 사용자가 지정한 태그 이름을 서버로 전달할 경우 

미들웨어를 통해서 새로운 JWT를 클라이언트 세션에 즉각 반영하도록 구현해 이전에 있었던 UX 문제를 해결했습니다.

## 2. Vercel Scheduled Functions을 활용한 자동화 OpenAI API 구축
- 초기에는 `setInterval`을 활용해 일정 주기로 백엔드에서 작업을 실행했지만
이는 서버가 지속적으로 실행되어야 했고 더 많은 작업을 추가하거나, 배포환경에서 크론 작업을 관리하기 어려웠습니다.
이러한 문제를 Vercel의 외부 Scheduled Functions를 활용해 서버리스 환경에서 안정적이고 자동화된 OpenAI 댓글 작업 처리 기능을 구현했습니다.

## 3. Bundle-Analyzer를 활용한 번들 최적화
- 빌드 과정에서 `write` 페이지의 번들 사이즈가 271KB로 다른 페이지에 비해 월등히 높은 문제가 있었습니다.
이를 해결하기 위해 다음과 같은 최적화 작업을 진행했습니다

  **A. 트리쉐이킹 적용**:
    - 사용하지 않는 코드와 스타일을 제거하여 라이브러리를 최적화.
    - 번들 크기: 271KB → 64KB로 감소.
  
  **B. 동적 임포트 추가 적용**:
    - 동적 임포트를 활용해 필요할 때만 해당 모듈을 로드.
    - 번들 크기: 64KB → 32KB로 추가 최적화.

최종적으로 기존 번들 크기를 약 88% 감소시켜 성능을 크게 향상시켰습니다.

## 4. TanStackQuery 와 SSR을 사용한 동적 라우팅 및 코드 최적화 

- 기존 카테고리 페이지는 5개의 정적 페이지로 각각 구현되어 있었고 이 방식은 다음과 같은 문제가 있었습니다.
  
  **A**. 각 페이지의 동일한 로직이 반복되어 코드 중복 발생
  
  **B**. 카테고리가 늘어남에 따라 생성되는 정적 페이지로 인한 유지 보수성 감소
  
  **C**. SSR을 사용하지 않아 발생하는 초기 로딩 속도 문제

- 해결 과정
  
  **A**. 동적 라우팅 구현
    - 기존의 정적 페이지를 `category[slug]`로 변환해 카테고리 별 페이지를 동적으로 생성
      
  **B**. TanStack Query (`prefetchInfiniteQuery`)
    - SSR로 사전에 미리 데이터를 캐싱한 뒤 클라이언트에게 제공함으로서 LCP 개선 (7%)
      
  **C**. 상수화를 통한 코드 일관성 및 유지보수성 강화
    - 동적 라우트에서 사용되는 `[slug]`값과 prefetch에 사용되는 쿼리 키를 상수로 관리하여 코드의 일관성을 유지하고 유지보수성 개선
      
## 와이어 프레임 
![wire-frame](https://github.com/user-attachments/assets/700c7013-4d04-4140-82a4-5a56142dc79a)

## ERD
![erd](https://github.com/user-attachments/assets/12708963-446b-4d2a-af39-e1c90db07f40)

## API Documentation
![api-recipt](https://github.com/user-attachments/assets/79ca694e-e77a-4673-9d8b-2f89a9541e14)

# 화면 구성 
| Landing | Login |
| - | - |
|  ![landing](https://github.com/user-attachments/assets/69d31526-e57a-491e-8c50-982f9c5cdfa8) |![login](https://github.com/user-attachments/assets/147bb849-3425-4f6e-9bad-83dab18dab09)|

| Home | Profile |
| - | - |
|![home](https://github.com/user-attachments/assets/e622de5d-dafa-4338-9dca-4d94b57ad336) | ![profile](https://github.com/user-attachments/assets/388497d9-f4b3-4f4d-8b56-d3a57feb3970)|

| Post | Write |
| - | - |
| ![postdetail](https://github.com/user-attachments/assets/83afcd3c-8721-485a-8e48-fbc51ce9f91a) | ![write](https://github.com/user-attachments/assets/82a03fce-54c4-40a6-8c31-20cec3b5c254) |


