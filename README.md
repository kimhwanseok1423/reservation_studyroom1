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
