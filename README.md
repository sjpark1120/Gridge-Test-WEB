#  그릿지테스트 web
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
#### [License: Only use for softsquared project]
🏠 [템플릿 페이지](http://localhost:3000)

## 파일구조
***
```
📦src
 ┣ 📂apis 
 ┃ ┣ 📜Auth.ts   -> 로그인, 회원가입 관련 api
 ┃ ┣ 📜CustomAxios.tsx   -> axios 인스턴스
 ┃ ┣ 📜Feed.ts   -> 피드 관련 api
 ┃ ┣ 📜firebase.ts   -> 파이어베이스 관련 키
 ┃ ┣ 📜Kakao.ts   -> 카카오 관련 키
 ┃ ┣ 📜test.ts
 ┃ ┗ 📜User.ts   -> 유저 관련 api
 ┣ 📂assets   -> 이미지 어셋
 ┣ 📂components
 ┃ ┣ 📂Comment   ->댓글 컴포넌트
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂Content
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂FeedPost   ->게시글 컴포넌트
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂Header   -> 헤더 컴포넌트
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂PostEdit   -> 게시글 수정 컴포넌트
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂PostWriter   ->게시글작성 컴포넌트
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂Sidebar
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂signup   -> 회원가입(정보입력, 생일입력, 약관동의) 컴포넌트
 ┃ ┃ ┣ 📜AgreeBox.tsx
 ┃ ┃ ┣ 📜BasicBox.tsx
 ┃ ┃ ┗ 📜BirthdayBox.tsx
 ┃ ┗ 📜styles.ts  -> globalstyles 설정
 ┣ 📂config
 ┃ ┗ 📜constant.ts
 ┣ 📂layout
 ┃ ┗ 📜DefaultLayout.tsx
 ┣ 📂models
 ┃ ┗ 📜BusinessModel.ts
 ┣ 📂pages
 ┃ ┣ 📂Board   -> 게시글 상세 페이지
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂dashboard
 ┃ ┃ ┗ 📜Dashboard.tsx
 ┃ ┣ 📂home   -> 홈(피드) 페이지
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂login   -> 로그인 페이지지
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂page404
 ┃ ┃ ┗ 📜Page404.tsx
 ┃ ┣ 📂page500
 ┃ ┃ ┗ 📜Page500.tsx
 ┃ ┣ 📂Pay   -> 결제 페이지
 ┃ ┃ ┣ 📜Pay.tsx
 ┃ ┃ ┣ 📜portone.d.ts   ->포트원 관련 타입선언
 ┃ ┃ ┗ 📜styles.tsx
 ┃ ┣ 📂PayRedirection   -> 결제 리다이렉트 페이지
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Redirection   -> 카카오 로그인 리다이렉트 페이지
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂signup   -> 회원가입 페이지
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.tsx
 ┣ 📂recoil   ->리코일
 ┃ ┣ 📜login.ts
 ┃ ┗ 📜signup.ts
 ┣ 📂utils   -> 이메일, 전화번호 형식 검사 함수
 ┃ ┗ 📜utility.ts
 ┣ 📜App.tsx
 ┣ 📜custom.d.ts
 ┣ 📜index.tsx
 ┗ 📜routes.ts
```

## Prerequisites
***
- npm = 8.19.2
- node = v18.12.1

## 설치법
***
```sh
npm install -g eslint prettier

npm install
```

## 로컬 실행법 / 배포 소스 빌드법
***
```sh
npm run start # 로컬에서 실행
 
npm run build-dev # dev 환경용 build 파일 생성

npm run build-stage # stage 환경용 build 파일 생성 

npm run build-prod # prod 환경용 build 파일 생성
```

