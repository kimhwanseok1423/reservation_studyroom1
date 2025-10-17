<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
🏗️ 프로젝트 개요
| 항목        | 내용                                               |
| --------- | ------------------------------------------------ |
| **프로젝트명** | MiniSpace (스터디룸 예약 플랫폼)                          |
| **목표**    | 사용자와 관리자가 사용할 수 있는 공간 예약 시스템 구현                  |
| **개발스택**  | React + Spring Boot + MySQL + JPA + JWT + AWS S3 |
| **핵심포인트** | 예약 중복 처리, JWT 인증, 관리자 승인, SpaceCloud 스타일 UI      |

📄 핵심 기능 명세
👤 사용자 기능

회원가입 / 로그인 (JWT 기반)

스터디룸 목록 보기 (카테고리별, 지역별)

스터디룸 상세 보기 (사진, 설명, 위치, 태그)

날짜 + 시간 선택 후 예약 신청

내 예약 내역 확인 / 취소

리뷰 작성 / 수정 / 삭제

🧑‍💼 관리자 기능

스터디룸 등록 / 수정 / 삭제

예약 승인 / 거절 / 취소

리뷰 모니터링 (필요 시 삭제)

⚙️ 공통 기능

파일 업로드 (썸네일)

예약 중복 검사 (같은 날짜/시간 겹침 방지)

카카오 지도 API (스터디룸 위치 표시)

반응형 UI (SpaceCloud 스타일)

🧱 데이터베이스 설계 (ERD 초안)
User
 ├─ id (PK)
 ├─ email
 ├─ password
 ├─ nickname
 ├─ role (USER / ADMIN)

StudyRoom
 ├─ id (PK)
 ├─ name
 ├─ description
 ├─ location
 ├─ capacity
 ├─ imageList (ElementCollection or Sub-entity)
 ├─ category

Reservation
 ├─ id (PK)
 ├─ user_id (FK)
 ├─ room_id (FK)
 ├─ date
 ├─ startTime
 ├─ endTime
 ├─ status (PENDING / CONFIRMED / CANCELLED)

Review
 ├─ id (PK)
 ├─ user_id (FK)
 ├─ room_id (FK)
 ├─ rating
 ├─ comment
 ├─ createdAt
>>>>>>> 4d554936c6dab8fcd6ead9dde018a6abde6549a5
